/**
 * External dependencies
 */
import { StoreNoticesContainer } from '@woocommerce/base-context';
import { useStoreCart } from '@woocommerce/base-context/hooks';

import { StoreNoticesProvider } from '@woocommerce/base-context/providers';
import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';

type FilledMiniCartContentsBlockProps = {
	children: JSX.Element;
	className: string;
};

const FilledMiniCartContentsBlock = ( {
	children,
	className,
}: FilledMiniCartContentsBlockProps ): JSX.Element | null => {
	const { cartItems, cartItemErrors } = useStoreCart();

	const { createErrorNotice } = useDispatch( 'core/notices' );

	// Ensures any cart errors listed in the API response get shown.
	useEffect( () => {
		cartItemErrors.forEach( ( error ) => {
			createErrorNotice( decodeEntities( error.message ), {
				isDismissible: true,
				id: error.code,
				context: 'wc/cart',
			} );
		} );
	}, [ createErrorNotice, cartItemErrors ] );

	if ( cartItems.length === 0 ) {
		return null;
	}

	return (
		<div className={ className }>
			<StoreNoticesProvider>
				<StoreNoticesContainer context="wc/cart" />
				{ children }
			</StoreNoticesProvider>
		</div>
	);
};

export default FilledMiniCartContentsBlock;
