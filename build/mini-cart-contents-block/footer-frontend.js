(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[60],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var s=n(5);let c;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(c||(c={}));const a={addEventCallback:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(s.uniqueId)(),type:c.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:n}},removeEventCallback:(e,t)=>({id:t,type:c.REMOVE_EVENT_CALLBACK,eventType:e})},i={},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,{type:t,eventType:n,id:s,callback:a,priority:r}=arguments.length>1?arguments[1]:void 0;const o=e.hasOwnProperty(n)?new Map(e[n]):new Map;switch(t){case c.ADD_EVENT_CALLBACK:return o.set(s,{priority:r,callback:a}),{...e,[n]:o};case c.REMOVE_EVENT_CALLBACK:return o.delete(s),{...e,[n]:o}}}},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u}));var s=n(0),c=n(6),a=n(3),i=n(103),r=n(228);var o=n(72);const l=Object(s.createContext)({onPaymentProcessing:()=>()=>()=>{}}),d=()=>Object(s.useContext)(l),u=e=>{let{children:t}=e;const{isProcessing:n,isIdle:d,isCalculating:u,hasError:m}=Object(c.useSelect)(e=>{const t=e(a.CHECKOUT_STORE_KEY);return{isProcessing:t.isProcessing(),isIdle:t.isIdle(),hasError:t.hasError(),isCalculating:t.isCalculating()}}),{currentStatus:b}=Object(c.useSelect)(e=>({currentStatus:e(a.PAYMENT_STORE_KEY).getCurrentStatus()})),{createErrorNotice:p,removeNotice:h}=Object(c.useDispatch)("core/notices"),{setValidationErrors:g}=Object(c.useDispatch)(a.VALIDATION_STORE_KEY),[y,v]=Object(s.useReducer)(i.b,{}),{onPaymentProcessing:E}=(e=>Object(s.useMemo)(()=>({onPaymentProcessing:Object(r.a)("payment_processing",e)}),[e]))(v),O=Object(s.useRef)(y);Object(s.useEffect)(()=>{O.current=y},[y]);const{__internalSetPaymentStatus:f,__internalSetPaymentMethodData:j,__internalEmitPaymentProcessingEvent:_}=Object(c.useDispatch)(a.PAYMENT_STORE_KEY),{setBillingAddress:P,setShippingAddress:k}=Object(o.a)();Object(s.useEffect)(()=>{!n||m||u||b.isFinished||f({isProcessing:!0})},[n,m,u,b.isFinished,f]),Object(s.useEffect)(()=>{d&&!b.isSuccessful&&f({isPristine:!0})},[d,b.isSuccessful,f]),Object(s.useEffect)(()=>{m&&b.isSuccessful&&f({isPristine:!0})},[m,b.isSuccessful,f]),Object(s.useEffect)(()=>{b.isProcessing&&_(O.current,g)},[b.isProcessing,g,f,h,p,P,j,k,_]);const A={onPaymentProcessing:E};return Object(s.createElement)(l.Provider,{value:A},t)}},144:function(e,t,n){"use strict";var s=n(0);n(213),t.a=()=>Object(s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},213:function(e,t){},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n(103);const c=(e,t)=>function(n){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const a=s.a.addEventCallback(e,n,c);return t(a),()=>{t(s.a.removeEventCallback(e,a.id))}}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(0),c=n(12),a=n.n(c);function i(e){const t=Object(s.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},293:function(e,t,n){"use strict";var s=n(11),c=n.n(s),a=n(0),i=n(43),r=n(4),o=n.n(r),l=n(144);n(294),t.a=e=>{let{className:t,showSpinner:n=!1,children:s,variant:r="contained",...d}=e;const u=o()("wc-block-components-button",t,r,{"wc-block-components-button--loading":n});return Object(a.createElement)(i.a,c()({className:u},d),n&&Object(a.createElement)(l.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},s))}},294:function(e,t){},309:function(e,t){},312:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var s=n(26),c=n(16),a=n(6),i=n(3);const r=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:r,availableExpressPaymentMethods:o}=Object(a.useSelect)(e=>{const t=e(i.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),l=Object.values(r).map(e=>{let{name:t}=e;return t}),d=Object.values(o).map(e=>{let{name:t}=e;return t}),u=Object(c.getPaymentMethods)(),m=Object(c.getExpressPaymentMethods)(),b=Object.keys(u).reduce((e,t)=>(l.includes(t)&&(e[t]=u[t]),e),{}),p=Object.keys(m).reduce((e,t)=>(d.includes(t)&&(e[t]=m[t]),e),{}),h=Object(s.a)(b),g=Object(s.a)(p);return{paymentMethods:e?g:h,isInitialized:e?n:t}},o=()=>r(!1),l=()=>r(!0)},314:function(e,t,n){"use strict";var s=n(11),c=n.n(s),a=n(0),i=n(4),r=n.n(i);const o=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var l=e=>{let{id:t,src:n=null,alt:s=""}=e;return n?Object(a.createElement)("img",{className:o(t),src:n,alt:s}):null},d=n(44);const u=[{id:"alipay",alt:"Alipay",src:d.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.l+"payment-methods/wechat.svg"}];var m=n(27);n(309),t.a=e=>{let{icons:t=[],align:n="center",className:s}=e;const i=(e=>{const t={};return e.forEach(e=>{let n={};"string"==typeof e&&(n={id:e,alt:e,src:null}),"object"==typeof e&&(n={id:e.id||"",alt:e.alt||"",src:e.src||null}),n.id&&Object(m.a)(n.id)&&!t[n.id]&&(t[n.id]=n)}),Object.values(t)})(t);if(0===i.length)return null;const o=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===n,"wc-block-components-payment-method-icons--align-right":"right"===n},s);return Object(a.createElement)("div",{className:o},i.map(e=>{const t={...e,...(n=e.id,u.find(e=>e.id===n)||{})};var n;return Object(a.createElement)(l,c()({key:"payment-method-icon-"+e.id},t))}))}},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s=e=>Object.values(e).reduce((e,t)=>(null!==t.icons&&(e=e.concat(t.icons)),e),[])},463:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n(9),i=n(38),r=n(312),o=n(35),l=n(314),d=n(412),u=n(2),m=n(44),b=n(293),p=n(120),h=n(4),g=n.n(h);const y=()=>{const{paymentMethods:e}=Object(r.b)();return Object(s.createElement)(l.a,{icons:Object(d.a)(e)})};t.default=e=>{let{className:t}=e;const{cartTotals:n}=Object(o.a)(),r=Object(u.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(n.total_items,10)+parseInt(n.total_items_tax,10):parseInt(n.total_items,10);return Object(s.createElement)("div",{className:g()(t,"wc-block-mini-cart__footer")},Object(s.createElement)(a.TotalsItem,{className:"wc-block-mini-cart__footer-subtotal",currency:Object(i.getCurrencyFromPriceResponse)(n),label:Object(c.__)("Subtotal","woo-gutenberg-products-block"),value:r,description:Object(c.__)("Shipping, taxes, and discounts calculated at checkout.","woo-gutenberg-products-block")}),Object(s.createElement)("div",{className:"wc-block-mini-cart__footer-actions"},m.c&&Object(s.createElement)(b.a,{className:"wc-block-mini-cart__footer-cart",href:m.c,variant:"outlined"},Object(c.__)("View my cart","woo-gutenberg-products-block")),m.d&&Object(s.createElement)(b.a,{className:"wc-block-mini-cart__footer-checkout",href:m.d},Object(c.__)("Go to checkout","woo-gutenberg-products-block"))),Object(s.createElement)(p.a,null,Object(s.createElement)(y,null)))}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(6),c=n(3);const a=()=>{const{customerData:e,isInitialized:t}=Object(s.useSelect)(e=>{const t=e(c.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}}),{setShippingAddress:n,setBillingAddress:a}=Object(s.useDispatch)(c.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:a,setShippingAddress:n}}}}]);