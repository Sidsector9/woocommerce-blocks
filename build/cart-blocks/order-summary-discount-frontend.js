(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[21],{108:function(e,t,o){"use strict";var c=o(0);t.a=function(e){let{icon:t,size:o=24,...n}=e;return Object(c.cloneElement)(t,{width:o,height:o,...n})}},205:function(e,t){},258:function(e,t,o){"use strict";var c=o(0),n=o(13);const s=Object(c.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(n.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));t.a=s},259:function(e,t,o){"use strict";var c=o(12),n=o.n(c),s=o(0),a=o(4),r=o.n(a),l=o(1),i=o(108),p=o(258);o(205);var u=e=>{let{text:t,screenReaderText:o="",element:c="li",className:a="",radius:l="small",children:i=null,...p}=e;const u=c,b=r()(a,"wc-block-components-chip","wc-block-components-chip--radius-"+l),m=Boolean(o&&o!==t);return Object(s.createElement)(u,n()({className:b},p),Object(s.createElement)("span",{"aria-hidden":m,className:"wc-block-components-chip__text"},t),m&&Object(s.createElement)("span",{className:"screen-reader-text"},o),i)};t.a=e=>{let{ariaLabel:t="",className:o="",disabled:c=!1,onRemove:a=(()=>{}),removeOnAnyClick:b=!1,text:m,screenReaderText:d="",...g}=e;const O=b?"span":"button";if(!t){const e=d&&"string"==typeof d?d:m;t="string"!=typeof e?
/* translators: Remove chip. */
Object(l.__)("Remove","woo-gutenberg-products-block"):Object(l.sprintf)(
/* translators: %s text of the chip to remove. */
Object(l.__)('Remove "%s"',"woo-gutenberg-products-block"),e)}const j={"aria-label":t,disabled:c,onClick:a,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||a()}},v=b?j:{},C=b?{"aria-hidden":!0}:j;return Object(s.createElement)(u,n()({},g,v,{className:r()(o,"is-removable"),element:b?"button":g.element,screenReaderText:d,text:m}),Object(s.createElement)(O,n()({className:"wc-block-components-chip__remove"},C),Object(s.createElement)(i.a,{className:"wc-block-components-chip__remove-icon",icon:p.a,size:16})))}},278:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var c=o(1),n=o(7),s=o(6),a=o(17),r=o(32),l=o(202);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:o}=Object(r.a)(),{createErrorNotice:i}=Object(n.useDispatch)("core/notices"),{createNotice:p}=Object(n.useDispatch)("core/notices"),{setValidationErrors:u}=Object(l.b)(),{applyCoupon:b,removeCoupon:m,isApplyingCoupon:d,isRemovingCoupon:g}=Object(n.useSelect)((e,t)=>{let{dispatch:o}=t;const c=e(s.CART_STORE_KEY),n=o(s.CART_STORE_KEY);return{applyCoupon:n.applyCoupon,removeCoupon:n.removeCoupon,isApplyingCoupon:c.isApplyingCoupon(),isRemovingCoupon:c.isRemovingCoupon(),receiveApplyingCoupon:n.receiveApplyingCoupon}},[i,p]),O=t=>{b(t).then(o=>{!0===o&&p("info",Object(c.sprintf)(
/* translators: %s coupon code. */
Object(c.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(e=>{u({coupon:{message:Object(a.decodeEntities)(e.message),hidden:!1}}),receiveApplyingCoupon("")})},j=t=>{m(t).then(o=>{!0===o&&p("info",Object(c.sprintf)(
/* translators: %s coupon code. */
Object(c.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(t=>{i(t.message,{id:"coupon-form",context:e}),receiveApplyingCoupon("")})};return{appliedCoupons:t,isLoading:o,applyCoupon:O,removeCoupon:j,isApplyingCoupon:d,isRemovingCoupon:g}}},320:function(e,t){},384:function(e,t,o){"use strict";var c=o(0),n=o(1),s=o(139),a=o(259),r=o(9),l=o(2);o(320);const i={context:"summary"};t.a=e=>{let{cartCoupons:t=[],currency:o,isRemovingCoupon:p,removeCoupon:u,values:b}=e;const{total_discount:m,total_discount_tax:d}=b,g=parseInt(m,10);if(!g&&0===t.length)return null;const O=parseInt(d,10),j=Object(l.getSetting)("displayCartPricesIncludingTax",!1)?g+O:g,v=Object(r.__experimentalApplyCheckoutFilter)({arg:i,filterName:"coupons",defaultValue:t});return Object(c.createElement)(r.TotalsItem,{className:"wc-block-components-totals-discount",currency:o,description:0!==v.length&&Object(c.createElement)(s.a,{screenReaderLabel:Object(n.__)("Removing coupon…","woo-gutenberg-products-block"),isLoading:p,showSpinner:!1},Object(c.createElement)("ul",{className:"wc-block-components-totals-discount__coupon-list"},v.map(e=>Object(c.createElement)(a.a,{key:"coupon-"+e.code,className:"wc-block-components-totals-discount__coupon-list-item",text:e.label,screenReaderText:Object(n.sprintf)(
/* translators: %s Coupon code. */
Object(n.__)("Coupon: %s","woo-gutenberg-products-block"),e.label),disabled:p,onRemove:()=>{u(e.code)},radius:"large",ariaLabel:Object(n.sprintf)(
/* translators: %s is a coupon code. */
Object(n.__)('Remove coupon "%s"',"woo-gutenberg-products-block"),e.label)})))),label:j?Object(n.__)("Discount","woo-gutenberg-products-block"):Object(n.__)("Coupons","woo-gutenberg-products-block"),value:j?-1*j:"-"})}},459:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o(384),s=o(41),a=o(32),r=o(278),l=o(9);const i=()=>{const{extensions:e,receiveCart:t,...o}=Object(a.a)(),n={extensions:e,cart:o,context:"woocommerce/cart"};return Object(c.createElement)(l.ExperimentalDiscountsMeta.Slot,n)};t.default=e=>{let{className:t}=e;const{cartTotals:o,cartCoupons:p}=Object(a.a)(),{removeCoupon:u,isRemovingCoupon:b}=Object(r.a)("wc/cart"),m=Object(s.getCurrencyFromPriceResponse)(o);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(l.TotalsWrapper,{className:t},Object(c.createElement)(n.a,{cartCoupons:p,currency:m,isRemovingCoupon:b,removeCoupon:u,values:o})),Object(c.createElement)(i,null))}}}]);