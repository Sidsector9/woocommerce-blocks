(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[64],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}},20:function(e,t,n){"use strict";var c=n(0),r=n(4),a=n.n(r);t.a=e=>{let t,{label:n,screenReaderLabel:r,wrapperElement:s,wrapperProps:o={}}=e;const l=null!=n,u=null!=r;return!l&&u?(t=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(c.createElement)(t,o,r)):(t=s||c.Fragment,l&&u&&n!==r?Object(c.createElement)(t,o,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},r)):Object(c.createElement)(t,o,n))}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n(106);var c=n(47);const r=()=>c.m>1},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(49),r=n(19);const a=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(r.a)(e)?e:{}},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(119),r=n(203),a=n(19),s=n(204);const o=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(119),r=n(203),a=n(19),s=n(204);const o=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})}},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(19),r=n(204);const a=e=>{const t=Object(c.a)(e)?e:{},n=Object(r.a)(t.style),a=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:a.fontSize,lineHeight:a.lineHeight,fontWeight:a.fontWeight,textTransform:a.textTransform,fontFamily:t.fontFamily}}}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(119),r=n(203),a=n(19),s=n(204);const o=e=>{if(!Object(r.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(a.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})}},309:function(e,t){},327:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(4),s=n.n(a),o=n(20),l=n(46),u=n(256),i=n(275),b=n(276),f=n(305),p=n(123);n(309),t.default=Object(p.withProductDataContext)(e=>{const{className:t,align:n}=e,{parentClassName:a}=Object(l.useInnerBlockLayoutContext)(),{product:p}=Object(l.useProductDataContext)(),O=Object(u.a)(e),j=Object(i.a)(e),d=Object(b.a)(e),m=Object(f.a)(e);if(!p.id||!p.on_sale)return null;const y="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,y,{[a+"__product-onsale"]:a},j.className,O.className),style:{...j.style,...O.style,...d.style,...m.style}},Object(c.createElement)(o.a,{label:Object(r.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(r.__)("Product on sale","woo-gutenberg-products-block")}))})}}]);