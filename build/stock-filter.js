this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["stock-filter"]=function(e){function t(t){for(var n,s,l=t[0],a=t[1],u=t[2],b=0,d=[];b<l.length;b++)s=l[b],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(t);d.length;)d.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,l=1;l<c.length;l++){var a=c[l];0!==o[a]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},o={43:0,1:0},r=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=a;return r.push([402,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},105:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(28);c(252),t.a=e=>{let{name:t,count:c}=e;return Object(n.createElement)(n.Fragment,null,t,null!==c&&Number.isFinite(c)&&Object(n.createElement)(r.a,{label:c.toString(),screenReaderLabel:Object(o.sprintf)(
/* translators: %s number of products. */
Object(o._n)("%s product","%s products",c,"woo-gutenberg-products-block"),c),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},108:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},109:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(12);function o(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},11:function(e,t){e.exports=window.wp.primitives},12:function(e,t){e.exports=window.React},120:function(e,t,c){"use strict";var n=c(0),o=c(5),r=c(10),s=c(1);c(160),t.a=Object(r.withInstanceId)(e=>{let{className:t,headingLevel:c,onChange:r,heading:l,instanceId:a}=e;const u="h"+c;return Object(n.createElement)(u,{className:t},Object(n.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(s.__)("Block title","woo-gutenberg-products-block")),Object(n.createElement)(o.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:l,onChange:r}))})},121:function(e,t,c){"use strict";var n=c(0);c(161),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},124:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const o=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},125:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(17),o=c(9),r=c(0),s=c(49),l=c(124);const a=e=>{const{namespace:t,resourceName:c,resourceValues:a=[],query:u={},shouldSelect:i=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(r.useRef)({results:[],isLoading:!0}),d=Object(s.a)(u),p=Object(s.a)(a),f=Object(l.a)(),O=Object(o.useSelect)(e=>{if(!i)return null;const o=e(n.COLLECTIONS_STORE_KEY),r=[t,c,d,p],s=o.getCollectionError(...r);if(s){if(!(s instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(s)}return{results:o.getCollection(...r),isLoading:!o.hasFinishedResolution("getCollection",r)}},[t,c,p,d,i]);return null!==O&&(b.current=O),b.current}},136:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},14:function(e,t){e.exports=window.wp.htmlEntities},148:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),s=c.n(r),l=c(28);c(188),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
c=Object(o.__)("Reset","woo-gutenberg-products-block"),onClick:r,screenReaderLabel:a=Object(o.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:s()("wc-block-components-filter-reset-button",t),onClick:r},Object(n.createElement)(l.a,{label:c,screenReaderLabel:a}))}},149:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),s=c.n(r),l=c(28);c(189),t.a=e=>{let{className:t,isLoading:c,disabled:r,label:
/* translators: Submit button text for filters. */
a=Object(o.__)("Apply","woo-gutenberg-products-block"),onClick:u,screenReaderLabel:i=Object(o.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:s()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":c},t),disabled:r,onClick:u},Object(n.createElement)(l.a,{label:a,screenReaderLabel:i}))}},15:function(e,t){e.exports=window.wp.url},160:function(e,t){},161:function(e,t){},17:function(e,t){e.exports=window.wc.wcBlocksData},18:function(e,t){e.exports=window.wc.blocksCheckout},188:function(e,t){},189:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},210:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),s=c.n(r),l=c(18);c(253),t.a=e=>{let{className:t,onChange:c,options:r=[],checked:a=[],isLoading:u=!1,isDisabled:i=!1,limit:b=10}=e;const[d,p]=Object(n.useState)(!1),f=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),O=Object(n.useMemo)(()=>{const e=r.length-b;return!d&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{p(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(o.sprintf)(
/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[r,b,d]),m=Object(n.useMemo)(()=>d&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{p(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options","woo-gutenberg-products-block")},Object(o.__)("Show less","woo-gutenberg-products-block"))),[d]),j=Object(n.useMemo)(()=>{const e=r.length>b+5;return Object(n.createElement)(n.Fragment,null,r.map((t,o)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!d&&o>=b&&{hidden:!0},Object(n.createElement)(l.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:a.includes(t.value),onChange:()=>{c(t.value)}})),e&&o===b-1&&O)),e&&m)},[r,c,a,d,b,m,O,i]),w=s()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":u},t);return Object(n.createElement)("ul",{className:w},u?f:j)}},22:function(e,t){e.exports=window.wp.isShallowEqual},251:function(e,t,c){"use strict";c.d(t,"b",(function(){return l})),c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return u})),c.d(t,"c",(function(){return i}));var n=c(15),o=c(2),r=c(136);const s=Object(o.getSettingWithCoercion)("is_rendering_php_template",!1,r.a),l="query_type_",a="filter_";function u(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function i(e){s?window.location.href=e:window.history.replaceState({},"",e)}},252:function(e,t){},253:function(e,t){},28:function(e,t,c){"use strict";var n=c(0),o=c(4),r=c.n(o);t.a=e=>{let t,{label:c,screenReaderLabel:o,wrapperElement:s,wrapperProps:l={}}=e;const a=null!=c,u=null!=o;return!a&&u?(t=s||"span",l={...l,className:r()(l.className,"screen-reader-text")},Object(n.createElement)(t,l,o)):(t=s||n.Fragment,a&&u&&c!==o?Object(n.createElement)(t,l,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,l,c))}},283:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock","description":"Allow customers to filter the grid by products stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"link":true,"__experimentalDefaultControls":{"text":true}}},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},3:function(e,t){e.exports=window.wp.components},314:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(0),o=c(289),r=c(7),s=c(49),l=c(37),a=c(75),u=c(125),i=c(52);const b=e=>{let{queryAttribute:t,queryPrices:c,queryStock:b,queryState:d}=e,p=Object(i.a)();p+="-collection-data";const[f]=Object(a.a)(p),[O,m]=Object(a.b)("calculate_attribute_counts",[],p),[j,w]=Object(a.b)("calculate_price_range",null,p),[h,g]=Object(a.b)("calculate_stock_status_counts",null,p),k=Object(s.a)(t||{}),v=Object(s.a)(c),_=Object(s.a)(b);Object(n.useEffect)(()=>{"object"==typeof k&&Object.keys(k).length&&(O.find(e=>Object(l.b)(k,"taxonomy")&&e.taxonomy===k.taxonomy)||m([...O,k]))},[k,O,m]),Object(n.useEffect)(()=>{j!==v&&void 0!==v&&w(v)},[v,w,j]),Object(n.useEffect)(()=>{h!==_&&void 0!==_&&g(_)},[_,g,h]);const[E,y]=Object(n.useState)(!1),[C]=Object(o.a)(E,200);E||y(!0);const S=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(r.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(f),[f]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...S},shouldSelect:C})}},37:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return o}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return n(e)&&t in e}},402:function(e,t,c){e.exports=c(473)},403:function(e,t){},404:function(e,t){},46:function(e,t){e.exports=window.wp.a11y},473:function(e,t,c){"use strict";c.r(t);var n=c(6),o=c.n(n),r=c(0),s=c(1),l=c(8),a=c(113),u=c(526),i=c(4),b=c.n(i),d=c(5),p=c(3),f=c(99),O=c(120),m=c(46),j=c(49),w=c(109),h=c(75),g=c(314),k=c(2),v=c(210),_=c(149),E=c(148),y=c(121),C=c(105),S=c(22),x=c.n(S),N=c(14),L=c(136),P=c(37),R=c(15),T=c(251);const V=[{value:"preview-1",name:"In Stock",label:Object(r.createElement)(C.a,{name:"In Stock",count:3})},{value:"preview-2",name:"Out of sotck",label:Object(r.createElement)(C.a,{name:"Out of stock",count:3})},{value:"preview-3",name:"On backorder",label:Object(r.createElement)(C.a,{name:"On backorder",count:2})}];c(404);var F=c(108);const H=T.a+"stock_status";var M=e=>{let{attributes:t,isEditor:c=!1}=e;const n=Object(k.getSettingWithCoercion)("is_rendering_php_template",!1,L.a),[o,l]=Object(r.useState)(!1),{outofstock:a,...u}=Object(k.getSetting)("stockStatusOptions",{}),i=Object(r.useRef)(Object(k.getSetting)("hideOutOfStockItems",!1)?u:{outofstock:a,...u}),d=Object(r.useMemo)(()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const c=Object(T.d)(t);if(!c)return[];const n=Object(F.a)(c)?c.split(","):c;return Object.keys(e).filter(e=>n.includes(e))}(i.current,H),[]),[p,f]=Object(r.useState)(d),[O,S]=Object(r.useState)(t.isPreview?V:[]),[M]=Object(r.useState)(Object.entries(i.current).map(e=>{let[t,c]=e;return{slug:t,name:c}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[A]=Object(h.a)(),[B,z]=Object(h.b)("stock_status",d),{results:q,isLoading:Q}=Object(g.a)({queryStock:!0,queryState:A}),Y=Object(r.useCallback)(e=>Object(P.b)(q,"stock_status_counts")&&Array.isArray(q.stock_status_counts)?q.stock_status_counts.find(t=>{let{status:c,count:n}=t;return c===e&&0!==Number(n)}):null,[q]);Object(r.useEffect)(()=>{if(Q||t.isPreview)return;const e=M.map(e=>{const c=Y(e.slug);if(!(c||p.includes(e.slug)||(n=e.slug,null!=A&&A.stock_status&&A.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(n)}))))return null;var n;const o=c?Number(c.count):0;return{value:e.slug,name:Object(N.decodeEntities)(e.name),label:Object(r.createElement)(C.a,{name:Object(N.decodeEntities)(e.name),count:t.showCounts?o:null})}}).filter(e=>!!e);S(e)},[t.showCounts,t.isPreview,Q,Y,p,A.stock_status,M]);const D=Object(r.useCallback)(e=>{c||(e&&!n&&z(e),(e=>{if(!window)return;if(0===e.length){const e=Object(R.removeQueryArgs)(window.location.href,H);return void(e!==window.location.href&&Object(T.c)(e))}const t=Object(R.addQueryArgs)(window.location.href,{[H]:e.join(",")});t!==window.location.href&&Object(T.c)(t)})(e))},[c,z,p,n]);Object(r.useEffect)(()=>{t.showFilterButton||D(p)},[t.showFilterButton,p,D]);const I=Object(r.useMemo)(()=>B,[B]),K=Object(j.a)(I),W=Object(w.a)(K);Object(r.useEffect)(()=>{x()(W,K)||x()(p,K)||f(K)},[p,K,W]),Object(r.useEffect)(()=>{o||(z(d),l(!0))},[z,o,l,d]);const U=Object(r.useCallback)(e=>{const t=e=>{const t=O.find(t=>t.value===e);return t?t.name:null},c=e=>{let{filterAdded:c,filterRemoved:n}=e;const o=c?t(c):null,r=n?t(n):null;o?Object(m.speak)(Object(s.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(s.__)("%s filter added.","woo-gutenberg-products-block"),o)):r&&Object(m.speak)(Object(s.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(s.__)("%s filter removed.","woo-gutenberg-products-block"),r))},n=p.includes(e),o=p.filter(t=>t!==e);n?c({filterRemoved:e}):(o.push(e),o.sort(),c({filterAdded:e})),f(o)},[p,O]);if(!Q&&0===O.length)return null;const J="h"+t.headingLevel,G=!t.isPreview&&!i.current||0===O.length,$=!t.isPreview&&Q;if(!Object(k.getSettingWithCoercion)("has_filterable_products",!1,L.a))return null;const X=Object(r.createElement)(J,{className:"wc-block-stock-filter__title"},t.heading),Z=G?Object(r.createElement)(y.a,null,X):X;return Object(r.createElement)(r.Fragment,null,!c&&t.heading&&Z,Object(r.createElement)("div",{className:b()("wc-block-stock-filter",{"is-loading":G})},Object(r.createElement)(v.a,{className:"wc-block-stock-filter-list",options:O,checked:p,onChange:U,isLoading:G,isDisabled:$})),Object(r.createElement)("div",{className:"wc-block-stock-filter__actions"},p.length>0&&!G&&Object(r.createElement)(E.a,{onClick:()=>{f([]),D([])},screenReaderLabel:Object(s.__)("Reset stock filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(r.createElement)(_.a,{className:"wc-block-stock-filter__button",isLoading:G,disabled:G||$,onClick:()=>D(p)})))};c(403);var A=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:c}=e;const{className:n,heading:o,headingLevel:l,showCounts:a,showFilterButton:u}=t,i=Object(d.useBlockProps)({className:b()("wc-block-stock-filter",n)});return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(d.InspectorControls,{key:"inspector"},Object(r.createElement)(p.PanelBody,{title:Object(s.__)("Content","woo-gutenberg-products-block")},Object(r.createElement)(p.ToggleControl,{label:Object(s.__)("Display product count","woo-gutenberg-products-block"),checked:a,onChange:()=>c({showCounts:!a})})),Object(r.createElement)(p.PanelBody,{title:Object(s.__)("Settings","woo-gutenberg-products-block")},Object(r.createElement)(p.ToggleControl,{label:Object(s.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:u?Object(s.__)("Products will only update when the button is clicked.","woo-gutenberg-products-block"):Object(s.__)("Products will update as soon as attributes are selected.","woo-gutenberg-products-block"),checked:u,onChange:e=>c({showFilterButton:e})})),Object(r.createElement)(p.PanelBody,{title:Object(s.__)("Typography","woo-gutenberg-products-block")},Object(r.createElement)("p",null," ",Object(s.__)("Size","woo-gutenberg-products-block")," "),Object(r.createElement)(f.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:l,onChange:e=>c({headingLevel:e})}))),Object(r.createElement)("div",i,Object(r.createElement)(O.a,{className:"wc-block-stock-filter__title",headingLevel:l,heading:o,onChange:e=>c({heading:e})}),Object(r.createElement)(p.Disabled,null,Object(r.createElement)(M,{attributes:t,isEditor:!0}))))}),B=c(283);const z={heading:{type:"string",default:Object(s.__)("Filter by stock status","woo-gutenberg-products-block")}};Object(l.registerBlockType)(B,{title:Object(s.__)("Filter Products by Stock","woo-gutenberg-products-block"),description:Object(s.__)("Enable customers to filter the product grid by stock status.","woo-gutenberg-products-block"),icon:{src:Object(r.createElement)(a.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})},attributes:{...B.attributes,...z},edit:A,save(e){let{attributes:t}=e;const{className:c,showCounts:n,heading:s,headingLevel:l,showFilterButton:a}=t,u={"data-show-counts":n,"data-heading":s,"data-heading-level":l};return a&&(u["data-show-filter-button"]=a),Object(r.createElement)("div",o()({},d.useBlockProps.save({className:b()("is-loading",c)}),u),Object(r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-stock-filter__placeholder"}))}})},49:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(0),o=c(22),r=c.n(o);function s(e){const t=Object(n.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},5:function(e,t){e.exports=window.wp.blockEditor},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const o=Object(n.createContext)("page"),r=()=>Object(n.useContext)(o);o.Provider},7:function(e,t){e.exports=window.lodash},75:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return p}));var n=c(17),o=c(9),r=c(0),s=c(22),l=c.n(s),a=c(49),u=c(109),i=c(52);const b=e=>{const t=Object(i.a)();e=e||t;const c=Object(o.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:s}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(r.useCallback)(t=>{s(e,t)},[e,s])]},d=(e,t,c)=>{const s=Object(i.a)();c=c||s;const l=Object(o.useSelect)(o=>o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:a}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[l,Object(r.useCallback)(t=>{a(c,e,t)},[c,e,a])]},p=(e,t)=>{const c=Object(i.a)();t=t||c;const[n,o]=b(t),s=Object(a.a)(n),d=Object(a.a)(e),p=Object(u.a)(d),f=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{l()(p,d)||(o(Object.assign({},s,d)),f.current=!0)},[s,d,p,o]),f.current?[n,o]:[e,o]}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wp.data},99:function(e,t,c){"use strict";var n=c(0),o=c(7),r=c(1),s=c(3),l=c(11);function a(e){let{level:t}=e;const c={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return c.hasOwnProperty(t)?Object(n.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(l.Path,{d:c[t]})):null}class u extends n.Component{createLevelControl(e,t,c){const o=e===t;return{icon:Object(n.createElement)(a,{level:e}),title:Object(r.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(r.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:o,onClick:()=>c(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:c,selectedLevel:r,onChange:l}=this.props;return Object(n.createElement)(s.ToolbarGroup,{isCollapsed:e,icon:Object(n.createElement)(a,{level:r}),controls:Object(o.range)(t,c).map(e=>this.createLevelControl(e,r,l))})}}t.a=u}});