!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(3)(o,i);o.locals&&(e.exports=o.locals)},function(e,n,t){(n=e.exports=t(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap);",""]),n.push([e.i,'.C4C__shadow {\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: 0.2s opacity;\n  z-index: 99999; }\n  .C4C__shadow.active {\n    opacity: 1; }\n  .C4C__shadow.C4C__shadow--hideShadow {\n    background: transparent;\n    pointer-events: none; }\n\n.C4C__modal {\n  background: #0e2ce4;\n  box-shadow: 0 0 0 6px #0e2ce4;\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n  letter-spacing: 0;\n  overflow: hidden;\n  position: relative;\n  pointer-events: auto;\n  width: 300px; }\n  @media screen and (max-width: 480px) {\n    .C4C__modal {\n      width: 260px; } }\n\n.C4C__header {\n  background: #0e2ce4;\n  box-shadow: 0 0 0 1px #0e2ce4;\n  color: #fff;\n  padding: 15px; }\n  .C4C__header p {\n    font-size: 12px;\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    margin: 0; }\n  .C4C__header .C4C__text--large {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 21px;\n    font-weight: 600;\n    margin: 0.2em 0; }\n\n.C4C__footer {\n  background: #fff;\n  text-align: right;\n  padding: 0 8px 8px; }\n\n.C4C__button {\n  appearance: none;\n  background: #0e2ce4;\n  border: 0 none;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n  letter-spacing: 0;\n  display: inline-block;\n  padding: 0.6em 1.5em;\n  transition: 0.2s background-color, 0.2s transform;\n  transform-origin: 100% 100%; }\n  .C4C__button:active, .C4C__button:hover {\n    background: #081984;\n    transform: scale(1.1); }\n\n.C4C__image-container {\n  background: #fff;\n  padding: 8px; }\n  .C4C__image-container > div {\n    cursor: pointer;\n    float: left;\n    margin: 0 8px 8px 0;\n    padding-bottom: 32%;\n    position: relative;\n    width: calc(33.333% - 5.333px);\n    transition: 0.2s transform; }\n    .C4C__image-container > div:hover {\n      transform: rotate(2deg) scale(0.95); }\n    .C4C__image-container > div:nth-child(3n + 3) {\n      margin-right: 0; }\n    .C4C__image-container > div:nth-child(7), .C4C__image-container > div:nth-child(8), .C4C__image-container > div:nth-child(9) {\n      margin-bottom: 0; }\n    .C4C__image-container > div:after {\n      background-color: #2bbe4e;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMjAuOSAyNTEuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwLjkgMjUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWxpbmUgY2xhc3M9InN0MCIgZmlsbD0iI2ZmZiIgcG9pbnRzPSIxNTQuNiwyMDguNyAzMjAuOSw0Mi40IDI3OC41LDAgMTEyLjIsMTY2LjMgNDIuNCw5Ni41IDAsMTM4LjkgMTEyLjUsMjUxLjQgIi8+PC9zdmc+Cg==);\n      background-size: 70%;\n      background-repeat: no-repeat;\n      background-position: center center;\n      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.25);\n      content: "";\n      color: #fff;\n      display: block;\n      font-size: 11px;\n      line-height: 18px;\n      border-radius: 50%;\n      height: 16px;\n      opacity: 0;\n      transform: translate(-30%, -30%) rotate(-45deg);\n      width: 16px;\n      position: absolute;\n      text-align: center;\n      top: 0;\n      left: 0;\n      transform-origin: 0 0;\n      transition: 0.2s all; }\n    .C4C__image-container > div.active {\n      transform: scale(0.9); }\n      .C4C__image-container > div.active:after {\n        opacity: 1;\n        transform: translate(-30%, -30%) rotate(0); }\n  .C4C__image-container img {\n    height: 100%;\n    object-fit: cover;\n    object-position: center 15%;\n    position: absolute;\n    width: 100%; }\n\n.C4C__clearfix:after {\n  content: "";\n  display: table;\n  clear: both; }\n\n.C4C__modalStepTwo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0;\n  transform: rotate(90deg);\n  transform-origin: 0 100%;\n  transition: 0.3s transform, 0.3s opacity; }\n  .C4C__modalStepTwo.active {\n    opacity: 1;\n    transform: rotate(0); }\n  .C4C__modalStepTwo p {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 14px;\n    line-height: 1.5;\n    margin: 0.75em 0 0.5em; }\n  .C4C__modalStepTwo .C4C__share__eyebrow {\n    margin-bottom: 0.7rem;\n    font-size: 0.7rem;\n    position: relative; }\n    .C4C__modalStepTwo .C4C__share__eyebrow:before {\n      content: "";\n      display: block;\n      position: absolute;\n      top: -130px;\n      height: 120px;\n      width: 2px;\n      background: #ef0d00;\n      left: calc(50% - 1px);\n      z-index: -1; }\n  .C4C__modalStepTwo h2 {\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 22px;\n    text-transform: none;\n    margin: 0; }\n\n.C4C__modalStepTwo__body {\n  background: #ef0d00;\n  color: #fff;\n  text-align: center;\n  padding: 30px 15px; }\n  .C4C__modalStepTwo__body.C4C__modalStepTwo__body--large {\n    padding: 35px 15px; }\n    .C4C__modalStepTwo__body.C4C__modalStepTwo__body--large h2 {\n      font-size: 2.3rem; }\n  .C4C__modalStepTwo__body h2 {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    text-transform: none;\n    font-size: 1.8rem; }\n  .C4C__modalStepTwo__body p {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 0.9rem; }\n  .C4C__modalStepTwo__body p:last-child {\n    margin-bottom: 0; }\n\n.C4C__share {\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 15px;\n  position: relative;\n  text-align: center; }\n  .C4C__share h2 {\n    color: #0e2ce4;\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 2rem;\n    text-transform: none;\n    line-height: 1;\n    margin: 0 0 0.9rem;\n    text-transform: none; }\n  .C4C__share p {\n    font-size: 14px;\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    margin: 0; }\n  .C4C__share .caps {\n    font-weight: 600;\n    text-transform: uppercase; }\n\n.C4C__share__button {\n  background: #fff;\n  border: 2px solid #ef0d00;\n  color: #0e2ce4;\n  display: inline-block;\n  text-decoration: none;\n  width: 40px;\n  height: 40px;\n  margin: 10px 10px 0;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s transform, 0.2s box-shadow;\n  box-shadow: -4px 4px 0 0 #ef0d00; }\n  .C4C__share__button:hover {\n    transform: translate(-4px, 4px);\n    box-shadow: 0 0 0 0 #ef0d00; }\n  .C4C__share__button svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 24px;\n    width: 24px;\n    transform: translate(-50%, -50%); }\n  .C4C__share__button path {\n    fill: #0e2ce4; }\n',""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[t].concat(r).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),c=null,l=0,d=[],p=t(4);function f(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(C(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(C(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function u(e,n){for(var t=[],o={},i=0;i<e.length;i++){var r=e[i],a=n.base?r[0]+n.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function h(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,t);t.insertBefore(n,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function g(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return t.nc}();o&&(e.attrs.nonce=o)}return _(n,e.attrs),h(e,n),n}function _(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function C(e,n){var t,o,i,r;if(n.transform&&e.css){if(!(r="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=r}if(n.singleton){var a=l++;t=c||(c=g(n)),o=w.bind(null,t,a,!1),i=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(n,e.attrs),h(e,n),n}(n),o=function(e,n,t){var o=t.css,i=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=p(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(n),o=function(e,n){var t=n.css,o=n.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){m(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=u(e,n);return f(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,o.push(s)}e&&f(u(e,n),n);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var b,v=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function w(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){"use strict";t.r(n);t(0);var o='<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/></svg>',i='<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>',r=[{name:"Rand Paul",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Rand_Paul%2C_official_portrait%2C_112th_Congress.jpg/946px-Rand_Paul%2C_official_portrait%2C_112th_Congress.jpg",belief:"thinks most abortions should be illegal, even in cases of rape, incest."},{name:"Lindsey Graham",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lindsey_Graham%2C_Official_Portrait_2006.jpg/946px-Lindsey_Graham%2C_Official_Portrait_2006.jpg"},{name:"Ted Cruz",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ted_Cruz%2C_official_portrait%2C_113th_Congress.jpg/960px-Ted_Cruz%2C_official_portrait%2C_113th_Congress.jpg"},{name:"Jason Chaffetz",photo:"https://upload.wikimedia.org/wikipedia/commons/3/39/Jason_Chaffetz%2C_official_portrait%2C_111th_Congress.jpg"},{name:"Donald Trump",photo:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Donald_Trump_September_2017.png"},{name:"Mike Pence",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mike_Pence_official_Vice_Presidential_portrait.jpg/192px-Mike_Pence_official_Vice_Presidential_portrait.jpg"},{name:"Mitch McConnell",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mitch_McConnell_official_portrait_112th_Congress.jpg/946px-Mitch_McConnell_official_portrait_112th_Congress.jpg"},{name:"Louie Gohmert",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Louie_Gohmert_official_photo_2.jpg/800px-Louie_Gohmert_official_photo_2.jpg"},{name:"Devin Nunes",photo:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Devin_Nunes.jpg"}];const a={mount:v,DEBUG:!1};window.C4C=a;const s=document.createElement("div"),c=document.createElement("div"),l=document.createElement("header"),d=document.createElement("div"),p=document.createElement("footer"),f=document.createElement("button"),u=document.createElement("div");let h=!1,m=-1,g=-1;function _(e,n=!1,t=!1){document.body.style.overflow="hidden",document.body.appendChild(s),n&&s.classList.add("C4C__shadow--hideShadow"),s.__C4C_escReset=t,setTimeout(()=>{const{width:n,height:t}=c.getBoundingClientRect();let o=e.pageX-n/2;o<0&&(o=0),o>window.innerWidth-n&&(o=window.innerWidth-n);let i=e.pageY-t/2;i<0&&(i=0),i+t>window.innerHeight&&(i=window.innerHeight-t),s.classList.add("active"),c.style.left=o+"px",m=o/window.innerWidth,c.style.top=i+"px",g=i/window.innerHeight,function(){if(h)return;h=!0;const e=window.location.host+window.location.pathname;fetch("https://script.google.com/macros/s/AKfycbwVe12OgYnwyvJ91EwUOJjj5g02lQlbTC_g1wr2pumW32ePtPA/exec",{method:"POST",body:e,headers:{"Content-Type":"text/plain;charset=utf-8"}})}()},100)}function C(){document.body.style.overflow="",s.classList.remove("active"),Array.from(document.querySelectorAll("[data-captcha-img]")).forEach(e=>e.parentNode.classList.remove("active")),setTimeout(()=>{document.body.removeChild(s),u.classList.remove("active")},100)}function b(){!function(e){u.innerHTML="";const n=document.createElement("div");if(n.classList.add("C4C__modalStepTwo__body"),e<9){const e=Array.from(document.querySelectorAll("[data-captcha-img]")).filter(e=>!e.parentNode.classList.contains("active"))[0].getAttribute("alt");n.innerHTML=`<h2>Hold up there...</h2>\n      <p><small>Do you really want ${e} in the driver's seat of your uterus?</small></p>`}else n.classList.add("C4C__modalStepTwo__body--large"),n.innerHTML="<h2>You Got It!</h2><p>Lawmakers should not be part of our family planning process.</p>";u.appendChild(n);const t=document.createElement("div");t.classList.add("C4C__share"),t.innerHTML=`<div>\n    <p class="caps C4C__share__eyebrow">But what can I do about it?</p>\n      <h2>Share Captcha for Congress</h2>\n      <p>Help keep reproductive rights at the top of everyone's mind on the Internet.</p>\n      <div>\n        <a class="C4C__share__button">${i}</a>\n        <a class="C4C__share__button">${o}</a>\n      </div>\n    </div>`,u.appendChild(t),u.classList.add("active")}(Array.from(document.querySelectorAll("[data-captcha-img]")).filter(e=>e.parentNode.classList.contains("active")).length)}function v(){const e=Array.from(document.querySelectorAll("[data-c4c]"));window.C4C.DEBUG&&console.log("mounting",e),e.forEach(e=>{if("auto"===e.getAttribute("data-c4c")){const n=e.getBoundingClientRect();_({pageX:n.left+n.width/2,pageY:n.top+n.height/2},"none"===e.getAttribute("data-c4c-shadow"),"reset"===e.getAttribute("data-c4c-esc"))}else e.addEventListener("click",_)})}s.classList.add("C4C__shadow"),c.classList.add("C4C__modal"),s.appendChild(c),l.classList.add("C4C__header"),l.innerHTML='<p>Select all images of</p>\n    <p class="C4C__text--large">people who should not be planning my family.</p>\n    <p>Click verify once you\'re done.</p>\n  ',c.appendChild(l),d.classList.add("C4C__image-container","C4C__clearfix"),c.appendChild(d),r.forEach(({name:e,photo:n})=>{const t=document.createElement("div"),o=document.createElement("img");o.setAttribute("data-captcha-img","1"),o.setAttribute("alt",e),o.src=n,t.appendChild(o),d.appendChild(t)}),p.classList.add("C4C__footer"),f.innerHTML="Verify",f.classList.add("C4C__button"),p.appendChild(f),c.appendChild(p),u.classList.add("C4C__modalStepTwo"),c.appendChild(u),s.addEventListener("click",e=>{e.target===s&&C(),e.target.getAttribute("data-captcha-img")&&function(e){e.target.parentNode.classList.toggle("active")}(e),e.target===f&&b()}),window.addEventListener("keydown",e=>{if(27===e.keyCode&&s.__C4C_escReset)return Array.from(document.querySelectorAll("[data-captcha-img]")).forEach(e=>e.parentNode.classList.remove("active")),void u.classList.remove("active");27===e.keyCode&&C()}),window.addEventListener("resize",()=>{if(!s.classList.contains("active"))return;const e=m*window.innerWidth,n=g*window.innerHeight;c.style.left=e+"px",c.style.top=n+"px"}),window.addEventListener("DOMContentLoaded",v)}]);