(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[24,30],{222:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),l=a(4),s=a.n(l),r=a(28),o=a(29),i=a(225),u=a(140),d=a(131),b=a(221),m=a(58);a(335),t.default=Object(m.withProductDataContext)(e=>{const{className:t,align:a}=e,{parentClassName:l}=Object(o.useInnerBlockLayoutContext)(),{product:m}=Object(o.useProductDataContext)(),p=Object(i.a)(e),g=Object(u.a)(e),O=Object(d.a)(e),j=Object(b.a)(e);if(!m.id||!m.on_sale)return null;const f="string"==typeof a?"wc-block-components-product-sale-badge--align-"+a:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,f,{[l+"__product-onsale"]:l},g.className,p.className),style:{...g.style,...p.style,...O.style,...j.style}},Object(c.createElement)(r.a,{label:Object(n.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(n.__)("Product on sale","woo-gutenberg-products-block")}))})},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(5),n=a(95),l=a(37),s=a(176);const r=e=>{if(!Object(n.b)())return{className:"",style:{}};const t=Object(l.a)(e)?e:{},a=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:a})}},28:function(e,t,a){"use strict";var c=a(0),n=a(4),l=a.n(n);t.a=e=>{let t,{label:a,screenReaderLabel:n,wrapperElement:s,wrapperProps:r={}}=e;const o=null!=a,i=null!=n;return!o&&i?(t=s||"span",r={...r,className:l()(r.className,"screen-reader-text")},Object(c.createElement)(t,r,n)):(t=s||c.Fragment,o&&i&&a!==n?Object(c.createElement)(t,r,Object(c.createElement)("span",{"aria-hidden":"true"},a),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,r,a))}},293:function(e,t,a){"use strict";var c=a(6),n=a.n(c),l=a(0),s=a(1),r=a(4),o=a.n(r),i=a(2),u=a(29),d=a(131),b=a(225),m=a(221),p=a(58),g=a(78),O=a(222);a(337);const j=()=>Object(l.createElement)("img",{src:i.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500}),f=e=>{let{image:t,loaded:a,showFullSize:c,fallbackAlt:s}=e;const{thumbnail:r,src:o,srcset:i,sizes:u,alt:d}=t||{},b={alt:d||s,hidden:!a,src:r,...c&&{src:o,srcSet:i,sizes:u}};return Object(l.createElement)(l.Fragment,null,b.src&&Object(l.createElement)("img",n()({"data-testid":"product-image"},b)),!t&&Object(l.createElement)(j,null))};t.a=Object(p.withProductDataContext)(e=>{const{className:t,imageSizing:a="full-size",showProductLink:c=!0,showSaleBadge:n,saleBadgeAlign:r="right"}=e,{parentClassName:i}=Object(u.useInnerBlockLayoutContext)(),{product:p,isLoading:w}=Object(u.useProductDataContext)(),{dispatchStoreEvent:y}=Object(g.a)(),h=Object(d.a)(e),k=Object(b.a)(e),E=Object(m.a)(e);if(!p.id)return Object(l.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},k.className),style:{...h.style,...k.style,...E.style}},Object(l.createElement)(j,null));const _=!!p.images.length,N=_?p.images[0]:null,C=c?"a":l.Fragment,L=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),p.name),v={href:p.permalink,...!_&&{"aria-label":L},onClick:()=>{y("product-view-link",{product:p})}};return Object(l.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},k.className),style:{...h.style,...k.style,...E.style}},Object(l.createElement)(C,c&&v,!!n&&Object(l.createElement)(O.default,{align:r,product:p}),Object(l.createElement)(f,{fallbackAlt:p.name,image:N,loaded:!w,showFullSize:"cropped"!==a})))})},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));const c={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}}},335:function(e,t){},337:function(e,t){},548:function(e,t,a){"use strict";a.r(t);var c=a(58),n=a(293),l=a(294);t.default=Object(c.withFilteredAttributes)(l.a)(n.a)}}]);