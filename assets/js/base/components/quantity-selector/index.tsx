/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { speak } from '@wordpress/a11y';
import classNames from 'classnames';
import { useCallback, useLayoutEffect } from '@wordpress/element';
import { DOWN, UP } from '@wordpress/keycodes';
import { useDebouncedCallback } from 'use-debounce';
import ValidationInputError from '@woocommerce/base-components/validation-input-error';
import { withInstanceId } from '@wordpress/compose';
import { useDispatch } from '@wordpress/data';
import {
	FieldValidationStatus,
	VALIDATION_STORE_KEY,
} from '@woocommerce/block-data';
import { isNull } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import './style.scss';

export interface QuantitySelectorProps {
	/**
	 * Component wrapper classname
	 *
	 * @default 'wc-block-components-quantity-selector'
	 */
	className?: string;
	/**
	 * Current quantity
	 */
	quantity?: number;
	/**
	 * Minimum quantity
	 */
	minimum?: number;
	/**
	 * Maximum quantity
	 */
	maximum: number;
	/**
	 * Input step attribute.
	 */
	step?: number;
	/**
	 * Event handler triggered when the quantity is changed
	 */
	onChange: ( newQuantity: number ) => void;
	/**
	 * Name of the item the quantity selector refers to
	 *
	 * Used for a11y purposes
	 */
	itemName?: string;
	/**
	 * Whether the component should be interactable or not
	 */
	disabled: boolean;
	/**
	 * Whether the component should allow the value to exceed the maximum or minimum. If false, the value can exceed the
	 * limits, but an error will be shown.
	 */
	strictLimits?: boolean | undefined;
	instanceId: string | number;
}

