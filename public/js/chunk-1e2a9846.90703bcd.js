(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e2a9846"],{"0cb2":function(t,e,n){var i=n("7b0b"),r=Math.floor,a="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,l,o,u){var v=n+t.length,d=l.length,f=c;return void 0!==o&&(o=i(o),f=s),a.call(u,f,(function(i,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(v);case"<":s=o[a.slice(1,-1)];break;default:var c=+a;if(0===c)return i;if(c>d){var u=r(c/10);return 0===u?i:u<=d?void 0===l[u-1]?a.charAt(1):l[u-1]+a.charAt(1):i}s=l[c-1]}return void 0===s?"":s}))}},1148:function(t,e,n){"use strict";var i=n("a691"),r=n("577e"),a=n("1d80");t.exports=function(t){var e=r(a(this)),n="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(n+=e);return n}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),a=n("577e"),s=n("d039"),c=n("ad6d"),l="toString",o=RegExp.prototype,u=o[l],v=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=l;(v||d)&&i(RegExp.prototype,l,(function(){var t=r(this),e=a(t.source),n=t.flags,i=a(void 0===n&&t instanceof RegExp&&!("flags"in o)?c.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"408a":function(t,e,n){var i=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,n){"use strict";var i=n("d784"),r=n("d039"),a=n("825a"),s=n("a691"),c=n("50c4"),l=n("577e"),o=n("1d80"),u=n("8aa5"),v=n("0cb2"),d=n("14c3"),f=n("b622"),p=f("replace"),_=Math.max,h=Math.min,m=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),g=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),y=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,n){var i=g?"$":"$0";return[function(t,n){var i=o(this),r=void 0==t?void 0:t[p];return void 0!==r?r.call(t,i,n):e.call(l(i),t,n)},function(t,r){var o=a(this),f=l(t);if("string"===typeof r&&-1===r.indexOf(i)&&-1===r.indexOf("$<")){var p=n(e,o,f,r);if(p.done)return p.value}var b="function"===typeof r;b||(r=l(r));var g=o.global;if(g){var y=o.unicode;o.lastIndex=0}var x=[];while(1){var C=d(o,f);if(null===C)break;if(x.push(C),!g)break;var N=l(C[0]);""===N&&(o.lastIndex=u(f,c(o.lastIndex),y))}for(var E="",I=0,w=0;w<x.length;w++){C=x[w];for(var T=l(C[0]),P=_(h(s(C.index),f.length),0),S=[],$=1;$<C.length;$++)S.push(m(C[$]));var D=C.groups;if(b){var F=[T].concat(S,P,f);void 0!==D&&F.push(D);var A=l(r.apply(void 0,F))}else A=v(T,f,P,S,D,r);P>=I&&(E+=f.slice(I,P)+A,I=P+T.length)}return E+f.slice(I)}]}),!y||!b||g)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("577e"),a=n("5899"),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),o=function(t){return function(e){var n=r(i(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5e89":function(t,e,n){var i=n("861d"),r=Math.floor;t.exports=function(t){return!i(t)&&isFinite(t)&&r(t)===t}},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,s;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},"8ba4":function(t,e,n){var i=n("23e7"),r=n("5e89");i({target:"Number",stat:!0},{isInteger:r})},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),s=n("6eeb"),c=n("5135"),l=n("c6b6"),o=n("7156"),u=n("d9b5"),v=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,_=n("06cf").f,h=n("9bf2").f,m=n("58a8").trim,b="Number",g=r[b],y=g.prototype,x=l(f(y))==b,C=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,i,r,a,s,c,l,o=v(t,"number");if("string"==typeof o&&o.length>2)if(o=m(o),e=o.charCodeAt(0),43===e||45===e){if(n=o.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+o}for(a=o.slice(2),s=a.length,c=0;c<s;c++)if(l=a.charCodeAt(c),l<48||l>r)return NaN;return parseInt(a,i)}return+o};if(a(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(x?d((function(){y.valueOf.call(n)})):l(n)!=b)?o(new g(C(e)),n,E):C(e)},I=i?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;I.length>w;w++)c(g,N=I[w])&&!c(E,N)&&h(E,N,_(g,N));E.prototype=y,y.constructor=E,s(r,b,E)}},b680:function(t,e,n){"use strict";var i=n("23e7"),r=n("a691"),a=n("408a"),s=n("1148"),c=n("d039"),l=1..toFixed,o=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},v=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=function(t,e,n){var i=-1,r=n;while(++i<6)r+=e*t[i],t[i]=r%1e7,r=o(r/1e7)},f=function(t,e){var n=6,i=0;while(--n>=0)i+=t[n],t[n]=o(i/e),i=i%e*1e7},p=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var i=String(t[e]);n=""===n?i:n+s.call("0",7-i.length)+i}return n},_=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){l.call({})}));i({target:"Number",proto:!0,forced:_},{toFixed:function(t){var e,n,i,c,l=a(this),o=r(t),_=[0,0,0,0,0,0],h="",m="0";if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(h="-",l=-l),l>1e-21)if(e=v(l*u(2,69,1))-69,n=e<0?l*u(2,-e,1):l/u(2,e,1),n*=4503599627370496,e=52-e,e>0){d(_,0,n),i=o;while(i>=7)d(_,1e7,0),i-=7;d(_,u(10,i,1),0),i=e-1;while(i>=23)f(_,1<<23),i-=23;f(_,1<<i),d(_,1,1),f(_,2),m=p(_)}else d(_,0,n),d(_,1<<-e,0),m=p(_)+s.call("0",o);return o>0?(c=m.length,m=h+(c<=o?"0."+s.call("0",o-c)+m:m.slice(0,c-o)+"."+m.slice(c-o))):m=h+m,m}})},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[t._m(0),n("section",[n("div",{staticClass:"mowtainer"},[n("div",{staticClass:"mowgrid"},[n("div",{staticClass:"content"},[n("div",{staticClass:"item exchange"},[n("div",{staticClass:"flex"},t._l(t.tabs,(function(e,i){return n("div",{key:i,class:{tab:!0,active:t.tab==i},on:{click:function(e){t.tab=i}}},[t._v(" "+t._s(e)+" ")])})),0),0==t.tab?n("div",{staticClass:"pd-30"},[n("label",[t._v("Tôi muốn trả")]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_vnd,expression:"buy_vnd"}],attrs:{type:"text"},domProps:{value:t.buy_vnd},on:{input:[function(e){e.target.composing||(t.buy_vnd=e.target.value)},t.buyVND],focus:t.unFormatBuy,blur:function(e){t.buy_vnd=t.formatPrice(t.buy_vnd)}}}),t._m(1)]),n("label",[t._v("Tôi sẽ nhận được≈")]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_usdt,expression:"buy_usdt"}],attrs:{type:"text"},domProps:{value:t.buy_usdt},on:{input:[function(e){e.target.composing||(t.buy_usdt=e.target.value)},t.buyUSDT]}}),t._m(2)]),n("p",[t._v("Giá ước tính: 1 USDT ≈ "+t._s(t.formatPrice(t.buy_price))+" VND")]),n("div",{staticClass:"detail-price"},[n("div",{staticClass:"item pd-30"},[n("img",{attrs:{src:"/img/logo.png",alt:""}}),n("h3",[t._v("Chợ OTC")]),n("h4",[t._v(" Giá mua: "),n("span",[t._v(t._s(t.formatPrice(t.buy_price))+" VND")])])]),n("div",{staticClass:"item pd-30"},[n("img",{attrs:{src:"/img/binance.png",alt:""}}),n("h3",[t._v("P2P Binance")]),n("h4",[t._v(" Giá mua: "),n("span",[t._v(t._s(t.formatPrice(t.buy_price+10))+" VND")])])])]),n("a",{staticClass:"btn-all",attrs:{href:"https://t.me/chootcvn",target:"_blank"}},[t._v("Mua miễn phí")])]):n("div",{staticClass:"pd-30"},[n("label",[t._v("Tôi muốn bán")]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sell_usdt,expression:"sell_usdt"}],attrs:{type:"text"},domProps:{value:t.sell_usdt},on:{input:[function(e){e.target.composing||(t.sell_usdt=e.target.value)},t.sellUSDT]}}),t._m(3)]),n("label",[t._v("Tôi sẽ nhận được≈")]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sell_vnd,expression:"sell_vnd"}],attrs:{type:"text"},domProps:{value:t.sell_vnd},on:{input:[function(e){e.target.composing||(t.sell_vnd=e.target.value)},t.sellVND],focus:t.unFormatSell,blur:function(e){t.sell_vnd=t.formatPrice(t.sell_vnd)}}}),t._m(4)]),n("p",[t._v("Giá ước tính: 1 USDT ≈ "+t._s(t.formatPrice(t.sell_price))+" VND")]),n("div",{staticClass:"detail-price"},[n("div",{staticClass:"item pd-30"},[n("img",{attrs:{src:"/img/logo.png",alt:""}}),n("h3",[t._v("Chợ OTC")]),n("h4",{staticClass:"sell-price"},[t._v(" Giá bán: "),n("span",[t._v(t._s(t.formatPrice(t.sell_price))+" VND")])])]),n("div",{staticClass:"item pd-30"},[n("img",{attrs:{src:"/img/binance.png",alt:""}}),n("h3",[t._v("P2P Binance")]),n("h4",{staticClass:"sell-price"},[t._v(" Giá bán: "),n("span",[t._v(t._s(t.formatPrice(t.sell_price-10))+" VND")])])])]),n("a",{staticClass:"btn-all btn-sell",attrs:{href:"https://t.me/chootcvn",target:"_blank"}},[t._v("Bán miễn phí")])])])]),n("div",{staticClass:"price-box"},[n("h2",[t._v("Thị trường Crypto")]),t._m(5),n("div",{staticClass:"list"},t._l(t.coin_list,(function(e){return n("div",{key:e.id,staticClass:"space"},[n("div",[n("img",{attrs:{src:e.image,alt:""}}),n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"symbol"},[t._v(t._s(e.symbol))])]),n("span",[t._v("$"+t._s(e.current_price))])])})),0)])]),t._m(6)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"note"},[n("a",{attrs:{href:"https://t.me/chootcvn",target:"_blank"}},[t._v(" Tham gia nhóm @chootcvn ngay để giao dịch OTC uy tín và nhanh chóng! ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/img/exchange/vnd.png",alt:""}}),n("span",[t._v("VND")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/img/exchange/usdt.png",alt:""}}),n("span",[t._v("USDT")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/img/exchange/usdt.png",alt:""}}),n("span",[t._v("USDT")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit"},[n("img",{attrs:{src:"/img/exchange/vnd.png",alt:""}}),n("span",[t._v("VND")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("span",[t._v("Tên")]),n("span",[t._v("Giá")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item pd-30 currencies"},[n("h2",[t._v("Tỷ giá ngoại tệ")]),n("iframe",{staticStyle:{border:"none",width:"100%",height:"600px"},attrs:{src:"https://tygiado.com/nhung-ngoai-te/tong-hop"}})])}],a=(n("a9e3"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("b680"),n("8ba4"),n("bc3a"),{data:function(){return{coin_list:[],currencies:[],sell_price:"",buy_price:"",tabs:["Mua","Bán"],tab:0,buy_usdt:"",buy_vnd:1e6,sell_usdt:100,sell_vnd:"",ok:""}},mounted:function(){this.getList(),this.getPrice()},methods:{getList:function(){var t=this;this.CallAPI("get","coins",{},(function(e){t.coin_list=e.data}))},getPrice:function(){var t=this;this.CallAPI("get","p2p/buy",{},(function(e){t.buy_price=Number(e.data.data[0].adv.price)-10,t.buyVND(),t.buy_vnd=t.formatPrice(t.buy_vnd)})),this.CallAPI("get","p2p/sell",{},(function(e){t.sell_price=Number(e.data.data[0].adv.price)+10,t.sellUSDT()}))},buyUSDT:function(){this.buy_vnd=this.formatPrice(this.buy_usdt*this.buy_price)},buyVND:function(){this.buy_usdt=this.formatNumber(this.buy_vnd/this.buy_price)},sellUSDT:function(){this.sell_vnd=this.formatPrice(this.sell_usdt*this.sell_price)},sellVND:function(){this.sell_usdt=this.formatNumber(this.sell_vnd/this.sell_price)},unFormatBuy:function(){this.buy_vnd=this.buy_vnd.replaceAll(",","")},unFormatSell:function(){this.sell_vnd=this.sell_vnd.replaceAll(",","")},formatPrice:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},formatNumber:function(t){return Number.isInteger(t)?t:t.toFixed(2)}}}),s=a,c=n("2877"),l=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=l.exports}}]);