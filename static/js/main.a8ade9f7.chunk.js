(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{56:function(e,a,t){e.exports=t(83)},61:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),s=(t(61),t(50)),i=t(31),l=t.n(i),u=t(42),m=t(27),d=t(121),p=t(125),h=t(129);var f=function(e){return r.a.createElement(d.a,null,r.a.createElement(p.a,{avatar:r.a.createElement(h.a,{"aria-label":"recipe"},e.name.charAt(0).toUpperCase()),title:e.name,subheader:e.message}))},v=t(128),g=t(127),E=t(126),b=t(25),j=t.n(b);j.a.initializeApp({apiKey:"AIzaSyBjzI8fhZrmSqdjEZmeTduauwEFIHMwPRA",authDomain:"hay-chat-6498d.firebaseapp.com",databaseURL:"https://hay-chat-6498d.firebaseio.com",projectId:"hay-chat-6498d",storageBucket:"hay-chat-6498d.appspot.com",messagingSenderId:"1059161882975",appId:"1:1059161882975:web:0df1f2e6bdb9fb7f8db6ea",measurementId:"G-0K64NHWQ88"});j.a;var x=t(39);t(82);var w=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),d=(i[0],i[1]),p=Object(n.useState)(""),h=Object(m.a)(p,2),b=h[0],w=h[1],y=Object(n.useState)(""),O=Object(m.a)(y,2),S=O[0],k=O[1],I=Object(n.useState)([{name:"hayden",message:"here is the mssg "}]),B=Object(m.a)(I,2),C=B[0],z=B[1];Object(n.useEffect)((function(){D()}),[]);var A=function(e,a){console.log("here",e,a);var t=j.a.firestore();t.settings({timestampsInSnapshots:!0});t.collection("users").add({name:a,message:e})},H=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("click");case 2:return e.next=4,d(t);case 4:return e.next=6,c("");case 6:return e.next=8,console.log(t);case 8:return e.next=10,F();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){w(e.target.value)},W=function(){return""===S?r.a.createElement("div",null,r.a.createElement(g.a,{id:"name-input",size:"small",autoFocus:!0,onChange:U,variant:"outlined",value:b}),r.a.createElement(v.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:J},"Send")):r.a.createElement("div",null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5"},"User:",S))},D=function(){j.a.firestore().collection("users").get().then((function(e){var a=e.docs.map((function(e){return e.data()}));console.log(a),z(a)}))},F=function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return a=Object(s.a)(C),e.next=5,a.push({name:S,message:t});case 5:return e.next=7,console.log("before send",a);case 7:return e.next=9,A(t,S);case 9:return e.next=11,z(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){k(b),w(""),console.log(b)};return r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h3"},"Hay Chat"),r.a.createElement(W,null),r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(E.a,{item:!0,xs:3}),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(E.a,{item:!0,xs:12},C.map((function(e){return r.a.createElement("div",{key:(new Date).getTime()+e.id+e.message},r.a.createElement(f,{name:e.name,message:e.message}))}))))),r.a.createElement(E.a,{item:!0,xs:3}))),r.a.createElement(g.a,{id:"mssg-input",size:"small",onChange:function(e){c(e.target.value)},variant:"outlined",value:t}),r.a.createElement(v.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:H},"Send"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.a8ade9f7.chunk.js.map