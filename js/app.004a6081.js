(function(t){function e(e){for(var c,u,o=e[0],i=e[1],l=e[2],d=0,b=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(c=!1)}c&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},r={app:0},a=[];function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["d"])("div",{class:"header"},[Object(c["d"])("div",{class:"container"},[Object(c["d"])("h1",{class:"title"},"เราคบกันมาแล้ว"),Object(c["d"])("h2",{class:"subtitle"},"เพราะความรักคือการดูแลกัน ไม่ใช่การจำวันครบรอบ")])],-1),a={class:"container"},u={class:"datetime"},o={class:"date"},i=Object(c["d"])("span",{class:"unit"},"ปี",-1),l=Object(c["d"])("span",{class:"unit"},"เดือน",-1),s=Object(c["d"])("span",{class:"unit"},"วัน",-1),d={class:"time"},b=Object(c["d"])("span",{class:"unit"},"ชั่วโมง",-1),f=Object(c["d"])("span",{class:"unit"},"นาที",-1),O=Object(c["d"])("span",{class:"unit"},"วินาที",-1);function j(t,e,n,j,p,h){return Object(c["f"])(),Object(c["b"])("div",null,[r,Object(c["d"])("div",a,[Object(c["d"])("div",u,[Object(c["d"])("div",o,[Object(c["d"])("ul",null,[Object(c["d"])("li",null,[Object(c["c"])(Object(c["h"])(j.state.year)+" ",1),i]),Object(c["d"])("li",null,[Object(c["c"])(Object(c["h"])(j.state.month)+" ",1),l]),Object(c["d"])("li",null,[Object(c["c"])(Object(c["h"])(j.state.day)+" ",1),s])])]),Object(c["d"])("div",d,[Object(c["d"])("ul",null,[Object(c["d"])("li",null,[Object(c["c"])(Object(c["h"])(j.state.hour)+" ",1),b]),Object(c["d"])("li",null,[Object(c["c"])(Object(c["h"])(j.state.minute)+" ",1),f]),Object(c["d"])("li",null,[Object(c["c"])(Object(c["h"])(j.state.second)+" ",1),O])])])])])])}var p={setup:function(){var t=n("5a0c"),e=Object(c["g"])({year:0,month:0,day:0,hour:0,minute:0,second:0}),r=function(){var c=n("f906");t.extend(c);var r=t("2021-01-30");e.year=t().diff(r,"year"),e.month=t().diff(r,"month")%12,e.day=t().diff(r,"day")%30},a=function n(){e.hour=t().format("H"),e.minute=t().format("m"),e.second=t().format("s"),setTimeout((function(){return n()}),1e3)};return Object(c["e"])((function(){r(),a()})),{state:e}}};n("9e37");p.render=j;var h=p;Object(c["a"])(h).mount("#app")},"9bef":function(t,e,n){},"9e37":function(t,e,n){"use strict";n("9bef")}});
//# sourceMappingURL=app.004a6081.js.map