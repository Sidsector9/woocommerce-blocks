/**
 * External dependencies
 */
import { insertBlock } from '@wordpress/e2e-test-utils';
/**
 * Internal dependencies
 */

export const block = {
	name: 'Product Query',
	slug: 'woocommerce/product-query',
	selectors: {
		editor: {
			inheritQueryFromTemplateSetting:
				"//label[text()='Woo Inherit query from template']",
			displaySettings:
				"//button[contains(@aria-label, 'Display settings')]",
			itemsPerPageInputValue: "//input[@value = '6']",
		},
		frontend: {
			classicProductsListName: '.woocommerce-loop-product__title',
			productQueryProductsListName:
				'.wp-block-query .wp-block-post-title',
		},
	},
};

export const ensureSidebarOpened = async () => {
	const toggleSidebarButton = await page.$(
		'.edit-post-header__settings [aria-label="Settings"][aria-expanded="false"],' +
			'.edit-site-header__actions [aria-label="Settings"][aria-expanded="false"],' +
			'.edit-widgets-header__actions [aria-label="Settings"][aria-expanded="false"],' +
			'.edit-site-header-edit-mode__actions [aria-label="Settings"][aria-expanded="false"]'
	);

	if ( toggleSidebarButton ) {
		await toggleSidebarButton.click();
	}
};

export const addProductQueryBlock = async () => {
	await insertBlock( block.name );
	await page.waitForNetworkIdle();
};

const enableInheritQueryFromTemplateSetting = async () => {
	const [ button ] = await page.$x(
		block.selectors.editor.inheritQueryFromTemplateSetting
	);
	await button.click();
};

const setItemsPerPage = async () => {
	const [ firstButton ] = await page.$x(
		block.selectors.editor.displaySettings
	);
	await firstButton.click();
	const [ secondButton ] = await page.$x(
		block.selectors.editor.itemsPerPageInputValue
	);

	await secondButton.click();
	await page.keyboard.press( 'Backspace' );
	await page.keyboard.type( '12' );
};

export const configurateProductQueryBlock = async () => {
	await ensureSidebarOpened();
	await enableInheritQueryFromTemplateSetting();
	await setItemsPerPage();
};

export const getClassicProductsListName = async () => {
	const products = await page.$$(
		block.selectors.frontend.classicProductsListName
	);
	return Promise.all(
		products.map( ( el ) =>
			page.evaluate( ( node ) => node.textContent, el )
		)
	);
};

export const getProductQueryProductsListName = async () => {
	const products = await page.$$(
		block.selectors.frontend.productQueryProductsListName
	);

	return Promise.all(
		products.map( ( el ) =>
			page.evaluate( ( element ) => element.textContent, el )
		)
	);
};
