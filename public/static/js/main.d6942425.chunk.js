(this["webpackJsonpapp-gestao"]=this["webpackJsonpapp-gestao"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(6),s=n.n(c),i=n(1),u=n.n(i),j=n(3),d=n(4),l="http://127.0.0.1:8000/api",o={list:function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l+"/list");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),dir:function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l+"/dir");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),upload:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("folder",n),e.next=5,fetch(l+"/upload",{method:"POST",body:a});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},p=n(0),b=function(e){return Object(p.jsx)("div",{className:"file",children:Object(p.jsx)("div",{className:"line",children:Object(p.jsx)("table",{children:Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.data.id}),Object(p.jsx)("td",{children:e.data.name}),Object(p.jsx)("td",{children:e.data.type}),Object(p.jsx)("td",{children:e.data.size/1e3}),Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:e.data.url,children:"Ver arquivo"})})]})})})})})};n(13),n(14);var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(d.a)(c,2),i=s[0],l=s[1],h=Object(a.useState)(null),O=Object(d.a)(h,2),f=O[0],x=O[1];Object(a.useEffect)((function(){v()}),[]);var v=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.list();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o.upload(f,i);case 3:v();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{id:"page-home",children:[Object(p.jsx)("div",{className:"content mg-top-bottom",children:Object(p.jsx)("main",{children:Object(p.jsx)("div",{className:"upload",children:Object(p.jsxs)("form",{onSubmit:m,children:[Object(p.jsx)("label",{id:"_file",htmlFor:"file",children:"Clique aqui para enviar seus arquivos"}),Object(p.jsx)("input",{type:"file",name:"file",id:"file",onChange:function(e){x(e.target.files[0])}}),Object(p.jsxs)("div",{className:"pasta",children:[Object(p.jsx)("label",{children:"Deseja agrupar esse arquivo em uma pasta?"}),Object(p.jsx)("input",{type:"text",name:"pasta",placeholder:"Digite aqui o nome da pasta...",onBlur:function(e){l(e.target.value)}}),Object(p.jsx)("p",{children:"Obs.: Caso n\xe3o escolha nenhum nome para pasta os arquivos ser\xe3o salvos na pasta DROP."})]}),Object(p.jsx)("button",{children:"Enviar arquivo"})]})})})}),Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)("div",{className:"bg-radius",children:[Object(p.jsx)("div",{className:"file",children:Object(p.jsx)("div",{className:"line",children:n&&Object(p.jsx)("table",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"ID"}),Object(p.jsx)("td",{children:"Nome"}),Object(p.jsx)("td",{children:"tipo"}),Object(p.jsx)("td",{children:"Tamanho"}),Object(p.jsx)("td",{children:"url"})]})})})}),Object(p.jsx)("div",{className:"bg",children:n.map((function(e){return Object(p.jsx)(b,{data:e})}))})]})})]})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d6942425.chunk.js.map