(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[78],{132:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(27),a=n(18);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(a.a)(t)?t:{}},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function a(t,e){return c(t)&&e in t}},214:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n(100);var c=n(44);const a=()=>c.m>1},273:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(18),a=n(132);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(a.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:e.fontFamily}}}},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(107),a=n(214),r=n(18),s=n(132);const o=t=>{if(!Object(a.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},306:function(t,e,n){"use strict";var c=n(11),a=n.n(c),r=n(0),s=n(20),o=n(4),l=n.n(o);n(307),e.a=t=>{let{className:e="",disabled:n=!1,name:c,permalink:o="",target:i,rel:u,style:b,onClick:d,...p}=t;const f=l()("wc-block-components-product-name",e);if(n){const t=p;return Object(r.createElement)("span",a()({className:f},t,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)}}))}return Object(r.createElement)("a",a()({className:f,href:o,target:i},p,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)},style:b}))}},307:function(t,e){},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(107),a=n(214),r=n(18),s=n(132);const o=t=>{if(!Object(a.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var c=n(0),a=n(4),r=n.n(a),s=n(47),o=n(214),l=n(131),i=n(306),u=n(66),b=n(291),d=n(323),p=n(273);n(338);const f=t=>{let{children:e,headingLevel:n,elementType:a="h"+n,...r}=t;return Object(c.createElement)(a,r,e)},m=t=>{const{className:e,headingLevel:n=2,showProductLink:a=!0,linkTarget:l,align:m}=t,{parentClassName:O}=Object(s.useInnerBlockLayoutContext)(),{product:j}=Object(s.useProductDataContext)(),{dispatchStoreEvent:y}=Object(u.a)(),g=Object(b.a)(t),h=Object(d.a)(t),k=Object(p.a)(t);return j.id?Object(c.createElement)(f,{headingLevel:n,className:r()(e,g.className,"wc-block-components-product-title",{[O+"__product-title"]:O,["wc-block-components-product-title--align-"+m]:m&&Object(o.a)()}),style:Object(o.a)()?{...h.style,...k.style,...g.style}:{}},Object(c.createElement)(i.a,{disabled:!a,name:j.name,permalink:j.permalink,target:l,onClick:()=>{y("product-view-link",{product:j})}})):Object(c.createElement)(f,{headingLevel:n,className:r()(e,g.className,"wc-block-components-product-title",{[O+"__product-title"]:O,["wc-block-components-product-title--align-"+m]:m&&Object(o.a)()}),style:Object(o.a)()?{...h.style,...k.style,...g.style}:{}})};e.b=Object(l.withProductDataContext)(m)},338:function(t,e){},500:function(t,e,n){"use strict";n.r(e);var c=n(131),a=n(337),r=n(214);let s={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};Object(r.a)()&&(s={...s,align:{type:"string"}});var o=s;e.default=Object(c.withFilteredAttributes)(o)(a.b)}}]);