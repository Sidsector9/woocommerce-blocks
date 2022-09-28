/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import formStepAttributes from '../../form-step/attributes';

export default {
	...formStepAttributes( {
		defaultTitle: __( 'Shipping method', 'woo-gutenberg-products-block' ),
		defaultDescription: __(
			'Select how you would like to receive your order.',
			'woo-gutenberg-products-block'
		),
	} ),
	className: {
		type: 'string',
		default: '',
	},
	showIcon: {
		type: 'boolean',
		default: true,
	},
	showPrice: {
		type: 'boolean',
		default: true,
	},
	localPickupText: {
		type: 'string',
		default: __( 'Local Pickup', 'woo-gutenberg-products-block' ),
	},
	shippingText: {
		type: 'string',
		default: __( 'Delivery', 'woo-gutenberg-products-block' ),
	},
	lock: {
		type: 'object',
		default: {
			move: true,
			remove: true,
		},
	},
};