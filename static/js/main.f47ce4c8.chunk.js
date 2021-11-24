(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c(25),n=c.n(a),s=(c(32),c(2)),i=c(4),l=c(1),o=function(){return Object(l.jsxs)("div",{className:"m-2 p-4 rounded-xl w-full flex flex-col\r text-center justify-center items-center\r text-white dark:text-black\r bg-gray-800 dark:bg-gray-100 shadow-inner shadow-lg;",children:[Object(l.jsx)("img",{src:"/wardex/logo.png",alt:"WarDex",className:"text-2xl font-bold sm:w-1/4",height:200,width:400}),Object(l.jsx)("span",{className:"",children:"A collection of the finest memebers of the Wargroove Community"})]})},d=c(26),j=c.n(d);function x(e){return(e=e.slice(0,4)).map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"/wardex/sprites/"+e.toLowerCase().trim()+".png",alt:e})},e)}))}var b=function(e){var t=e.commanderList;return Object(l.jsx)("div",{className:"flex flex-row flex-grow justify-center",children:x(t)})},m=c(5),h=c(27);function u(e){return e?function(){var e=~~(256*(1+Math.random())/2),t=~~(256*(1+Math.random())/2),c=~~(256*(1+Math.random())/2);return["rgb(".concat(e,",").concat(t,", ").concat(c,", 1)"),"rgb(".concat(e,",").concat(t,", ").concat(c,", 0.4)")]}():function(){var e=~~(256*Math.random()/2),t=~~(256*Math.random()/2),c=~~(256*Math.random()/2);return["rgb(".concat(e,",").concat(t,", ").concat(c,", 1)"),"rgb(".concat(e,",").concat(t,", ").concat(c,", 0.4)")]}()}m.c.register(m.l,m.i,m.g,m.e,m.n);var f=function(e){var t=e.playerData,c=void 0===t?{}:t,r=e.darkTheme,a=function(e,t){var c=u(t),r=Object(i.a)(c,2),a=r[0],n=r[1];return{labels:["Opening","Formation","Unit Comp","Economy","Speed","Tactics"],datasets:[{label:"Rating",data:[e.opening,e.formation,e.unit,e.economy,e.speed,e.tactics],backgroundColor:n,borderColor:a,borderWidth:2}]}}(c,r),n=r?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.6)",s={layout:{padding:{left:2}},scales:{r:{angleLines:{color:n},grid:{color:n},min:1,max:10,ticks:{display:!1,stepSize:2},pointLabels:{font:function(e){var t=e.chart.width;return{size:Math.round(t/20)}},color:n}}}};return Object(l.jsx)(h.a,{data:a,options:s})},O=function(e){var t=e.playerObj,c=e.darkTheme,r=Object(l.jsx)(l.Fragment,{});return 0!==Object.keys(t).length&&(r=Object(l.jsx)(b,{commanderList:t.commanders.split(",")})),Object(l.jsxs)("div",{className:"player_cards mx-0.5 my-2 max-w-full",children:[Object(l.jsxs)("div",{className:"player_title break-all",children:[" ",t.name," "]}),Object(l.jsxs)("div",{className:"info-container flex flex-col sm:flex-row items-center justify-center max-w-full",children:[Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center p-1 w-full xl:lg:md:w-7/12",children:[Object(l.jsxs)("div",{className:"my-2",children:[" ",r," "]}),Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center dark:text-white",children:[Object(l.jsx)("span",{children:"Strengths:"}),Object(l.jsxs)("div",{className:"pill bg-blue-600 dark:bg-blue-600 text-white dark:text-white shadow-lg",children:[" ",t.strengths," "]})]}),Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center dark:text-white",children:[Object(l.jsx)("span",{children:"Weaknesses:"}),Object(l.jsxs)("div",{className:"pill bg-red-600 dark:bg-red-600 text-white dark:text-white shadow-lg",children:[" ",t.weaknesses," "]})]})]}),Object(l.jsx)("div",{className:"m-1 p-1 max-w-250",children:Object(l.jsx)(f,{playerData:t,darkTheme:c},c)})]}),Object(l.jsxs)("p",{className:"m-1 p-2 break-words dark:text-white",children:[" ",t.description," "]})]})};function g(e,t,c){var r=Object(l.jsx)(l.Fragment,{});return e&&e.length>0&&(r=e.map((function(e){for(var r={},a=0;a<t.length;a++)r[t[a].toLowerCase()]=e[a];return Object(l.jsx)(O,{playerObj:r,darkTheme:c},e)}))),r}var p=function(e){var t=e.darkTheme,c=Object(r.useState)([]),a=Object(i.a)(c,2),n=a[0],s=a[1],o=Object(r.useState)([]),d=Object(i.a)(o,2),x=d[0],b=d[1];return Object(r.useEffect)((function(){j.a.get("https://wardex.herokuapp.com/all").then((function(e){var t=e.data.shift();s(e.data),b(t)}))}),[]),Object(l.jsx)("div",{className:"card-container min-w-full max-w-full flex flex-col lg:flex-row flex-wrap\r justify-center",children:g(n,x,t)})},v=c(9),w=c(10),k=c(12),y="2rem",N=function(e){var t=e.icon,c=e.text,r=void 0===c?"tooltip":c;return Object(l.jsxs)("div",{className:"sidebar_icon group",children:[t,Object(l.jsx)("span",{className:"sidebar_text group-hover:scale-100 group-active:scale-100",children:r})]})},T=function(e){var t=e.link,c=void 0===t?"":t,r=e.icon,a=e.text,n=void 0===a?"tooltip":a,s=e.download,i=void 0!==s&&s;return Object(l.jsx)("a",Object(v.a)(Object(v.a)({href:c},i),{},{target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)(N,{icon:r,text:n})}))},S=function(e){var t=e.darkTheme,c=e.setDarkTheme;return Object(l.jsx)("div",{onClick:function(){return c(!t)},children:t?Object(l.jsx)(N,{icon:Object(l.jsx)(w.f,{size:y}),text:"Light mode"}):Object(l.jsx)(N,{icon:Object(l.jsx)(w.d,{size:y}),text:"Dark mode"})})},L=function(e){var t=e.darkTheme,c=e.setDarkTheme;return Object(l.jsxs)("div",{className:"top-0 left-0 w-12 sm:w-16 h-full m-0 pt-4 flex flex-col flex-none bg-white dark:bg-gray-700 text-white shadow-lg",children:[Object(l.jsx)(k.b,{to:"/",children:Object(l.jsx)(N,{icon:Object(l.jsx)(w.c,{size:y}),text:"Home"})}),Object(l.jsx)(T,{link:"https://docs.google.com/spreadsheets/d/160v8V_LBMy8vy48-IEJWKQzVxJKMtNmY5Ft96eH2-ug/edit?usp=sharing",icon:Object(l.jsx)(w.a,{size:y}),text:"Google Sheets"}),Object(l.jsx)(T,{link:"https://forms.gle/SevNUmM1a75Wy38LA",icon:Object(l.jsx)(w.e,{size:y}),text:"Form"}),Object(l.jsx)(T,{link:"https://github.com/JamesQiY/Wardex",icon:Object(l.jsx)(w.b,{size:y}),text:"Github"}),Object(l.jsx)(S,{darkTheme:t,setDarkTheme:c})]})},M=function(){var e=function(e,t){var c=Object(r.useState)((function(){var c=window.localStorage.getItem(e);return c?JSON.parse(c):t})),a=Object(i.a)(c,2),n=a[0],s=a[1];return[n,function(t){s(t),window.localStorage.setItem(e,JSON.stringify(t))}]}("dark-theme",!0),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){var e="dark",t=window.document.body.classList;c?t.add(e):t.remove(e)}),[c]),[c,a]},z=function(){var e=M(),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("div",{className:"page-container h-full flex flex-row dark:bg-gray-600",children:[Object(l.jsx)(L,{darkTheme:c,setDarkTheme:r}),Object(l.jsx)("div",{className:"home-container flex-1 overflow-auto",children:Object(l.jsxs)("div",{className:"content-container flex flex-col items-center justify-center p-1",children:[Object(l.jsx)(o,{className:"header"}),Object(l.jsx)(p,{darkTheme:c}),Object(l.jsxs)("div",{className:"m-1 p-1 text-center w-full bg-white rounded-lg",children:["Credit to ",Object(l.jsx)("a",{href:"https://chucklefish.org/",children:"Chucklefish"})," for all images."]})]})})]})},C=function(){return Object(l.jsxs)(s.c,{children:[" ",Object(l.jsx)(s.a,{exact:!0,path:"/",element:Object(l.jsx)(z,{})})]})};var D=function(){return Object(l.jsx)("div",{className:"h-full",children:Object(l.jsx)(C,{})})};n.a.render(Object(l.jsx)(k.a,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.f47ce4c8.chunk.js.map