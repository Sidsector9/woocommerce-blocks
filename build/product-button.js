(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[21],{154:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var o=c(5),n=c(60),r=c(33),s=c(114);const a=t=>{if(!Object(n.b)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},c=Object(s.a)(e.style);return Object(o.__experimentalUseBorderProps)({...e,style:c})}},168:function(t,e,c){"use strict";c.d(e,"a",(function(){return d}));var o=c(0),n=c(7),r=c(9),s=c(15),a=c(41);const l=(t,e)=>{const c=t.find(t=>{let{id:c}=t;return c===e});return c?c.quantity:0},d=t=>{const{addItemToCart:e}=Object(n.useDispatch)(r.CART_STORE_KEY),{cartItems:c,cartIsLoading:d}=Object(a.a)(),{createErrorNotice:i,removeNotice:u}=Object(n.useDispatch)("core/notices"),[b,p]=Object(o.useState)(!1),y=Object(o.useRef)(l(c,t));return Object(o.useEffect)(()=>{const e=l(c,t);e!==y.current&&(y.current=e)},[c,t]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:b,cartIsLoading:d,addToCart:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,c).then(()=>{u("add-to-cart")}).catch(t=>{i(Object(s.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}},212:function(t,e,c){"use strict";c.r(e),c.d(e,"Block",(function(){return w}));var o=c(6),n=c.n(o),r=c(0),s=c(4),a=c.n(s),l=c(1),d=c(70),i=c(168),u=c(97),b=c(154),p=c(82),y=c(129),O=c(15),j=c(22),m=c(2),_=c(23),g=c(42);c(264);const w=t=>{const{className:e}=t,{parentClassName:c}=Object(_.useInnerBlockLayoutContext)(),{product:o}=Object(_.useProductDataContext)(),n=Object(u.a)(t),s=Object(b.a)(t),l=Object(p.a)(t),d=Object(y.a)(t);return Object(r.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[c+"__product-add-to-cart"]:c})},o.id?Object(r.createElement)(k,{product:o,colorStyles:n,borderStyles:s,typographyStyles:l,spacingStyles:d}):Object(r.createElement)(S,{colorStyles:n,borderStyles:s,typographyStyles:l,spacingStyles:d}))},k=t=>{let{product:e,colorStyles:c,borderStyles:o,typographyStyles:s,spacingStyles:u}=t;const{id:b,permalink:p,add_to_cart:y,has_options:_,is_purchasable:g,is_in_stock:w}=e,{dispatchStoreEvent:k}=Object(d.a)(),{cartQuantity:S,addingToCart:f,addToCart:h}=Object(i.a)(b,"woocommerce/single-product/"+(b||0)),N=Number.isFinite(S)&&S>0,E=!_&&g&&w,C=Object(O.decodeEntities)((null==y?void 0:y.description)||""),v=N?Object(l.sprintf)(
/* translators: %s number of products in cart. */
Object(l._n)("%d in cart","%d in cart",S,"woo-gutenberg-products-block"),S):Object(O.decodeEntities)((null==y?void 0:y.text)||Object(l.__)("Add to cart","woo-gutenberg-products-block")),T=E?"button":"a",x={};return E?x.onClick=async()=>{await h(),k("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(m.getSetting)("productsSettings");t&&(window.location.href=j.d)}:(x.href=p,x.rel="nofollow",x.onClick=()=>{k("product-view-link",{product:e})}),Object(r.createElement)(T,n()({"aria-label":C,className:a()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button",c.className,o.className,{loading:f,added:N}),style:{...c.style,...o.style,...s.style,...u.style},disabled:f},x),v)},S=t=>{let{colorStyles:e,borderStyles:c,typographyStyles:o,spacingStyles:n}=t;return Object(r.createElement)("button",{className:a()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,c.className),style:{...e.style,...c.style,...o.style,...n.style},disabled:!0})};e.default=Object(g.withProductDataContext)(w)},264:function(t,e){}}]);