(this.webpackJsonploop_machine=this.webpackJsonploop_machine||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),u=n(9),a=n.n(u),c=(n(14),n(4)),r=n(2),i=n(7),l=(n(15),n(8),n(0)),d=[{keyCode:81,key:"Q",id:"Future Beats",status:!1,url:"sounds/future_beats.mp3"},{keyCode:87,key:"W",id:"Electric Guitar",status:!1,url:"sounds/electric_guitar_120.mp3"},{keyCode:69,key:"E",id:"Groove",status:!1,url:"sounds/groove_120.mp3"},{keyCode:65,key:"A",id:"Heavy Funk",status:!1,url:"sounds/heavyfunk_120.mp3"},{keyCode:83,key:"S",id:"Maze Politics",status:!1,url:"sounds/mazepolitics_120.mp3"},{keyCode:68,key:"D",id:"Pass Groove",status:!1,url:"sounds/passgroove.mp3"},{keyCode:90,key:"Z",id:"Silent Star",status:!1,url:"sounds/silentstar_120.mp3"},{keyCode:88,key:"X",id:"Stompy Slosh",status:!1,url:"sounds/stompyslosh_120.mp3"},{keyCode:67,key:"C",id:"Stutter Breakbeats",status:!1,url:"sounds/stutter_breakbeats.mp3"}],m=function(e){var t=e.play,n=e.sound,o=n.key,u=n.url,a=n.keyCode,c=n.id,r=n.status,i=function(e){e.keyCode===a&&t(o,c,r)};return s.a.useEffect((function(){document.addEventListener("keydown",i)}),[o,c,r]),Object(l.jsxs)("button",{id:a,className:"instrument",onClick:function(){t(o,c,r)},children:[Object(l.jsx)("audio",{loop:!0,className:"clip",id:o,src:u}),o]})},p=function(e){var t=e.power,n=e.play,o=e.sounds;return Object(l.jsx)("div",{className:"keyboard",children:t?d.map((function(e){return Object(l.jsx)(m,{play:n,sound:e,sounds:o})})):d.map((function(e){return Object(l.jsx)(m,{play:n,sound:Object(i.a)(Object(i.a)({},e),{},{url:"#"})})}))})},f=function(e){var t=e.name,n=e.volume,o=e.power,s=e.stopLoops,u=e.handleVolumeChange;return Object(l.jsxs)("div",{className:"control",children:[Object(l.jsxs)("button",{onClick:s,children:["Turn the power ",o?"OFF":"ON"]}),Object(l.jsxs)("h2",{children:["Volume: %",Math.round(100*n)]}),Object(l.jsx)("input",{type:"range",max:"1",min:"0",step:"0.01",value:n,onChange:u}),Object(l.jsx)("h2",{children:t})]})},j=function(){return Object(l.jsx)("button",{type:"button",className:"btn btn-danger",children:" START RECORDING"})};var y=function(){var e=s.a.useState(!0),t=Object(r.a)(e,2),n=t[0],o=t[1],u=s.a.useState(d),a=Object(r.a)(u,2),i=a[0],m=a[1],y=s.a.useState(""),b=Object(r.a)(y,2),k=b[0],h=b[1],O=s.a.useState(1),v=Object(r.a)(O,2),g=v[0],C=v[1],x=s.a.useState([]),E=Object(r.a)(x,2),S=E[0],_=E[1],w=s.a.useState([]),I=Object(r.a)(w,2),T=I[0],F=I[1],N=function(e){setTimeout((function(){e.parentElement.style.backgroundColor="#ffffff",e.parentElement.style.color="#000000"}),300)},B=function(e,t,n){var o=d.findIndex((function(t){return t.key===e})),s=d[o];s[t]=n,-1===o?console.log("no match"):m([].concat(Object(c.a)(i.slice(0,o)),[s],Object(c.a)(i.slice(o+1))))};return Object(l.jsxs)("div",{id:"loop_machine",children:[void i.map((function(e){return document.getElementById(e.key)})).forEach((function(e){e&&(e.volume=g)})),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p,{power:n,play:function(e,t,o){if(n){var s=document.getElementById(e);if(o)B(e,"status",!o),N(s),s.pause(),console.log(s.currentTime);else if(h(t),function(e){n&&(e.parentElement.style.backgroundColor="#000000",e.parentElement.style.color="#ffffff")}(s),B(e,"status",!o),s.currentTime=0,_((function(e){return[].concat(Object(c.a)(e),[s])})),console.log(S),0===S.length)s.play();else{var u=S[0].currentTime,a=setInterval((function(){s.play()}),8e3-1e3*u);F((function(e){return[].concat(Object(c.a)(e),[a])}))}}},sounds:i}),Object(l.jsx)(f,{stopLoops:function(){o(!n),i.map((function(e){return document.getElementById(e.key)})).forEach((function(e){N(e)})),i.map((function(e){return B(e.key,"status",!1)})),_([]),T.map((function(e){return clearInterval(e)})),F([])},volume:g,power:n,handleVolumeChange:function(e){C(e.target.value)},name:k}),Object(l.jsx)(j,{})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,u=t.getLCP,a=t.getTTFB;n(e),o(e),s(e),u(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.37d9fee9.chunk.js.map