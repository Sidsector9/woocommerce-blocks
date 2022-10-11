this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["rating-filter"]=function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={41:0,1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;return o.push([421,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.blocks},100:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(11),i=n(1);n(139),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:a,instanceId:s}=e;const u="h"+n;return Object(r.createElement)(u,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+s},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(r.createElement)(c.PlainText,{id:"block-title-"+s,className:"wc-block-editor-components-title",value:a,onChange:o}))})},101:function(e,t,n){"use strict";var r=n(0);n(140),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),c=n(7),o=n(0),i=n(40),a=n(142);const s=e=>{const{namespace:t,resourceName:n,resourceValues:s=[],query:u={},shouldSelect:l=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),d=Object(i.a)(u),f=Object(i.a)(s),p=Object(a.a)(),g=Object(c.useSelect)(e=>{if(!l)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,d,f],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,f,d,l]);return null!==g&&(b.current=g),b.current}},11:function(e,t){e.exports=window.wp.compose},12:function(e,t){e.exports=window.React},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},13:function(e,t){e.exports=window.wp.primitives},139:function(e,t){},140:function(e,t){},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},157:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(18);n(199),t.a=e=>{let{className:t,onChange:n,options:o=[],checked:s=[],isLoading:u=!1,isDisabled:l=!1,limit:b=10}=e;const[d,f]=Object(r.useState)(!1),p=Object(r.useMemo)(()=>[...Array(5)].map((e,t)=>Object(r.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),g=Object(r.useMemo)(()=>{const e=o.length-b;return!d&&Object(r.createElement)("li",{key:"show-more",className:"show-more"},Object(r.createElement)("button",{onClick:()=>{f(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(c.sprintf)(
/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,d]),O=Object(r.useMemo)(()=>d&&Object(r.createElement)("li",{key:"show-less",className:"show-less"},Object(r.createElement)("button",{onClick:()=>{f(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woo-gutenberg-products-block")},Object(c.__)("Show less","woo-gutenberg-products-block"))),[d]),j=Object(r.useMemo)(()=>{const e=o.length>b+5;return Object(r.createElement)(r.Fragment,null,o.map((t,c)=>Object(r.createElement)(r.Fragment,{key:t.value},Object(r.createElement)("li",e&&!d&&c>=b&&{hidden:!0},Object(r.createElement)(a.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:s.includes(t.value),onChange:()=>{n(t.value)}})),e&&c===b-1&&g)),e&&O)},[o,n,s,d,b,O,g,l]),m=i()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":u},t);return Object(r.createElement)("ul",{className:m},u?p:j)}},16:function(e,t){e.exports=window.wp.url},18:function(e,t){e.exports=window.wc.blocksCheckout},199:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"h",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"i",(function(){return m})),n.d(t,"b",(function(){return w}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",s=o.buildPhase,u=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,l=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,d=c.STORE_PAGES.privacy.permalink,f=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),p=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),g=c.STORE_PAGES.cart.permalink,O=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),j=Object(c.getSetting)("allowedCountries",{}),m=Object(c.getSetting)("shippingStates",{}),w=Object(c.getSetting)("allowedStates",{})},24:function(e,t){e.exports=window.wp.isShallowEqual},241:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n(16),c=n(2),o=n(125);const i=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",s="filter_";function u(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function l(e){i?window.location.href=e:window.history.replaceState({},"",e)}},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(259),o=n(8),i=n(40),a=n(33),s=n(52),u=n(107),l=n(44);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:d,queryState:f}=e,p=Object(l.a)();p+="-collection-data";const[g]=Object(s.a)(p),[O,j]=Object(s.b)("calculate_attribute_counts",[],p),[m,w]=Object(s.b)("calculate_price_range",null,p),[h,_]=Object(s.b)("calculate_stock_status_counts",null,p),[v,y]=Object(s.b)("calculate_rating_counts",null,p),E=Object(i.a)(t||{}),k=Object(i.a)(n),S=Object(i.a)(b),x=Object(i.a)(d);Object(r.useEffect)(()=>{"object"==typeof E&&Object.keys(E).length&&(O.find(e=>Object(a.b)(E,"taxonomy")&&e.taxonomy===E.taxonomy)||j([...O,E]))},[E,O,j]),Object(r.useEffect)(()=>{m!==k&&void 0!==k&&w(k)},[k,w,m]),Object(r.useEffect)(()=>{h!==S&&void 0!==S&&_(S)},[S,_,h]),Object(r.useEffect)(()=>{v!==x&&void 0!==x&&y(x)},[x,y,v]);const[C,T]=Object(r.useState)(!1),[R]=Object(c.a)(C,200);C||T(!0);const P=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(g),[g]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...f,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...P},shouldSelect:R})}},3:function(e,t){e.exports=window.wp.components},310:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(24),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},421:function(e,t,n){e.exports=n(492)},422:function(e,t){},423:function(e,t){},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},492:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(1),a=n(60),s=n(10),u=n(118),l=n(534),b=n(4),d=n.n(b),f=n(5),p=n(3),g=n(100);n(423);var O=e=>{let{className:t,key:n,rating:r,ratedProductsCount:c}=e;const a=d()("wc-block-components-product-rating",t),s={width:r/5*100+"%"},u=Object(i.sprintf)(
/* translators: %f is referring to the average rating value */
Object(i.__)("Rated %f out of 5","woo-gutenberg-products-block"),r),l={__html:Object(i.sprintf)(
/* translators: %f is referring to the rating value */
Object(i.__)("Rated %f out of 5","woo-gutenberg-products-block"),Object(i.sprintf)('<strong class="rating">%f</strong>',r))};return Object(o.createElement)("div",{className:a,key:n},Object(o.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":u},Object(o.createElement)("span",{style:s,dangerouslySetInnerHTML:l})),c?`(${c})`:null)},j=n(40),m=n(102),w=n(52),h=n(279),_=n(2),v=n(125),y=n(33),E=n(101),k=n(24),S=n.n(k),x=n(157),C=n(16),T=n(241),R=(n(422),n(85)),P=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(_.getSettingWithCoercion)("is_rendering_php_template",!1,v.a),[c,i]=Object(o.useState)(!1),[a]=Object(w.a)(),{results:s,isLoading:u}=Object(h.a)({queryRating:!0,queryState:a}),l="h"+t.headingLevel,b=!t.isPreview&&u,f=!t.isPreview&&!u,p=Object(o.useMemo)(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"filter_rating";const t=Object(T.d)(e);if(!t)return[];const n=Object(R.a)(t)?t.split(","):t;return n}("rating_filter"),[]),[g,k]=Object(o.useState)(p),[P,N]=Object(w.b)("rating"),[A,L]=Object(w.b)("rating",p),M=Array.from(P),q=Object(o.useCallback)(e=>{n||(e&&!r&&L(g),(e=>{if(!window)return;if(0===e.length){const e=Object(C.removeQueryArgs)(window.location.href,"rating_filter");return void(e!==window.location.href&&Object(T.c)(e))}const t=Object(C.addQueryArgs)(window.location.href,{rating_filter:e.join(",")});t!==window.location.href&&Object(T.c)(t)})(g))},[n,L,g,r]);Object(o.useEffect)(()=>{q(g)},[g,q]);const B=Object(o.useMemo)(()=>A,[A]),F=Object(j.a)(B),G=Object(m.a)(F);Object(o.useEffect)(()=>{S()(G,F)||S()(g,F)||k(F)},[g,F,G]),Object(o.useEffect)(()=>{c||(N(p),i(!0))},[N,c,i,p]);const Q=Object(o.useCallback)(e=>{if(M.length){const t=M.includes(e),n=M.filter(t=>t!==e);t||(n.push(e),n.sort()),N(n)}else N([e])},[M,N]),Y=Object(o.createElement)(l,{className:"wc-block-rating-filter__title"},t.heading),U=b?Object(o.createElement)(E.a,null,Y):Y,D=(!u&&Object(y.b)(s,"rating_counts")&&Array.isArray(s.rating_counts)?[...s.rating_counts].reverse():[]).filter(e=>Object(y.a)(e)&&Object.keys(e).length>0).map(e=>{var t,n;return{label:Object(o.createElement)(O,{className:M.includes(null==e||null===(t=e.rating)||void 0===t?void 0:t.toString())?"is-active":"",key:null==e?void 0:e.rating,rating:null==e?void 0:e.rating,ratedProductsCount:null==e?void 0:e.count}),value:null==e||null===(n=e.rating)||void 0===n?void 0:n.toString()}});return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&U,Object(o.createElement)("div",{className:d()("wc-block-rating-filter",{"is-loading":b})},Object(o.createElement)(x.a,{className:"wc-block-rating-filter-list",options:D,checked:M,onChange:e=>{Q(e.toString())},isLoading:b,isDisabled:f})))},N=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:n}=e;const{className:r,heading:c,headingLevel:i}=t,a=Object(f.useBlockProps)({className:d()("wc-block-rating-filter",r)});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",a,Object(o.createElement)(g.a,{className:"wc-block-rating-filter__title",headingLevel:i,heading:c,onChange:e=>n({heading:e})}),Object(o.createElement)(p.Disabled,null,Object(o.createElement)(P,{attributes:t,isEditor:!0}))))}),A=n(310);const L={heading:{type:"string",default:Object(i.__)("Filter by rating","woo-gutenberg-products-block")}};Object(a.a)()&&Object(s.registerBlockType)(A,{icon:{src:Object(o.createElement)(u.a,{icon:l.a,className:"wc-block-editor-components-block-icon"})},attributes:{...A.attributes,...L},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:n}=e;return"woocommerce_rating_filter"===t&&!(null==n||!n.raw)},transform:e=>{var t;let{instance:n}=e;return Object(s.createBlock)("woocommerce/rating-filter",{heading:(null==n||null===(t=n.raw)||void 0===t?void 0:t.title)||Object(i.__)("Filter by rating","woo-gutenberg-products-block"),headingLevel:3})}}]},edit:N,save(e){let{attributes:t}=e;const{className:n,heading:r,headingLevel:i}=t,a={"data-heading":r,"data-heading-level":i};return Object(o.createElement)("div",c()({},f.useBlockProps.save({className:d()("is-loading",n)}),a),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-rating-filter__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(9),c=n(7),o=n(0),i=n(24),a=n.n(i),s=n(40),u=n(102),l=n(44);const b=e=>{const t=Object(l.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},d=(e,t,n)=>{const i=Object(l.a)();n=n||i;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:s}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{s(n,e,t)},[n,e,s])]},f=(e,t)=>{const n=Object(l.a)();t=t||n;const[r,c]=b(t),i=Object(s.a)(r),d=Object(s.a)(e),f=Object(u.a)(d),p=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(f,d)||(c(Object.assign({},i,d)),p.current=!0)},[i,d,f,c]),p.current?[r,c]:[e,c]}},60:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(10),c=n(22);const o=(e,t)=>{if(c.n>2)return Object(r.registerBlockType)(e,t)},i=()=>c.n>2,a=()=>c.n>1},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.lodash},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},9:function(e,t){e.exports=window.wc.wcBlocksData}});