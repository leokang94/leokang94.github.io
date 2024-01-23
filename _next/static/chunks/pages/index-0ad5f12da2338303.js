(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",l="year",h="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:a,D:h,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",M={};M[x]=g;var y=function(t){return t instanceof _},w=function t(e,n,r){var i;if(!e)return x;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;M[a]=e,i=a}return!r&&i&&(x=i),i||!r&&x},D=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},S=p;S.l=w,S.i=y,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function g(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return D(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<D(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!S.u(e)||e,f=S.p(t),d=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(f){case l:return r?d(1,0):d(31,11);case c:return r?d(1,g):d(0,g+1);case o:var x=this.$locale().weekStart||0,M=($<x?$+7:$)-x;return d(r?v-M:v+(6-M),g);case a:case h:return m(p+"Hours",0);case u:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,o=S.p(t),f="set"+(this.$u?"UTC":""),d=(n={},n[a]=f+"Date",n[h]=f+"Date",n[c]=f+"Month",n[l]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],m=o===a?this.$D+(e-this.$W):e;if(o===c||o===l){var $=this.clone().set(h,1);$.$d[d](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,f){var h,d=this;r=Number(r);var m=S.p(f),$=function(t){var e=D(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if(m===c)return this.set(c,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===a)return $(1);if(m===o)return $(7);var g=(h={},h[s]=e,h[u]=n,h[i]=t,h)[m]||1,v=this.$d.getTime()+r*g;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:f(n.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,o,2),ddd:f(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,d){var m,$=S.p(h),g=D(r),v=(g.utcOffset()-this.utcOffset())*e,p=this-g,x=S.m(this,g);return x=(m={},m[l]=x/12,m[c]=x,m[f]=x/3,m[o]=(p-v)/6048e5,m[a]=(p-v)/864e5,m[u]=p/n,m[s]=p/e,m[i]=p/t,m)[$]||p,d?x:S.a(x)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return M[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),j=_.prototype;return D.prototype=j,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",l],["$D",h]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,_,D),t.$i=!0),D},D.locale=w,D.isDayjs=y,D.unix=function(t){return D(1e3*t)},D.en=M[x],D.Ls=M,D.p={},D}()},5006:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return s},default:function(){return u}});var r=n(3231),i=n(5893),s=!0;function u(t){var e=t.posts;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.NZ,{}),(0,i.jsx)(r.p_,{posts:e})]})}},2835:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5675),i=n.n(r),s=n(7294),u=n(6265),a=n(5893),o=["Leo","Taehun Kang","\uac15\ud0dc\ud6c8"],c=["\ubc18\uac00\uc6cc\uc694,","Hi, I'm"],f=["\uc785\ub2c8\ub2e4!","!"];function l(){var t=(0,s.useState)(0),e=t[0],n=t[1],r=(0,s.useState)(0),l=r[0],h=r[1];return(0,s.useEffect)((function(){var t=setInterval((function(){return n((function(t){return t+1}))}),3e3),e=setInterval((function(){return h((function(t){return t+1}))}),3e3);return function(){clearInterval(t),clearInterval(e)}}),[]),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-6 w-full p-4",children:[(0,a.jsx)("div",{className:"h-[6rem] w-[6rem] relative flex-shrink-0 transition-[width, height] ease-out-back duration-300 sm:h-[8rem] sm:w-[8rem] md:h-[10rem] md:w-[10rem]",children:(0,a.jsx)(i(),{className:"rounded-full",src:"/profile.webp",alt:"me",layout:"fill",objectFit:"cover",priority:!0})}),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-1 w-full",children:[(0,a.jsxs)("div",{className:"flex gap-[0.4rem] text-xl mb-1 transition-[font-size] ease-out-back duration-300 sm:text-2xl md:text-3xl md:mb-3",children:[(0,a.jsx)(u.Z,{springConfig:u.u.gentle,direction:"down",inline:!0,children:c[l%c.length]}),(0,a.jsx)("strong",{className:"text-leo-green-dark",children:(0,a.jsx)(u.Z,{springConfig:u.u.gentle,direction:"down",inline:!0,children:o[e%o.length]})}),(0,a.jsx)(u.Z,{springConfig:u.u.gentle,direction:"down",inline:!0,children:f[l%f.length]})]}),(0,a.jsxs)("p",{className:"text-gray-500 font-light text-center text-sm sm:text-base",children:["\uc815\ud655\ud788 \uc544\ub294\uac83\uc744 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud569\ub2c8\ub2e4.",(0,a.jsx)("br",{}),"\ub2e4\uc591\ud55c \uae30\uc220\uc5d0 \uad00\uc2ec\uc774 \uc788\uc9c0\ub9cc, \ud604\uc7ac\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc8fc\ub825\uc73c\ub85c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})]})]})}},3231:function(t,e,n){"use strict";n.d(e,{p_:function(){return f},NZ:function(){return r.Z}});n(6288),n(2594),n(6963);var r=n(2835),i=n(1664),s=n.n(i),u=n(7484),a=n.n(u),o=n(5893);function c(t){var e=t.post,n=e.title,r=e.description,i=e.publishedAt;return(0,o.jsxs)("div",{className:"p-3 hover:text-leo-green-dark transition-[color] ease-out-back duration-300",children:[(0,o.jsx)("div",{className:"font-bold text-2xl mb-2",children:n}),(0,o.jsx)("p",{className:"text-gray-500",children:r}),(0,o.jsx)("time",{dateTime:i,className:"text-sm font-extralight text-gray-400 italic",children:a()(i).format("MMMM DD, YYYY (dddd)")})]})}function f(t){var e=t.posts;return(0,o.jsx)("div",{className:"flex flex-col",children:e.map((function(t){return(0,o.jsx)(s(),{href:{pathname:"/post/[slug]",query:{slug:t.slug}},children:(0,o.jsx)("a",{className:"w-full",children:(0,o.jsx)(c,{post:t})})},t.slug)}))})}},8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5006)}])}},function(t){t.O(0,[482,774,888,179],(function(){return e=8312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);