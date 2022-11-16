<?php
/**
 * Title: WooCommerce Product Filters - horizontal
 * Slug: woocommerce-blocks/product-filters-horizontal
 * Categories: WooCommerce
 * Block Types: woocommerce/active-filters, woocommerce/price-filter, woocommerce/attribute-filter, woocommerce/stock-filter
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"32px","right":"48px","bottom":"32px","left":"48px"},"blockGap":"40px"}}} -->
<div class="wp-block-group alignfull" style="padding-top:32px;padding-right:48px;padding-bottom:32px;padding-left:48px">
<!-- wp:columns --><div class="wp-block-columns">
	<!-- wp:column {"width":"20%"} --><div class="wp-block-column" style="flex-basis:20%">
		<!-- wp:woocommerce/filter-wrapper {"filterType":"price-filter"} -->
		<div class="wp-block-woocommerce-filter-wrapper"><!-- wp:heading {"level":3} -->
		<h3><?php esc_html_e( 'Filter by price', 'woo-gutenberg-products-block' ); ?></h3>
		<!-- /wp:heading -->

		<!-- wp:woocommerce/price-filter {"heading":"","lock":{"remove":true}} -->
		<div class="wp-block-woocommerce-price-filter is-loading" data-showinputfields="true" data-showfilterbutton="false" data-heading="" data-heading-level="3"><span aria-hidden="true" class="wc-block-product-categories__placeholder"></span></div>
		<!-- /wp:woocommerce/price-filter --></div>
		<!-- /wp:woocommerce/filter-wrapper --></div>
	<!-- /wp:column -->

	<!-- wp:column {"width":"20%"} --><div class="wp-block-column" style="flex-basis:20%">
		<!-- wp:woocommerce/filter-wrapper {"filterType":"attribute-filter"} -->
		<div class="wp-block-woocommerce-filter-wrapper"><!-- wp:heading {"level":3} -->
		<h3><?php esc_html_e( 'Filter by attribute', 'woo-gutenberg-products-block' ); ?></h3>
		<!-- /wp:heading -->

		<!-- wp:woocommerce/attribute-filter {"heading":"","lock":{"remove":true},"displayStyle":"dropdown"} -->
		<div class="wp-block-woocommerce-attribute-filter is-loading" data-attribute-id="0" data-show-counts="true" data-query-type="or" data-heading="" data-heading-level="3" data-display-style="dropdown"><span aria-hidden="true" class="wc-block-product-attribute-filter__placeholder"></span></div>
		<!-- /wp:woocommerce/attribute-filter --></div>
		<!-- /wp:woocommerce/filter-wrapper --></div>
	<!-- /wp:column -->



	<!-- wp:column {"width":"20%"} --><div class="wp-block-column" style="flex-basis:20%">
		</div>
	<!-- /wp:column -->



	<!-- wp:column {"width":"20%"} --><div class="wp-block-column" style="flex-basis:20%">
		<!-- wp:woocommerce/filter-wrapper {"filterType":"rating-filter"} -->
		<div class="wp-block-woocommerce-filter-wrapper"><!-- wp:heading {"level":3} -->
		<h3><?php esc_html_e( 'Filter by rating', 'woo-gutenberg-products-block' ); ?></h3>
		<!-- /wp:heading -->

		<!-- wp:woocommerce/rating-filter {"lock":{"remove":true}} -->
		<div class="wp-block-woocommerce-rating-filter is-loading" data-show-counts="true"><span aria-hidden="true" class="wc-block-product-rating-filter__placeholder"></span></div>
		<!-- /wp:woocommerce/rating-filter --></div>
		<!-- /wp:woocommerce/filter-wrapper --></div>
	<!-- /wp:column -->



	<!-- wp:column {"width":"20%"} --><div class="wp-block-column" style="flex-basis:20%">
		<!-- wp:woocommerce/filter-wrapper {"filterType":"stock-filter"} -->
		<div class="wp-block-woocommerce-filter-wrapper"><!-- wp:heading {"level":3} -->
		<h3><?php esc_html_e( 'Filter by stock status', 'woo-gutenberg-products-block' ); ?></h3>
		<!-- /wp:heading -->

		<!-- wp:woocommerce/stock-filter {"heading":"","lock":{"remove":true}} -->
		<div class="wp-block-woocommerce-stock-filter is-loading" data-show-counts="true" data-heading="" data-heading-level="3"><span aria-hidden="true" class="wc-block-product-stock-filter__placeholder"></span></div>
		<!-- /wp:woocommerce/stock-filter --></div>
		<!-- /wp:woocommerce/filter-wrapper --></div>
	<!-- /wp:column --></div>

<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"32px","right":"48px","bottom":"32px","left":"48px"},"blockGap":"40px"}}} -->
<div class="wp-block-group alignfull" style="padding-top:32px;padding-right:48px;padding-bottom:32px;padding-left:48px">
	<!-- wp:woocommerce/filter-wrapper {"filterType":"active-filters"} -->
	<div class="wp-block-woocommerce-filter-wrapper"><!-- wp:heading {"level":3} -->
	<h3><?php esc_html_e( 'Active filters', 'woo-gutenberg-products-block' ); ?></h3>
	<!-- /wp:heading -->

	<!-- wp:woocommerce/active-filters {"heading":"","lock":{"remove":true}} -->
	<div class="wp-block-woocommerce-active-filters is-loading" data-display-style="list" data-heading="" data-heading-level="3"><span aria-hidden="true" class="wc-block-active-product-filters__placeholder"></span></div>
	<!-- /wp:woocommerce/active-filters --></div>
	<!-- /wp:woocommerce/filter-wrapper -->
</div>
<!-- /wp:group -->
