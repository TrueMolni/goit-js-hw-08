!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(j,t),s?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function j(){var e=g();if(h(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function x(e){return f=void 0,m&&r?y(e):(r=i=void 0,a)}function T(){var e=g(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:x(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O={formRef:document.querySelector(".feedback-form"),textareaRef:document.querySelector("textarea"),inputRef:document.querySelector("input")},h={},j="user-form-data";O.formRef.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(j));console.log("comment: ",t.message),console.log("email: ",t.email),e.currentTarget.reset(),localStorage.removeItem(j)})),O.formRef.addEventListener("input",e(t)((function(){h.email=O.inputRef.value,h.message=O.textareaRef.value,localStorage.setItem(j,JSON.stringify(h))}),500)),function(){if(h)try{var e=JSON.parse(localStorage.getItem(j)),t=e.message,n=e.email;t&&(O.textareaRef.value=t),n&&(O.inputRef.value=n)}catch(e){console.log("Ouch!")}}()}();
//# sourceMappingURL=03-feedback.f8a370f3.js.map
