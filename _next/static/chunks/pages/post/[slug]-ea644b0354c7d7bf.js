(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{6790:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return k},default:function(){return j}});var n=r(2962),o=r(4147),a=r(6597),i=r(7484),c=r.n(i),s=r(5929),l=r(5893);function u(t){var e=t.href,r=t.children;return(0,l.jsx)("a",{className:"underline text-blue-300 transition-colors duration-300 hover:text-blue-500 hover:cursor-pointer",href:e,children:r})}var d=r(7294);function v(){var t=(0,d.useState)(0),e=t[0],r=t[1];return(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsxs)("div",{children:["Count ",e]}),(0,l.jsx)("button",{className:"bg-orange-200 rounded text-lg font-semibold py-1 px-4",onClick:function(){return r((function(t){return t+1}))},children:"Count Up"})]})}var f=r(5258),h=r(8479),w=r(850),p=r(1163),g=r(6261),m=r(6963);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){var e=t.children,r=(0,d.useRef)(null),n=(0,d.useRef)(),o=(0,d.useRef)(null),a=(0,d.useRef)(null),i=(0,d.useRef)(null),c=(0,p.useRouter)();function s(t){return r.current?(0,h.Z)(r.current.querySelectorAll(".toc-item-".concat(t," > a"))).map((function(t){var e=t,r=decodeURIComponent(e.hash.substring(1,e.hash.length)),n=document.getElementById(r);return{anchor:e,heading:n,headingSection:n.parentElement}})):[]}var u=(0,d.useCallback)((function(t){var e=t.heading;g.NY.scrollTo(window.scrollY+e.getBoundingClientRect().top-(m.f+10),{duration:800,smooth:"easeOutQuart"})}),[]);return(0,d.useEffect)((function(){var t=s("h1"),e=s("h2");n.current={h1:t,h2:e}}),[]),(0,d.useEffect)((function(){var t=function(t){return function(e){e.forEach((function(e){var r,n=null===(r=e.target.firstElementChild)||void 0===r?void 0:r.id,a=t.find((function(t){var e=t.anchor;return decodeURIComponent(e.hash)==="#".concat(n)}));a&&(e.isIntersecting?function(t){var e=t.heading,r=t.anchor;if("h1"===e.tagName.toLowerCase())r.classList.add("active");else{var n,a=null===(n=r.closest(".toc-item-h1"))||void 0===n?void 0:n.querySelector("a");null===a||void 0===a||a.classList.add("active-backsite"),o.current=r,r.classList.add("active")}}(a):function(t){var e=t.heading,r=t.anchor;if("h1"===e.tagName.toLowerCase())r.classList.remove("active"),r.classList.remove("active-backsite");else{if(o.current===r){var n,a=null===(n=r.closest(".toc-item-h1"))||void 0===n?void 0:n.querySelector("a");null===a||void 0===a||a.classList.remove("active-backsite")}r.classList.remove("active")}}(a))}))}},e=n.current;if(e&&e.h1.length&&e.h2.length){var r=window.innerHeight-(m.f+1),c={rootMargin:"".concat(-(m.f+10),"px 0px ").concat(-(r-10),"px 0px"),threshold:0};a.current=new IntersectionObserver(t(e.h1),c),i.current=new IntersectionObserver(t(e.h2),c),function(){var t,e;null!==(t=n.current)&&void 0!==t&&t.h1.length&&n.current.h1.forEach((function(t){var e,r=t.headingSection;r&&(null===(e=a.current)||void 0===e||e.observe(r))})),null!==(e=n.current)&&void 0!==e&&e.h2.length&&n.current.h2.forEach((function(t){var e,r=t.headingSection;r&&(null===(e=i.current)||void 0===e||e.observe(r))}))}()}return function(){!function(){var t,e;null===(t=a.current)||void 0===t||t.disconnect(),null===(e=i.current)||void 0===e||e.disconnect()}()}}),[]),(0,d.useEffect)((function(){var t=r.current,e=function(t){var e,r,o=(null===(e=n.current)||void 0===e?void 0:e.h1.find((function(e){return e.anchor===t.target})))||(null===(r=n.current)||void 0===r?void 0:r.h2.find((function(e){return e.anchor===t.target})));console.log(o),o&&u(o)};return null===t||void 0===t||t.addEventListener("click",e),function(){return null===t||void 0===t?void 0:t.removeEventListener("click",e)}}),[c,u]),(0,d.useEffect)((function(){if(window.location.hash){var t,e,r=decodeURIComponent(window.location.hash.substring(1)),o=(null===(t=n.current)||void 0===t?void 0:t.h1.find((function(t){return t.heading.id===r})))||(null===(e=n.current)||void 0===e?void 0:e.h2.find((function(t){return t.heading.id===r})));o&&u(o)}}),[u]),(0,l.jsx)(y,{ref:r,children:e})}var y=(0,w.Z)("nav",{target:"e7dbvs30"})("display:none; ",{"@media (min-width: 1280px)":function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){(0,f.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},{position:"fixed",top:"12rem",left:"calc((100vw + 768px) / 2 + 2rem)",display:"block",paddingLeft:"0.75rem"})}," a{display:inline-block;text-decoration-line:none;;}.toc-item{&.toc-item-h1{a{transform-origin:left;--tw-text-opacity:1;color:rgb(161 161 170 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;:hover{--tw-text-opacity:1;color:rgb(76 168 102 / var(--tw-text-opacity));} &.active{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity:1;color:rgb(76 168 102 / var(--tw-text-opacity));;}&.active-backsite{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity:0.5;color:rgb(76 168 102 / var(--tw-text-opacity));;}}}&.toc-item-h2{a{margin-left:0.75rem;transform-origin:left;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(212 212 216 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;:hover{--tw-text-opacity:1;color:rgb(76 168 102 / var(--tw-text-opacity));} &.active{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity:1;color:rgb(76 168 102 / var(--tw-text-opacity));;}}}}"),k=!0;function j(t){var e=t.post,r=e.title,i=e.slug,d=e.description,f=e.publishedAt,h=(0,s.z)(e.body.code);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.PB,{title:"".concat(r," | ").concat(a.p),description:d,openGraph:{type:"article",url:"".concat(o.Xh,"post/").concat(i),title:r,description:d}}),(0,l.jsxs)("section",{className:"pt-16",children:[(0,l.jsxs)("header",{className:"mb-12",children:[(0,l.jsx)("h1",{className:"pb-2 border-b-2 border-leo-green-dark text-leo-green-dark",children:r}),(0,l.jsx)("time",{dateTime:f,className:"text-gray-400 font-extralight italic",children:c()(f).format("MMMM DD, YYYY (dddd)")})]}),(0,l.jsx)("section",{children:(0,l.jsx)(h,{components:{Count:v,a:u,nav:b}})})]})]})}},1705:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return r(6790)}])}},function(t){t.O(0,[432,774,888,179],(function(){return e=1705,t(t.s=e);var e}));var e=t.O();_N_E=e}]);