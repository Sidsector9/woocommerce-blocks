(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[20],{225:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var o=c(5),n=c(95),r=c(37),s=c(176);const a=t=>{if(!Object(n.b)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},c=Object(s.a)(e.style);return Object(o.__experimentalUseBorderProps)({...e,style:c})}},308:function(t,e,c){"use strict";c.r(e);var o=c(6),n=c.n(o),r=c(0),s=c(4),a=c.n(s),l=c(1),d=c(78),i=c(346),u=c(140),b=c(225),p=c(131),y=c(221),m=c(14),O=c(23),j=c(2),_=c(29),w=c(58);c(339);const g=t=>{let{product:e,colorStyles:c,borderStyles:o,typographyStyles:s,spacingStyles:u}=t;const{id:b,permalink:p,add_to_cart:y,has_options:_,is_purchasable:w,is_in_stock:g}=e,{dispatchStoreEvent:k}=Object(d.a)(),{cartQuantity:S,addingToCart:f,addToCart:h}=Object(i.a)(b,"woocommerce/single-product/"+(b||0)),N=Number.isFinite(S)&&S>0,E=!_&&w&&g,C=Object(m.decodeEntities)((null==y?void 0:y.description)||""),v=N?Object(l.sprintf)(
/* translators: %s number of products in cart. */
Object(l._n)("%d in cart","%d in cart",S,"woo-gutenberg-products-block"),S):Object(m.decodeEntities)((null==y?void 0:y.text)||Object(l.__)("Add to cart","woo-gutenberg-products-block")),T=E?"button":"a",x={};return E?x.onClick=async()=>{await h(),k("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(j.getSetting)("productsSettings");t&&(window.location.href=O.d)}:(x.href=p,x.rel="nofollow",x.onClick=()=>{k("product-view-link",{product:e})}),Object(r.createElement)(T,n()({"aria-label":C,className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",c.className,o.className,{loading:f,added:N}),style:{...c.style,...o.style,...s.style,...u.style},disabled:f},x),v)},k=t=>{let{colorStyles:e,borderStyles:c,typographyStyles:o,spacingStyles:n}=t;return Object(r.createElement)("button",{className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,c.className),style:{...e.style,...c.style,...o.style,...n.style},disabled:!0})};e.default=Object(w.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:c}=Object(_.useInnerBlockLayoutContext)(),{product:o}=Object(_.useProductDataContext)(),n=Object(u.a)(t),s=Object(b.a)(t),l=Object(p.a)(t),d=Object(y.a)(t);return Object(r.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[c+"__product-add-to-cart"]:c})},o.id?Object(r.createElement)(g,{product:o,colorStyles:n,borderStyles:s,typographyStyles:l,spacingStyles:d}):Object(r.createElement)(k,{colorStyles:n,borderStyles:s,typographyStyles:l,spacingStyles:d}))})},339:function(t,e){},346:function(t,e,c){"use strict";c.d(e,"a",(function(){return d}));var o=c(0),n=c(9),r=c(17),s=c(14),a=c(41);const l=(t,e)=>{const c=t.find(t=>{let{id:c}=t;return c===e});return c?c.quantity:0},d=t=>{const{addItemToCart:e}=Object(n.useDispatch)(r.CART_STORE_KEY),{cartItems:c,cartIsLoading:d}=Object(a.a)(),{createErrorNotice:i,removeNotice:u}=Object(n.useDispatch)("core/notices"),[b,p]=Object(o.useState)(!1),y=Object(o.useRef)(l(c,t));return Object(o.useEffect)(()=>{const e=l(c,t);e!==y.current&&(y.current=e)},[c,t]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:b,cartIsLoading:d,addToCart:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,c).then(()=>{u("add-to-cart")}).catch(t=>{i(Object(s.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}}}]);