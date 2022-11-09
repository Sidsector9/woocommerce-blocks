/**
 * External dependencies
 */
import { deleteAllTemplates } from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import {
	BASE_URL,
	goToTemplateEditor,
	saveTemplate,
	useTheme,
} from '../../../utils';
import {
	addProductQueryBlock,
	block,
	configurateProductQueryBlock,
	getClassicProductsListName,
	getProductQueryProductsListName,
} from './utils';

describe( `${ block.name } Block`, () => {
	useTheme( 'emptytheme' );
	beforeAll( async () => {
		await deleteAllTemplates( 'wp_template' );
		await deleteAllTemplates( 'wp_template_part' );
	} );

	afterAll( async () => {
		await deleteAllTemplates( 'wp_template' );
		await deleteAllTemplates( 'wp_template_part' );
	} );
	describe( 'with Product Catalog Template', () => {
		beforeAll( async () => {
			const productCatalogTemplateId =
				'woocommerce/woocommerce//archive-product';

			await goToTemplateEditor( {
				postId: productCatalogTemplateId,
			} );
			await addProductQueryBlock();
			await configurateProductQueryBlock();
			await page.waitForNetworkIdle();
			await saveTemplate();
			await page.goto( BASE_URL + '/shop', {
				waitUntil: 'networkidle0',
			} );
		} );

		afterAll( async () => {
			await deleteAllTemplates( 'wp_template' );
			await deleteAllTemplates( 'wp_template_part' );
		} );

		it( 'should render the same products', async () => {
			const classicProducts = await getClassicProductsListName();
			const products = await getProductQueryProductsListName();

			expect(
				classicProducts.every( ( val, idx ) => val === products[ idx ] )
			).toBe( true );
		} );
	} );

	describe( 'with Products By Category Template', () => {
		beforeAll( async () => {
			const taxonomyProductCategory =
				'woocommerce/woocommerce//taxonomy-product_cat';

			await goToTemplateEditor( {
				postId: taxonomyProductCategory,
			} );
			await addProductQueryBlock();
			await configurateProductQueryBlock();
			await page.waitForNetworkIdle();
			await saveTemplate();
			await page.goto( BASE_URL + '/product-category/uncategorized/', {
				waitUntil: 'networkidle0',
			} );
		} );

		afterAll( async () => {
			await deleteAllTemplates( 'wp_template' );
			await deleteAllTemplates( 'wp_template_part' );
		} );

		it( 'should render the same products', async () => {
			const classicProducts = await getClassicProductsListName();
			const products = await getProductQueryProductsListName();

			expect(
				classicProducts.every( ( val, idx ) => val === products[ idx ] )
			).toBe( true );
		} );
	} );

	describe( 'with Products By Tag Template', () => {
		beforeAll( async () => {
			const tagProductCategory =
				'woocommerce/woocommerce//taxonomy-product_tag';
			await goToTemplateEditor( {
				postId: tagProductCategory,
			} );
			await addProductQueryBlock();
			await configurateProductQueryBlock();
			await page.waitForNetworkIdle();
			await saveTemplate();
			await page.goto( BASE_URL + '/product-tag/newest/', {
				waitUntil: 'networkidle0',
			} );
		} );

		afterAll( async () => {
			await deleteAllTemplates( 'wp_template' );
			await deleteAllTemplates( 'wp_template_part' );
		} );

		it( 'should render the same products', async () => {
			const classicProducts = await getClassicProductsListName();
			const products = await getProductQueryProductsListName();

			expect(
				classicProducts.every( ( val, idx ) => val === products[ idx ] )
			).toBe( true );
		} );
	} );

	describe( 'with Products Search Results Template', () => {
		beforeAll( async () => {
			const productSearchResults =
				'woocommerce/woocommerce//product-search-results';
			await goToTemplateEditor( {
				postId: productSearchResults,
			} );
			await addProductQueryBlock();
			await configurateProductQueryBlock();
			await page.waitForNetworkIdle();
			await saveTemplate();
			await page.goto( BASE_URL + '/?s=usb&post_type=product', {
				waitUntil: 'networkidle0',
			} );
		} );

		it( 'should render the same products', async () => {
			const classicProducts = await getClassicProductsListName();
			const products = await getProductQueryProductsListName();

			expect(
				classicProducts.every( ( val, idx ) => val === products[ idx ] )
			).toBe( true );
		} );
	} );
} );