const QuantitySelector = ( {
	className,
	quantity = 1,
	minimum = 1,
	maximum,
	onChange = () => void 0,
	step = 1,
	itemName = '',
	disabled,
	strictLimits = true,
	instanceId,
}: QuantitySelectorProps ): JSX.Element => {
	const classes = classNames(
		'wc-block-components-quantity-selector',
		className
	);

	const hasMaximum = typeof maximum !== 'undefined';
	const canDecrease = ! strictLimits || quantity - step >= minimum;
	const canIncrease =
		! strictLimits || ! hasMaximum || quantity + step <= maximum;

	/**
	 * The goal of this function is to normalize what was inserted,
	 * but after the customer has stopped typing.
	 */
	const normalizeQuantity = useCallback(
		( initialValue: number ) => {
			// We copy the starting value.
			let value = initialValue;

			// We check if we have a maximum value, and select the lowest between what was inserted and the maximum.
			if ( hasMaximum && strictLimits ) {
				value = Math.min(
					value,
					// the maximum possible value in step increments.
					Math.floor( maximum / step ) * step
				);
			}

			if ( strictLimits ) {
				// Select the biggest between what's inserted, the the minimum value in steps.
				value = Math.max( value, Math.ceil( minimum / step ) * step );

				// We round off the value to our steps.
				value = Math.floor( value / step ) * step;
			}

			// Only commit if the value has changed
			if ( value !== initialValue ) {
				onChange( value );
			}
		},
		[ hasMaximum, maximum, minimum, onChange, step ]
	);

	/*
	 * It's important to wait before normalizing or we end up with
	 * a frustrating experience, for example, if the minimum is 2 and
	 * the customer is trying to type "10", premature normalizing would
	 * always kick in at "1" and turn that into 2.
	 */
	const debouncedNormalizeQuantity = useDebouncedCallback(
		normalizeQuantity,
		// This value is deliberately smaller than what's in useStoreCartItemQuantity so we don't end up with two requests.
		300
	);

	/**
	 * Normalize qty on mount before render.
	 */
	useLayoutEffect( () => {
		normalizeQuantity( quantity );
	}, [ quantity, normalizeQuantity ] );

	/**
	 * Handles keyboard up and down keys to change quantity value.
	 *
	 * @param {Object} event event data.
	 */
	const quantityInputOnKeyDown = useCallback(
		( event ) => {
			const isArrowDown =
				typeof event.key !== undefined
					? event.key === 'ArrowDown'
					: event.keyCode === DOWN;
			const isArrowUp =
				typeof event.key !== undefined
					? event.key === 'ArrowUp'
					: event.keyCode === UP;

			if ( isArrowDown && canDecrease ) {
				event.preventDefault();
				onChange( quantity - step );
			}

			if ( isArrowUp && canIncrease ) {
				event.preventDefault();
				onChange( quantity + step );
			}
		},
		[ quantity, onChange, canIncrease, canDecrease, step ]
	);

	const maxErrorId = `${ instanceId }-quantity-max`;
	const minErrorId = `${ instanceId }-quantity-min`;
	const stepErrorId = `${ instanceId }-quantity-step`;

	const validateQuantity = useCallback( () => {
		const belowMin = quantity < minimum;
		const aboveMax = quantity > maximum;
		const outsideStep = quantity % step !== 0;

		const errorMessages: Record< string, FieldValidationStatus | null > = {
			[ maxErrorId ]: null,
			[ minErrorId ]: null,
			[ stepErrorId ]: null,
		};
		if ( belowMin ) {
			errorMessages[ maxErrorId ] = {
				message: sprintf(
					/* translators: %d is the minimum quantity allowed. */
					__(
						'The minimum quantity is %d.',
						'woo-gutenberg-products-block'
					),
					minimum
				),
				hidden: false,
			};
		}

		if ( aboveMax ) {
			errorMessages[ minErrorId ] = {
				message: sprintf(
					/* translators: %d is the maximum quantity allowed. */
					__(
						'The maximum quantity is %d.',
						'woo-gutenberg-products-block'
					),
					minimum
				),
				hidden: false,
			};
		}

		if ( outsideStep ) {
			errorMessages[ stepErrorId ] = {
				message: sprintf(
					/* translators: %d is a number that the quantity must be a multiple of. */
					__(
						'The quantity must be a multiple of %d.',
						'woo-gutenberg-products-block'
					),
					step
				),
				hidden: false,
			};
		}
		return errorMessages;
	}, [ quantity, minimum, maximum, step ] );

	const { setValidationErrors, clearValidationErrors } =
		useDispatch( VALIDATION_STORE_KEY );

	useLayoutEffect( () => {
		const errors = validateQuantity();
		clearValidationErrors( Object.keys( errors ) );
		const currentErrors: Record< string, FieldValidationStatus > = {};
		Object.keys( errors ).forEach( ( key ) => {
			if ( ! isNull( errors[ key ] ) ) {
				currentErrors[ key ] = errors[ key ] as FieldValidationStatus;
			}
		} );
		setValidationErrors( currentErrors );
	}, [ quantity, validateQuantity ] );

	return (
		<div>
			<div className={ classes }>
				<input
					className="wc-block-components-quantity-selector__input"
					disabled={ disabled }
					type="number"
					step={ step }
					min={ strictLimits ? minimum : undefined }
					max={ strictLimits ? maximum : undefined }
					value={ quantity }
					onKeyDown={ quantityInputOnKeyDown }
					onChange={ ( event ) => {
						// Inputs values are strings, we parse them here.
						let value = parseInt( event.target.value, 10 );
						// parseInt would throw NaN for anything not a number,
						// so we revert value to the quantity value.
						value = isNaN( value ) ? quantity : value;

						if ( value !== quantity ) {
							// we commit this value immediately.
							onChange( value );
							// but once the customer has stopped typing, we make sure his value is respecting the bounds (maximum value, minimum value, step value), and commit the normalized value.
							debouncedNormalizeQuantity( value );
						}
					} }
					aria-label={ sprintf(
						/* translators: %s refers to the item name in the cart. */
						__(
							'Quantity of %s in your cart.',
							'woo-gutenberg-products-block'
						),
						itemName
					) }
				/>
				<button
					aria-label={ __(
						'Reduce quantity',
						'woo-gutenberg-products-block'
					) }
					className="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus"
					disabled={ disabled || ! canDecrease }
					onClick={ () => {
						const newQuantity = quantity - step;
						onChange( newQuantity );
						speak(
							sprintf(
								/* translators: %s refers to the item name in the cart. */
								__(
									'Quantity reduced to %s.',
									'woo-gutenberg-products-block'
								),
								newQuantity
							)
						);
						normalizeQuantity( newQuantity );
					} }
				>
					&#65293;
				</button>
				<button
					aria-label={ __(
						'Increase quantity',
						'woo-gutenberg-products-block'
					) }
					disabled={ disabled || ! canIncrease }
					className="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus"
					onClick={ () => {
						const newQuantity = quantity + step;
						onChange( newQuantity );
						speak(
							sprintf(
								/* translators: %s refers to the item name in the cart. */
								__(
									'Quantity increased to %s.',
									'woo-gutenberg-products-block'
								),
								newQuantity
							)
						);
						normalizeQuantity( newQuantity );
					} }
				>
					&#65291;
				</button>
			</div>
			{ ! strictLimits && (
				<div>
					<ValidationInputError propertyName={ maxErrorId } />
					<ValidationInputError propertyName={ minErrorId } />
					<ValidationInputError propertyName={ stepErrorId } />
				</div>
			) }
		</div>
	);
};

export default withInstanceId( QuantitySelector );
