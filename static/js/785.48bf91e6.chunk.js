"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{353:function(r,t,e){e.d(t,{Mc:function(){return o},Pv:function(){return i},h6:function(){return f},iZ:function(){return p},nw:function(){return s}});var n=e(861),a=e(757),u=e.n(a),c=e(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d256ac876828e9bd801557ca6a813021"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("trending/movie/day");case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},785:function(r,t,e){e.r(t);var n=e(439),a=e(353),u=e(791),c=e(689),s=e(184);t.default=function(){var r=(0,c.UO)().moviesId,t=(0,u.useState)([]),e=(0,n.Z)(t,2),i=e[0],o=e[1],p=(0,u.useState)(!0),f=(0,n.Z)(p,2),h=f[0],v=f[1],d=(0,u.useState)(null),l=(0,n.Z)(d,2),m=l[0],x=l[1];return(0,u.useEffect)((function(){v(!0),x(null),(0,a.h6)(r).then((function(r){var t=r.results;o(t),v(!1)})).catch((function(r){var t=r.message;x(t),v(!1)}))}),[r]),(0,s.jsx)(s.Fragment,{children:h?(0,s.jsx)("p",{children:"Loading..."}):m?(0,s.jsxs)("p",{children:["Error: ",m]}):i.length?(0,s.jsx)("ul",{children:i.map((function(r){var t=r.content,e=r.author,n=r.id;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e]}),(0,s.jsx)("p",{children:t})]},n)}))}):(0,s.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=785.48bf91e6.chunk.js.map