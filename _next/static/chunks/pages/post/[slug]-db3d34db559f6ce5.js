(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{1705:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return t(6578)}])},6578:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return x},default:function(){return E}});var r=t(5893),o=t(2962),c=t(7484),i=t.n(c),a=(t(9132),t(5929));function u(n){var e=n.href,t=n.children;return(0,r.jsx)("a",{className:"underline text-blue-300 transition-colors duration-300 hover:text-blue-500 hover:cursor-pointer",href:e,children:t})}var s=t(7294);function l(){var n=(0,s.useState)(0),e=n[0],t=n[1];return(0,r.jsxs)("div",{className:"my-4",children:[(0,r.jsxs)("div",{children:["Count ",e]}),(0,r.jsx)("button",{className:"bg-orange-200 rounded text-lg font-semibold py-1 px-4",onClick:function(){return t((function(n){return n+1}))},children:"Count Up"})]})}var d=t(1163),f=t(6261),h=t(9504),v=t(209),m=t.n(v);function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function b(n){return function(n){if(Array.isArray(n))return g(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n){var e=n.children,t=function(n){return b(document.querySelectorAll(".".concat(m().toc," .toc-item-").concat(n," > a"))).map((function(n){var e=n,t=decodeURIComponent(e.hash.substring(1,e.hash.length)),r=document.getElementById(t);return{anchor:e,heading:r,headingSection:r.parentElement}}))},o=function(n){if("h1"===n.heading.tagName.toLowerCase())n.anchor.classList.add("active");else{var e,t=null===(e=n.anchor.closest(".toc-item-h1"))||void 0===e?void 0:e.querySelector("a");null===t||void 0===t||t.classList.add("active-backsite"),p.current=n.anchor,n.anchor.classList.add("active")}},c=function(n){if("h1"===n.heading.tagName.toLowerCase())n.anchor.classList.remove("active"),n.anchor.classList.remove("active-backsite");else{if(p.current===n.anchor){var e,t=null===(e=n.anchor.closest(".toc-item-h1"))||void 0===e?void 0:e.querySelector("a");null===t||void 0===t||t.classList.remove("active-backsite")}n.anchor.classList.remove("active")}},i=(0,s.useState)([]),a=i[0],u=i[1],l=(0,s.useState)([]),v=l[0],g=l[1],p=(0,s.useRef)(null),x=(0,s.useRef)(null),E=(0,s.useRef)(null),y=(0,d.useRouter)(),_=(0,s.useCallback)((function(){a.length&&a.forEach((function(n){var e,t=n.headingSection;t&&(null===(e=x.current)||void 0===e||e.observe(t))})),v.length&&v.forEach((function(n){var e,t=n.headingSection;t&&(null===(e=E.current)||void 0===e||e.observe(t))}))}),[a,v]),w=(0,s.useCallback)((function(){var n,e;null===(n=x.current)||void 0===n||n.disconnect(),null===(e=E.current)||void 0===e||e.disconnect()}),[]);return(0,s.useEffect)((function(){var n=t("h1"),e=t("h2");u(n),g(e)}),[]),(0,s.useEffect)((function(){if(a.length&&v.length){var n=window.innerHeight-(h.f+1);x.current=new IntersectionObserver((function(n){n.forEach((function(n){var e,t=null===(e=n.target.firstElementChild)||void 0===e?void 0:e.id,r=a.find((function(n){var e=n.anchor;return decodeURIComponent(e.hash)==="#".concat(t)}));r&&(n.isIntersecting?o(r):c(r))}))}),{rootMargin:"".concat(-(h.f+10),"px 0px ").concat(-(n-10),"px 0px"),threshold:0}),E.current=new IntersectionObserver((function(n){n.forEach((function(n){var e,t=null===(e=n.target.firstElementChild)||void 0===e?void 0:e.id,r=v.find((function(n){var e=n.anchor;return decodeURIComponent(e.hash)==="#".concat(t)}));r&&(n.isIntersecting?o(r):c(r))}))}),{rootMargin:"".concat(-(h.f+10),"px 0px ").concat(-(n-10),"px 0px"),threshold:0}),_()}return function(){var n,e;null===(n=x.current)||void 0===n||n.disconnect(),null===(e=E.current)||void 0===e||e.disconnect()}}),[a,v,_]),(0,s.useEffect)((function(){var n,e=document.querySelector(".".concat(m().toc)),t=function(n){var e=a.find((function(e){return e.anchor===n.target}))||v.find((function(e){return e.anchor===n.target}));e&&(a.forEach((function(n){n.anchor.classList.remove("active"),n.anchor.classList.remove("active-backsite")})),v.forEach((function(n){return n.anchor.classList.remove("active")})),o(e),f.NY.scrollTo(window.scrollY+e.heading.getBoundingClientRect().top-(h.f+10),{duration:500,smooth:"easeOutQuart"}))};return null===(n=e)||void 0===n||n.addEventListener("click",t),function(){var n;return null===(n=e)||void 0===n?void 0:n.removeEventListener("click",t)}}),[a,v,y]),(0,s.useEffect)((function(){return a.length&&v.length&&(f.zW.scrollEvent.register("begin",(function(){w()})),f.zW.scrollEvent.register("end",(function(){_()}))),function(){f.zW.scrollEvent.remove("begin"),f.zW.scrollEvent.remove("end")}}),[a,v,_,w]),(0,r.jsx)("nav",{className:"".concat(m().toc),children:e})}i().locale("ko");var x=!0;function E(n){var e=n.post,t=e.title,c=e.publishedAt,s=(0,a.z)(e.body.code);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.PB,{title:t}),(0,r.jsxs)("section",{className:"pt-16",children:[(0,r.jsxs)("header",{className:"mb-12",children:[(0,r.jsx)("h1",{className:"pb-2 border-b-2 border-blue-400 text-blue-400",children:t}),(0,r.jsx)("time",{dateTime:c,className:"text-gray-400 font-extralight italic",children:i()(c).format("YYYY\ub144 MM\uc6d4 DD\uc77c (dddd)")})]}),(0,r.jsx)("section",{children:(0,r.jsx)(s,{components:{Count:l,a:u,nav:p}})})]})]})}},209:function(n){n.exports={toc:"Toc_toc__OYKD_"}}},function(n){n.O(0,[70,774,888,179],(function(){return e=1705,n(n.s=e);var e}));var e=n.O();_N_E=e}]);