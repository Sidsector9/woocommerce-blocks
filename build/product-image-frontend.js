(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[61,64],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(45),a=n(18);const r=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(a.a)(e)?e:{}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function a(e,t){return c(e)&&t in e}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n(103);var c=n(48);const a=()=>c.m>1},22:function(e,t,n){"use strict";var c=n(0),a=n(4),r=n.n(a);t.a=e=>{let t,{label:n,screenReaderLabel:a,wrapperElement:s,wrapperProps:l={}}=e;const o=null!=n,i=null!=a;return!o&&i?(t=s||"span",l={...l,className:r()(l.className,"screen-reader-text")},Object(c.createElement)(t,l,a)):(t=s||c.Fragment,o&&i&&n!==a?Object(c.createElement)(t,l,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},a)):Object(c.createElement)(t,l,n))}},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(18),a=n(121);const r=e=>{const t=Object(c.a)(e)?e:{},n=Object(a.a)(t.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:t.fontFamily}}}},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(114),a=n(200),r=n(18),s=n(121);const l=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(114),a=n(200),r=n(18),s=n(121);const l=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(114),a=n(200),r=n(18),s=n(121);const l=e=>{if(!Object(a.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})}},305:function(e,t){},323:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(4),s=n.n(r),l=n(22),o=n(47),i=n(254),u=n(272),b=n(252),d=n(301),m=n(119);n(305),t.default=Object(m.withProductDataContext)(e=>{const{className:t,align:n}=e,{parentClassName:r}=Object(o.useInnerBlockLayoutContext)(),{product:m}=Object(o.useProductDataContext)(),p=Object(i.a)(e),O=Object(u.a)(e),j=Object(b.a)(e),f=Object(d.a)(e);if(!m.id||!m.on_sale)return null;const g="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,g,{[r+"__product-onsale"]:r},O.className,p.className),style:{...O.style,...p.style,...j.style,...f.style}},Object(c.createElement)(l.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))})},351:function(e,t){},446:function(e,t,n){"use strict";n.r(t);var c=n(119),a=n(12),r=n.n(a),s=n(0),l=n(1),o=n(4),i=n.n(o),u=n(2),b=n(47),d=n(252),m=n(254),p=n(301),O=n(59),j=n(323);n(351);const f=()=>Object(s.createElement)("img",{src:u.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500}),g=e=>{let{image:t,onLoad:n,loaded:c,showFullSize:a,fallbackAlt:l}=e;const{thumbnail:o,src:i,srcset:u,sizes:b,alt:d}=t||{},m={alt:d||l,onLoad:n,hidden:!c,src:o,...a&&{src:i,srcSet:u,sizes:b}};return Object(s.createElement)(s.Fragment,null,m.src&&Object(s.createElement)("img",r()({"data-testid":"product-image"},m)),!c&&Object(s.createElement)(f,null))};var y=Object(c.withProductDataContext)(e=>{const{className:t,imageSizing:n="full-size",showProductLink:c=!0,showSaleBadge:a,saleBadgeAlign:r="right"}=e,{parentClassName:o}=Object(b.useInnerBlockLayoutContext)(),{product:u}=Object(b.useProductDataContext)(),[y,h]=Object(s.useState)(!1),{dispatchStoreEvent:w}=Object(O.a)(),_=Object(d.a)(e),k=Object(m.a)(e),E=Object(p.a)(e);if(!u.id)return Object(s.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[o+"__product-image"]:o},k.className),style:{..._.style,...k.style,...E.style}},Object(s.createElement)(f,null));const S=!!u.images.length,N=S?u.images[0]:null,v=c?"a":s.Fragment,x=Object(l.sprintf)(
/* translators: %s is referring to the product name */
Object(l.__)("Link to %s","woo-gutenberg-products-block"),u.name),C={href:u.permalink,...!S&&{"aria-label":x},onClick:()=>{w("product-view-link",{product:u})}};return Object(s.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[o+"__product-image"]:o},k.className),style:{..._.style,...k.style,...E.style}},Object(s.createElement)(v,c&&C,!!a&&Object(s.createElement)(j.default,{align:r,product:u}),Object(s.createElement)(g,{fallbackAlt:u.name,image:N,onLoad:()=>h(!0),loaded:y,showFullSize:"cropped"!==n})))});t.default=Object(c.withFilteredAttributes)({showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}})(y)}}]);