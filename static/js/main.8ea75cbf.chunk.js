(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{56:function(e,t,a){e.exports=a(83)},61:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(61),a(50)),i=a(31),l=a.n(i),u=a(42),m=a(27),d=a(121),p=a(125),f=a(129);var h=function(e){return r.a.createElement(d.a,null,r.a.createElement(p.a,{avatar:r.a.createElement(f.a,{"aria-label":"recipe"},e.name.charAt(0).toUpperCase()),title:e.name,subheader:e.message}))},v=a(128),g=a(127),E=a(126),b=a(25),j=a.n(b);j.a.initializeApp({apiKey:"AIzaSyBjzI8fhZrmSqdjEZmeTduauwEFIHMwPRA",authDomain:"hay-chat-6498d.firebaseapp.com",databaseURL:"https://hay-chat-6498d.firebaseio.com",projectId:"hay-chat-6498d",storageBucket:"hay-chat-6498d.appspot.com",messagingSenderId:"1059161882975",appId:"1:1059161882975:web:0df1f2e6bdb9fb7f8db6ea",measurementId:"G-0K64NHWQ88"});j.a;var x=a(39);a(82);var w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),d=(i[0],i[1]),p=Object(n.useState)(""),f=Object(m.a)(p,2),b=f[0],w=f[1],O=Object(n.useState)(""),y=Object(m.a)(O,2),S=y[0],k=y[1],I=Object(n.useState)([{name:"hayden",message:"here is the mssg "}]),B=Object(m.a)(I,2),z=B[0],A=B[1],C=function(e,t){console.log("here",e,t);var a=j.a.firestore();a.settings({timestampsInSnapshots:!0});a.collection("users").add({name:t,message:e})},D=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("click");case 2:return e.next=4,d(a);case 4:return e.next=6,c("");case 6:return e.next=8,console.log(a);case 8:return e.next=10,W();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){U()}),[]);var T=function(e){w(e.target.value)},N=function(){return""===S?r.a.createElement("div",null,r.a.createElement(g.a,{id:"name-input",size:"small",autoFocus:!0,placeholder:"Enter Your Name",onChange:T,variant:"outlined",value:b}),r.a.createElement(v.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:F},"Send")):r.a.createElement("div",null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5"},"User:",S))},U=function(){j.a.firestore().collection("users").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));console.log(t),A(t)}))};Object(n.useEffect)((function(){var e=setInterval((function(){U()}),5e3);return function(){return clearInterval(e)}}),[]);var W=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return t=Object(s.a)(z),e.next=5,t.push({name:S,message:a});case 5:return e.next=7,console.log("before send",t);case 7:return e.next=9,C(a,S);case 9:return e.next=11,A(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){k(b),w(""),console.log(b)};return r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h3"},"Group To-Do"),r.a.createElement(N,null),r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(E.a,{item:!0,xs:1,sm:3}),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(E.a,{item:!0,xs:12},z.map((function(e){return r.a.createElement("div",{key:(new Date).getTime()+e.id+e.message},r.a.createElement(h,{name:e.name,message:e.message}))}))))),r.a.createElement(E.a,{item:!0,xs:1,sm:3}))),r.a.createElement(g.a,{id:"mssg-input",size:"small",onChange:function(e){c(e.target.value)},variant:"outlined",value:a,placeholder:"Enter To DO"}),r.a.createElement(v.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:D},"Send"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.8ea75cbf.chunk.js.map