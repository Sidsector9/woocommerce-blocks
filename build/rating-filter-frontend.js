!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=248)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},116:function(e,t){},12:function(e,t){e.exports=window.wp.isShallowEqual},13:function(e,t){e.exports=window.wp.url},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),c=r(97),o=r(5),u=r(26),a=r(18),s=r(30),i=r(60),l=r(22);const b=e=>{let{queryAttribute:t,queryPrices:r,queryStock:b,queryRating:f,queryState:d}=e,p=Object(l.a)();p+="-collection-data";const[g]=Object(s.a)(p),[O,m]=Object(s.b)("calculate_attribute_counts",[],p),[j,w]=Object(s.b)("calculate_price_range",null,p),[h,_]=Object(s.b)("calculate_stock_status_counts",null,p),[y,E]=Object(s.b)("calculate_rating_counts",null,p),v=Object(u.a)(t||{}),k=Object(u.a)(r),S=Object(u.a)(b),x=Object(u.a)(f);Object(n.useEffect)(()=>{"object"==typeof v&&Object.keys(v).length&&(O.find(e=>Object(a.b)(v,"taxonomy")&&e.taxonomy===v.taxonomy)||m([...O,v]))},[v,O,m]),Object(n.useEffect)(()=>{j!==k&&void 0!==k&&w(k)},[k,w,j]),Object(n.useEffect)(()=>{h!==S&&void 0!==S&&_(S)},[S,_,h]),Object(n.useEffect)(()=>{y!==x&&void 0!==x&&E(x)},[x,E,y]);const[P,R]=Object(n.useState)(!1),[A]=Object(c.a)(P,200);P||R(!0);const T=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:r}=e;return{taxonomy:t,query_type:r}}),["taxonomy","query_type"])),t})(g),[g]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...T},shouldSelect:A})}},15:function(e,t,r){"use strict";var n=r(17),c=r.n(n),o=r(0),u=r(7),a=r(1),s=r(44),i=e=>{let{imageUrl:t=s.l+"/block-error.svg",header:r=Object(a.__)("Oops!","woo-gutenberg-products-block"),text:n=Object(a.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:c,errorMessagePrefix:u=Object(a.__)("Error:","woo-gutenberg-products-block"),button:i,showErrorBlock:l=!0}=e;return l?Object(o.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(o.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(o.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(o.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),n&&Object(o.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},n),c&&Object(o.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},u?u+" ":"",c),i&&Object(o.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},i))):null};r(33);class l extends u.Component{constructor(){super(...arguments),c()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(o.createElement)(o.Fragment,null,Object(o.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:n=!0,text:c,errorMessagePrefix:u,renderError:a,button:s}=this.props,{errorMessage:l,hasError:b}=this.state;return b?"function"==typeof a?a({errorMessage:l}):Object(o.createElement)(i,{showErrorBlock:n,errorMessage:r?l:null,header:e,imageUrl:t,text:c,errorMessagePrefix:u,button:s}):this.props.children}}t.a=l},166:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},17:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},18:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return n(e)&&t in e}},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const c=Object(n.createContext)("page"),o=()=>Object(n.useContext)(c);c.Provider},248:function(e,t,r){e.exports=r(268)},249:function(e,t){},250:function(e,t){},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),c=r(12),o=r.n(c);function u(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},268:function(e,t,r){"use strict";r.r(t);var n=r(37),c=r(0),o=r(4),u=r.n(o),a=r(1);r(250);var s=e=>{let{className:t,key:r,rating:n,ratedProductsCount:o}=e;const s=u()("wc-block-components-product-rating",t),i={width:n/5*100+"%"},l=Object(a.sprintf)(
/* translators: %f is referring to the average rating value */
Object(a.__)("Rated %f out of 5","woo-gutenberg-products-block"),n),b={__html:Object(a.sprintf)(
/* translators: %f is referring to the rating value */
Object(a.__)("Rated %f out of 5","woo-gutenberg-products-block"),Object(a.sprintf)('<strong class="rating">%f</strong>',n))};return Object(c.createElement)("div",{className:s,key:r},Object(c.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":l},Object(c.createElement)("span",{style:i,dangerouslySetInnerHTML:b})),o?`(${o})`:null)},i=r(26),l=r(61),b=r(30),f=r(134),d=r(2),p=r(69),g=r(18),O=r(51),m=r(12),j=r.n(m),w=r(96),h=r(13),_=r(70),y=(r(249),r(27)),E=r(166);const v={heading:{type:"string",default:Object(a.__)("Filter by rating","woo-gutenberg-products-block")}};Object(n.a)({selector:".wp-block-woocommerce-rating-filter",Block:e=>{let{attributes:t,isEditor:r=!1}=e;const n=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,p.a),[o,a]=Object(c.useState)(!1),[m]=Object(b.a)(),{results:E,isLoading:v}=Object(f.a)({queryRating:!0,queryState:m}),k="h"+t.headingLevel,S=!t.isPreview&&v,x=!t.isPreview&&!v,P=Object(c.useMemo)(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"filter_rating";const t=Object(_.d)(e);if(!t)return[];const r=Object(y.a)(t)?t.split(","):t;return r}("rating_filter"),[]),[R,A]=Object(c.useState)(P),[T,C]=Object(b.b)("rating"),[M,N]=Object(b.b)("rating",P),B=Array.from(T),q=Object(c.useCallback)(e=>{r||(e&&!n&&N(R),(e=>{if(!window)return;if(0===e.length){const e=Object(h.removeQueryArgs)(window.location.href,"rating_filter");return void(e!==window.location.href&&Object(_.c)(e))}const t=Object(h.addQueryArgs)(window.location.href,{rating_filter:e.join(",")});t!==window.location.href&&Object(_.c)(t)})(R))},[r,N,R,n]);Object(c.useEffect)(()=>{q(R)},[R,q]);const L=Object(c.useMemo)(()=>M,[M]),F=Object(i.a)(L),G=Object(l.a)(F);Object(c.useEffect)(()=>{j()(G,F)||j()(R,F)||A(F)},[R,F,G]),Object(c.useEffect)(()=>{o||(C(P),a(!0))},[C,o,a,P]);const Q=Object(c.useCallback)(e=>{if(B.length){const t=B.includes(e),r=B.filter(t=>t!==e);t||(r.push(e),r.sort()),C(r)}else C([e])},[B,C]),U=Object(c.createElement)(k,{className:"wc-block-rating-filter__title"},t.heading),D=S?Object(c.createElement)(O.a,null,U):U,Y=(!v&&Object(g.b)(E,"rating_counts")&&Array.isArray(E.rating_counts)?[...E.rating_counts].reverse():[]).filter(e=>Object(g.a)(e)&&Object.keys(e).length>0).map(e=>{var t,r;return{label:Object(c.createElement)(s,{className:B.includes(null==e||null===(t=e.rating)||void 0===t?void 0:t.toString())?"is-active":"",key:null==e?void 0:e.rating,rating:null==e?void 0:e.rating,ratedProductsCount:null==e?void 0:e.count}),value:null==e||null===(r=e.rating)||void 0===r?void 0:r.toString()}});return Object(c.createElement)(c.Fragment,null,!r&&t.heading&&D,Object(c.createElement)("div",{className:u()("wc-block-rating-filter",{"is-loading":S})},Object(c.createElement)(w.a,{className:"wc-block-rating-filter-list",options:Y,checked:B,onChange:e=>{Q(e.toString())},isLoading:S,isDisabled:x})))},getProps:e=>({attributes:{heading:e.dataset.heading||v.heading.default,headingLevel:e.dataset.headingLevel?parseInt(e.dataset.headingLevel,10):E.attributes.headingLevel.default},isEditor:!1})})},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},3:function(e,t){e.exports=window.wc.wcBlocksData},30:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d}));var n=r(3),c=r(6),o=r(0),u=r(12),a=r.n(u),s=r(26),i=r(61),l=r(22);const b=e=>{const t=Object(l.a)();e=e||t;const r=Object(c.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:u}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,Object(o.useCallback)(t=>{u(e,t)},[e,u])]},f=(e,t,r)=>{const u=Object(l.a)();r=r||u;const a=Object(c.useSelect)(c=>c(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:s}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{s(r,e,t)},[r,e,s])]},d=(e,t)=>{const r=Object(l.a)();t=t||r;const[n,c]=b(t),u=Object(s.a)(n),f=Object(s.a)(e),d=Object(i.a)(f),p=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,f)||(c(Object.assign({},u,f)),p.current=!0)},[u,f,d,c]),p.current?[n,c]:[e,c]}},33:function(e,t){},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(11),c=r.n(n),o=r(0),u=r(15);const a=[".wp-block-woocommerce-cart"],s=e=>{let{Block:t,containers:r,getProps:n=(()=>({})),getErrorBoundaryProps:a=(()=>({}))}=e;0!==r.length&&Array.prototype.forEach.call(r,(e,r)=>{const s=n(e,r),i=a(e,r),l={...e.dataset,...s.attributes||{}};(e=>{let{Block:t,container:r,attributes:n={},props:a={},errorBoundaryProps:s={}}=e;Object(o.render)(Object(o.createElement)(u.a,s,Object(o.createElement)(o.Suspense,{fallback:Object(o.createElement)("div",{className:"wc-block-placeholder"})},t&&Object(o.createElement)(t,c()({},a,{attributes:n})))),r,()=>{r.classList&&r.classList.remove("is-loading")})})({Block:t,container:e,props:s,attributes:l,errorBoundaryProps:i})})},i=e=>{const t=document.body.querySelectorAll(a.join(",")),{Block:r,getProps:n,getErrorBoundaryProps:c,selector:o}=e;(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:c,wrappers:o}=e;const u=document.body.querySelectorAll(c);o&&o.length>0&&Array.prototype.filter.call(u,e=>!((e,t)=>Array.prototype.some.call(t,t=>t.contains(e)&&!t.isSameNode(e)))(e,o)),s({Block:t,containers:u,getProps:r,getErrorBoundaryProps:n})})({Block:r,getProps:n,getErrorBoundaryProps:c,selector:o,wrappers:t}),Array.prototype.forEach.call(t,t=>{t.addEventListener("wc-blocks_render_blocks_frontend",()=>{(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:c,wrapper:o}=e;const u=o.querySelectorAll(c);s({Block:t,containers:u,getProps:r,getErrorBoundaryProps:n})})({...e,wrapper:t})})})}},4:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var u=c.apply(null,n);u&&e.push(u)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},44:function(e,t,r){"use strict";r.d(t,"n",(function(){return o})),r.d(t,"l",(function(){return u})),r.d(t,"k",(function(){return a})),r.d(t,"m",(function(){return s})),r.d(t,"i",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return b})),r.d(t,"j",(function(){return f})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"g",(function(){return g})),r.d(t,"a",(function(){return O})),r.d(t,"h",(function(){return m})),r.d(t,"b",(function(){return j}));var n,c=r(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),u=o.pluginUrl+"images/",a=o.pluginUrl+"build/",s=o.buildPhase,i=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=(c.STORE_PAGES.checkout.id,c.STORE_PAGES.checkout.permalink),b=c.STORE_PAGES.privacy.permalink,f=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),d=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id,c.STORE_PAGES.cart.permalink),p=c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),g=Object(c.getSetting)("shippingCountries",{}),O=Object(c.getSetting)("allowedCountries",{}),m=Object(c.getSetting)("shippingStates",{}),j=Object(c.getSetting)("allowedStates",{})},5:function(e,t){e.exports=window.lodash},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(7);function c(e,t,r){var c=this,o=Object(n.useRef)(null),u=Object(n.useRef)(0),a=Object(n.useRef)(null),s=Object(n.useRef)([]),i=Object(n.useRef)(),l=Object(n.useRef)(),b=Object(n.useRef)(e),f=Object(n.useRef)(!0);b.current=e;var d=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var p=!!(r=r||{}).leading,g=!("trailing"in r)||!!r.trailing,O="maxWait"in r,m=O?Math.max(+r.maxWait||0,t):null;return Object(n.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]),Object(n.useMemo)((function(){var e=function(e){var t=s.current,r=i.current;return s.current=i.current=null,u.current=e,l.current=b.current.apply(r,t)},r=function(e,t){d&&cancelAnimationFrame(a.current),a.current=d?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!f.current)return!1;var r=e-o.current,n=e-u.current;return!o.current||r>=t||r<0||O&&n>=m},j=function(t){return a.current=null,g&&s.current?e(t):(s.current=i.current=null,l.current)},w=function(){var e=Date.now();if(n(e))return j(e);if(f.current){var c=e-o.current,a=e-u.current,s=t-c,i=O?Math.min(s,m-a):s;r(w,i)}},h=function(){for(var b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];var g=Date.now(),m=n(g);if(s.current=b,i.current=c,o.current=g,m){if(!a.current&&f.current)return u.current=o.current,r(w,t),p?e(o.current):l.current;if(O)return r(w,t),e(o.current)}return a.current||r(w,t),l.current};return h.cancel=function(){a.current&&(d?cancelAnimationFrame(a.current):clearTimeout(a.current)),u.current=0,s.current=o.current=i.current=a.current=null},h.isPending=function(){return!!a.current},h.flush=function(){return a.current?j(Date.now()):l.current},h}),[p,O,t,m,g,d])}},51:function(e,t,r){"use strict";var n=r(0);r(71),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},6:function(e,t){e.exports=window.wp.data},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(3),c=r(6),o=r(0),u=r(26),a=r(73);const s=e=>{const{namespace:t,resourceName:r,resourceValues:s=[],query:i={},shouldSelect:l=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),f=Object(u.a)(i),d=Object(u.a)(s),p=Object(a.a)(),g=Object(c.useSelect)(e=>{if(!l)return null;const c=e(n.COLLECTIONS_STORE_KEY),o=[t,r,f,d],u=c.getCollectionError(...o);if(u){if(!(u instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(u)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,r,d,f,l]);return null!==g&&(b.current=g),b.current}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(7);function c(e,t){const r=Object(n.useRef)();return Object(n.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},7:function(e,t){e.exports=window.React},70:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return l}));var n=r(13),c=r(2),o=r(69);const u=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",s="filter_";function i(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function l(e){u?window.location.href=e:window.history.replaceState({},"",e)}},71:function(e,t){},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0);const c=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},9:function(e,t){e.exports=window.wc.blocksCheckout},96:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(4),u=r.n(o),a=r(9);r(116),t.a=e=>{let{className:t,onChange:r,options:o=[],checked:s=[],isLoading:i=!1,isDisabled:l=!1,limit:b=10}=e;const[f,d]=Object(n.useState)(!1),p=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),g=Object(n.useMemo)(()=>{const e=o.length-b;return!f&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(c.sprintf)(
/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,f]),O=Object(n.useMemo)(()=>f&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woo-gutenberg-products-block")},Object(c.__)("Show less","woo-gutenberg-products-block"))),[f]),m=Object(n.useMemo)(()=>{const e=o.length>b+5;return Object(n.createElement)(n.Fragment,null,o.map((t,c)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!f&&c>=b&&{hidden:!0},Object(n.createElement)(a.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:s.includes(t.value),onChange:()=>{r(t.value)}})),e&&c===b-1&&g)),e&&O)},[o,r,s,f,b,O,g,l]),j=u()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":i},t);return Object(n.createElement)("ul",{className:j},i?p:m)}},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(7),c=r(50);function o(e,t){return e===t}function u(e){return"function"==typeof e?function(){return e}:e}function a(e,t,r){var a=r&&r.equalityFn||o,s=function(e){var t=Object(n.useState)(u(e)),r=t[0],c=t[1];return[r,Object(n.useCallback)((function(e){return c(u(e))}),[])]}(e),i=s[0],l=s[1],b=Object(c.a)(Object(n.useCallback)((function(e){return l(e)}),[l]),t,r),f=Object(n.useRef)(e);return a(f.current,e)||(b(e),f.current=e),[i,b]}}});