(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3df3519c"],{"0cb2":function(t,e,a){var r=a("7b0b"),n=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,c,l,u){var f=a+t.length,d=c.length,v=s;return void 0!==l&&(l=r(l),v=o),i.call(u,v,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(f);case"<":o=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>d){var u=n(s/10);return 0===u?r:u<=d?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}o=c[s-1]}return void 0===o?"":o}))}},1148:function(t,e,a){"use strict";var r=a("a691"),n=a("577e"),i=a("1d80");t.exports=function(t){var e=n(i(this)),a="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},"25f0":function(t,e,a){"use strict";var r=a("6eeb"),n=a("825a"),i=a("577e"),o=a("d039"),s=a("ad6d"),c="toString",l=RegExp.prototype,u=l[c],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(f||d)&&r(RegExp.prototype,c,(function(){var t=n(this),e=i(t.source),a=t.flags,r=i(void 0===a&&t instanceof RegExp&&!("flags"in l)?s.call(t):a);return"/"+e+"/"+r}),{unsafe:!0})},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,a){"use strict";var r=a("d784"),n=a("d039"),i=a("825a"),o=a("a691"),s=a("50c4"),c=a("577e"),l=a("1d80"),u=a("8aa5"),f=a("0cb2"),d=a("14c3"),v=a("b622"),p=v("replace"),m=Math.max,g=Math.min,h=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),y=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,a){var r=_?"$":"$0";return[function(t,a){var r=l(this),n=void 0==t?void 0:t[p];return void 0!==n?n.call(t,r,a):e.call(c(r),t,a)},function(t,n){var l=i(this),v=c(t);if("string"===typeof n&&-1===n.indexOf(r)&&-1===n.indexOf("$<")){var p=a(e,l,v,n);if(p.done)return p.value}var b="function"===typeof n;b||(n=c(n));var _=l.global;if(_){var y=l.unicode;l.lastIndex=0}var x=[];while(1){var C=d(l,v);if(null===C)break;if(x.push(C),!_)break;var w=c(C[0]);""===w&&(l.lastIndex=u(v,s(l.lastIndex),y))}for(var N="",k=0,I=0;I<x.length;I++){C=x[I];for(var E=c(C[0]),M=m(g(o(C.index),v.length),0),$=[],A=1;A<C.length;A++)$.push(h(C[A]));var F=C.groups;if(b){var T=[E].concat($,M,v);void 0!==F&&T.push(F);var S=c(n.apply(void 0,T))}else S=f(E,v,M,$,F,n);M>=k&&(N+=v.slice(k,M)+S,k=M+E.length)}return N+v.slice(k)}]}),!y||!b||_)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("577e"),i=a("5899"),o="["+i+"]",s=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t){return function(e){var a=n(r(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5e89":function(t,e,a){var r=a("861d"),n=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&n(t)===t}},7156:function(t,e,a){var r=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var i,o;return n&&"function"==typeof(i=e.constructor)&&i!==a&&r(o=i.prototype)&&o!==a.prototype&&n(t,o),t}},"8ba4":function(t,e,a){var r=a("23e7"),n=a("5e89");r({target:"Number",stat:!0},{isInteger:n})},a434:function(t,e,a){"use strict";var r=a("23e7"),n=a("23cb"),i=a("a691"),o=a("50c4"),s=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),f=u("splice"),d=Math.max,v=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var a,r,u,f,g,h,b=s(this),_=o(b.length),y=n(t,_),x=arguments.length;if(0===x?a=r=0:1===x?(a=0,r=_-y):(a=x-2,r=v(d(i(e),0),_-y)),_+a-r>p)throw TypeError(m);for(u=c(b,r),f=0;f<r;f++)g=y+f,g in b&&l(u,f,b[g]);if(u.length=r,a<r){for(f=y;f<_-r;f++)g=f+r,h=f+a,g in b?b[h]=b[g]:delete b[h];for(f=_;f>_-r+a;f--)delete b[f-1]}else if(a>r)for(f=_-r;f>y;f--)g=f+r-1,h=f+a-1,g in b?b[h]=b[g]:delete b[h];for(f=0;f<a;f++)b[f+y]=arguments[f+2];return b.length=_-r+a,u}})},a9e3:function(t,e,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("94ca"),o=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),u=a("d9b5"),f=a("c04e"),d=a("d039"),v=a("7c73"),p=a("241c").f,m=a("06cf").f,g=a("9bf2").f,h=a("58a8").trim,b="Number",_=n[b],y=_.prototype,x=c(v(y))==b,C=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,a,r,n,i,o,s,c,l=f(t,"number");if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+l}for(i=l.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>n)return NaN;return parseInt(i,r)}return+l};if(i(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var w,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(x?d((function(){y.valueOf.call(a)})):c(a)!=b)?l(new _(C(e)),a,N):C(e)},k=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)s(_,w=k[I])&&!s(N,w)&&g(N,w,m(_,w));N.prototype=y,y.constructor=N,o(n,b,N)}},b0c0:function(t,e,a){var r=a("83ab"),n=a("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&n(i,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("a691"),i=a("408a"),o=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=function(t,e,a){var r=-1,n=a;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=l(n/1e7)},v=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=l(r/e),r=r%e*1e7},p=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+o.call("0",7-r.length)+r}return a},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,r,s,c=i(this),l=n(t),m=[0,0,0,0,0,0],g="",h="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){d(m,0,a),r=l;while(r>=7)d(m,1e7,0),r-=7;d(m,u(10,r,1),0),r=e-1;while(r>=23)v(m,1<<23),r-=23;v(m,1<<r),d(m,1,1),v(m,2),h=p(m)}else d(m,0,a),d(m,1<<-e,0),h=p(m)+o.call("0",l);return l>0?(s=h.length,h=g+(s<=l?"0."+o.call("0",l-s)+h:h.slice(0,s-l)+"."+h.slice(s-l))):h=g+h,h}})},e311:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"pd-top"},[a("div",{staticClass:"mowtainer"},[a("div",{staticClass:"mowgrid grid-bot"},[a("div",{staticClass:"item pd-30"},[a("div",{staticClass:"space"},[a("div",{staticClass:"mowtit mb-2"},[a("span",[t._v("Giá vàng")]),a("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:t.getGold}},[a("v-icon",[t._v("mdi-cached")])],1)],1)]),a("v-data-table",{staticClass:"gold-price",attrs:{headers:t.headers.gold,items:t.gold,page:t.page.gold,"items-per-page":8,"hide-default-footer":"","mobile-breakpoint":0},on:{"update:page":function(e){return t.$set(t.page,"gold",e)}},scopedSlots:t._u([{key:"item.buy",fn:function(e){var r=e.item;return["Thế giới"==r.name?a("span",[t._v(" $"+t._s(t.formatPrice(r.buy))+" ")]):a("span",{staticClass:"mr-1"},[t._v(t._s(t.formatVNPrice(r.buy)))]),r.buy_change?a("span",{class:{"price-up":r.buy_change>0,"price-down":r.buy_change<0}},[t._v(" "+t._s(Math.abs(r.buy_change))+" ")]):t._e()]}},{key:"item.sell",fn:function(e){var r=e.item;return["Thế giới"==r.name?a("span",[t._v(" $"+t._s(t.formatPrice(r.sell))+" ")]):a("span",{staticClass:"mr-1"},[t._v(t._s(t.formatVNPrice(r.sell)))]),r.sell_change?a("span",{class:{"price-up":r.sell_change>0,"price-down":r.sell_change<0}},[t._v(" "+t._s(Math.abs(r.sell_change))+" ")]):t._e()]}}],null,!0)}),a("v-pagination",{staticClass:"pt-3",attrs:{length:Math.ceil(t.gold.length/8)},model:{value:t.page.gold,callback:function(e){t.$set(t.page,"gold",e)},expression:"page.gold"}})],1),a("div",{staticClass:"item pd-30"},[t._m(0),a("v-text-field",{attrs:{outlined:"",label:"Số lượng"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),a("v-autocomplete",{attrs:{label:"Mua/bán",outlined:"",items:t.types,"item-text":"title","item-value":"value"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),a("v-autocomplete",{attrs:{label:"Loại vàng",outlined:"",items:t.gold,"item-text":"name","return-object":""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),a("div",{staticClass:"justify-center flex mb-7"},[a("v-btn",{attrs:{icon:"",color:"primary"}},[a("v-icon",[t._v("mdi-arrow-down")])],1)],1),a("v-text-field",{attrs:{outlined:"",label:"Thành tiền",readonly:""},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}}),a("v-btn",{staticClass:"primary",attrs:{large:"",block:""},on:{click:t.convertHandle}},[t._v("Chuyển đổi")])],1)])])]),a("section",{staticClass:"news relative mt-8"},[a("div",{staticClass:"mowtainer"},[a("div",{staticClass:"space mb-6"},[t._m(1),a("v-btn",{attrs:{icon:"",color:"primary",to:"/tin-tuc/tin-tuc-thi-truong"}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1),t.market_post[0]?a("div",{staticClass:"mowgrid"},t._l(t.market_post.slice(0,3),(function(e,r){return a("div",{key:r,staticClass:"item"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:t.image(e.image),alt:e.title},on:{click:function(a){return t.toDetail(e.slug)}}})]),a("div",{staticClass:"content"},[a("h2",{on:{click:function(a){return t.toDetail(e.slug)}}},[t._v(t._s(e.title))]),a("div",{staticClass:"space"},[a("p",{staticClass:"author"},[a("i",{staticClass:"fas fa-user-edit"}),a("span",[t._v(t._s(e.author||"Admin"))])]),a("p",{staticClass:"time"},[a("i",{staticClass:"far fa-calendar-alt"}),a("span",[t._v(t._s(t.formatTime(e.created_at)))])])])])])})),0):a("div",{staticClass:"mowgrid"},t._l(6,(function(t){return a("div",{key:t,staticClass:"item loader"})})),0)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mowtit mb-6"},[a("span",[t._v("Quy đổi giá vàng")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mowtit"},[a("span",[t._v("Tin tức thị trường")])])}],i=(a("b0c0"),a("a9e3"),a("ac1f"),a("5319"),a("a434"),a("b680"),a("d3b7"),a("25f0"),a("8ba4"),a("bc3a"),a("c1df")),o={metaInfo:function(){var t={title:"Chợ OTC Việt Nam | Trang chủ"};return t},data:function(){return{gold:[],headers:{gold:[{text:"Tên",value:"name",sortable:!1},{text:"Giá Mua",value:"buy",sortable:!1},{text:"Giá Bán",value:"sell",sortable:!1}]},page:{gold:1},amount:1,from:"",result:"",type:"buy",types:[{title:"Mua",value:"buy"},{title:"Bán",value:"sell"}],market_post:[]}},mounted:function(){this.getGold(),this.getPost()},methods:{convertHandle:function(){if(this.from.name!=this.gold[0].name)"buy"!=this.type?this.result=this.formatVNPrice(this.amount*Number(this.from.sell)*1e3):this.result=this.formatVNPrice(this.amount*Number(this.from.buy)*1e3);else{var t=(Number(this.bank[0].buy.replace(",",""))+Number(this.bank[0].sell.replace(",","")))/2;this.result=this.formatPrice(this.amount*Number(this.from.buy)*t)}},getPost:function(){var t=this;this.CallAPI("get","categories/tin-tuc-thi-truong",{},(function(e){t.market_post=e.data}))},getGold:function(){var t=this;this.gold=[],this.CallAPI("get","rate/gold",{},(function(e){t.gold=e.data,t.from=e.data[0],t.CallAPI("get","rate/bank",{},(function(e){t.bank=e.data,t.bank.unshift(e.data[19]),t.bank.splice(-1),t.convertHandle()}))}))},formatPrice:function(t){if(!t)return 0;var e=(t/1).toFixed(2);return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatVNPrice:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},formatNumber:function(t){return Number.isInteger(t)?t:t.toFixed(2)},formatTime:function(t){var e=new Date(t);if(t)return i(e).format("MMMM D, YYYY")},toDetail:function(t){this.$router.push("/bai-viet/"+t)}}},s=o,c=a("2877"),l=Object(c["a"])(s,r,n,!1,null,null,null);e["default"]=l.exports}}]);