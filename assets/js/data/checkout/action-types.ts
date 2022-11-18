export const ACTION_TYPES = {
	SET_IDLE: 'SET_IDLE',
	SET_REDIRECT_URL: 'SET_REDIRECT_URL',
	SET_COMPLETE: 'SET_CHECKOUT_COMPLETE',
	SET_BEFORE_PROCESSING: 'SET_BEFORE_PROCESSING',
	SET_AFTER_PROCESSING: 'SET_AFTER_PROCESSING',
	SET_PROCESSING: 'SET_CHECKOUT_IS_PROCESSING',
	SET_HAS_ERROR: 'SET_CHECKOUT_HAS_ERROR',
	SET_CUSTOMER_ID: 'SET_CHECKOUT_CUSTOMER_ID',
	SET_ORDER_NOTES: 'SET_CHECKOUT_ORDER_NOTES',
	INCREMENT_CALCULATING: 'INCREMENT_CALCULATING',
	DECREMENT_CALCULATING: 'DECREMENT_CALCULATING',
	SET_SHIPPING_ADDRESS_AS_BILLING_ADDRESS:
		'SET_SHIPPING_ADDRESS_AS_BILLING_ADDRESS',
	SET_SHOULD_CREATE_ACCOUNT: 'SET_SHOULD_CREATE_ACCOUNT',
	SET_EXTENSION_DATA: 'SET_EXTENSION_DATA',
	SET_IS_CART: 'SET_IS_CART',
} as const;
