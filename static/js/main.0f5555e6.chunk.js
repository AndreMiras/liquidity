(this["webpackJsonpuniswap-roi"]=this["webpackJsonpuniswap-roi"]||[]).push([[0],{135:function(e,a,t){e.exports=t.p+"static/media/CHANGELOG.8d1a1cbe.md"},137:function(e){e.exports=JSON.parse('{"a":"2020.10.26"}')},142:function(e,a,t){e.exports=t(323)},147:function(e,a,t){},148:function(e,a,t){},323:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),i=(t(147),t(148),t(149),t(49)),o=t(138),s=t(13),m=t(8),u=t(131),d=t(21),E=function(e){var a=e.innerButton,t=e.children,l=Object(n.useState)(!1),c=Object(m.a)(l,2),i=c[0],o=c[1],s=i?"show":"",d=i?"":"collapsed";return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{variant:"link",className:"nav-link ".concat(d),"data-toggle":"collapse","aria-expanded":i,onClick:function(){return o(!i)}},a),r.a.createElement("div",{className:"collapse ".concat(s)},t))},p=function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"fa-fw mr-1",icon:"code"})," ",r.a.createElement("span",null,"Source code")),a=r.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},r.a.createElement("h6",{className:"collapse-header"},"Frontend:"),r.a.createElement("a",{className:"collapse-item",href:"https://github.com/AndreMiras/pools"},"AndreMiras/pools"),r.a.createElement("div",{className:"collapse-divider"}),r.a.createElement("h6",{className:"collapse-header"},"Backend:"),r.a.createElement("a",{className:"collapse-item",href:"https://github.com/AndreMiras/pools-api"},"AndreMiras/pools-api"),r.a.createElement("a",{className:"collapse-item",href:"https://github.com/AndreMiras/libpools"},"AndreMiras/libpools"));return r.a.createElement(E,{innerButton:e},a)},b=function(){return r.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/pools"},r.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},r.a.createElement(d.a,{className:"fa-2x",icon:"laugh-wink"})),r.a.createElement("div",{className:"sidebar-brand-text mx-3"},"Pools"))},f=function(){return r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/pools"},r.a.createElement(d.a,{className:"fa-fw mr-1",icon:"tachometer-alt"}),r.a.createElement("span",null,"Dashboard")))},v=function(){return r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/pairs"},r.a.createElement(u.a,{variant:"link",className:"nav-link collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"},r.a.createElement(d.a,{className:"fa-cog mr-1",icon:"chart-pie"}),r.a.createElement("span",null,"Pools"))))},h=function(){return r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/changelog"},r.a.createElement(d.a,{className:"fa-fw mr-1",icon:"list"}),r.a.createElement("span",null,"Changelog")))},g=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],c=t?"toggled":"",i=t?"right":"left";return r.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ".concat(c),id:"accordionSidebar"},r.a.createElement(b,null),r.a.createElement("hr",{className:"sidebar-divider my-0"}),r.a.createElement(f,null),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement("div",{className:"sidebar-heading"},"Interface"),r.a.createElement(v,null),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement("div",{className:"sidebar-heading"},"Links"),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p,null)),r.a.createElement(h,null),r.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}),r.a.createElement("div",{className:"text-center d-none d-md-inline"},r.a.createElement(u.a,{type:"button","aria-label":"Toggle sidebar",className:"rounded-circle",onClick:function(){return l(!t)}},r.a.createElement(d.a,{className:"fa-fw fa-align-center",icon:"angle-".concat(i)}))))},y=t(10),N=t(333),k=t(332),w="https://pools-api.herokuapp.com",O=function(e){return"".concat(w,"/portfolio/").concat(e)},x="".concat(w,"/pairs"),D=function(e,a,t){fetch(e).then((function(e){var n=e.ok?a:t;e.json().then((function(e){return n(e)}))}),(function(e){return t({detail:e.toString()})}))},j=function(e,a,t){return D(function(e){return"".concat(w,"/pairs/").concat(e,"/daily")}(e),a,t)},S=t(334),A=function(e){var a=e.detail,t=e.onClose,l=Object(n.useState)(!0),c=Object(m.a)(l,2),i=c[0],o=c[1];return r.a.createElement(S.a,{show:i,onHide:function(){o(!1),t()},animation:!1},r.a.createElement(S.a.Header,{closeButton:!0,className:"bg-warning"},r.a.createElement(S.a.Title,null,"Error")),r.a.createElement(S.a.Body,null,a))};A.defaultProps={onClose:function(){return null}};var F=A,q=(t(156),t(336)),C=t(338),P=t(330),R=t(331),_=t(72),B=t(329),T=t(1),H=t.n(T),M={symbol:H.a.string.isRequired,balance:H.a.number.isRequired},J={amount0:H.a.number.isRequired,amount1:H.a.number.isRequired,amountUSD:H.a.number.isRequired,liquidity:H.a.number.isRequired,sender:H.a.string.isRequired,to:H.a.string.isRequired,type:H.a.string.isRequired},$=(H.a.string.isRequired,H.a.number.isRequired,H.a.number.isRequired,H.a.string.isRequired,H.a.number.isRequired,H.a.number.isRequired,H.a.arrayOf(H.a.shape(M).isRequired).isRequired,H.a.arrayOf(H.a.shape(J).isRequired).isRequired,t(337)),K=t(328),I=function(e){var a=e.title,t=e.children,n=e.show,l=e.onHide;return r.a.createElement(S.a,{show:n,onHide:l,animation:!1},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,null,a)),r.a.createElement(S.a.Body,null,t),r.a.createElement(S.a.Footer,null,r.a.createElement(u.a,{variant:"secondary",onClick:l},"Close")))},L=function(e){var a=e.token;return r.a.createElement(r.a.Fragment,null,a.symbol,r.a.createElement("ul",null,r.a.createElement("li",null,"Balance:",a.balance),r.a.createElement("li",null,"Price:",a.price),r.a.createElement("li",null,"Total USD: $",a.balance_usd)))},U=function(e){var a=e.pairDict;return r.a.createElement(r.a.Fragment,null,a.tokens.map((function(e){return r.a.createElement(L,{token:e,key:e.symbol})})))},G=function(e){var a=e.transactions;return r.a.createElement("pre",null,JSON.stringify(a,null,2))},W=function(e){var a=e.pairDict;return r.a.createElement("pre",null,JSON.stringify(a,null,2))},z=function(e){var a=e.pairDict;return r.a.createElement($.a,{defaultActiveKey:"overview",transition:!1},r.a.createElement(K.a,{eventKey:"overview",title:"Overview"},r.a.createElement(U,{pairDict:a})),r.a.createElement(K.a,{eventKey:"transactions",title:"Transactions"},r.a.createElement(G,{transactions:a.transactions})),r.a.createElement(K.a,{eventKey:"debug",title:"Debug"},r.a.createElement(W,{pairDict:a})))},Q=function(e){var a=e.pairDict,t=e.show,n=e.onHide,l="".concat(a.symbol," pair details");return r.a.createElement(I,{title:l,show:t,onHide:n},r.a.createElement(z,{pairDict:a}))},V=function(e){var a=e.text,t=e.tokenAddress,n=e.ownerAddress,l=n?"?a=".concat(n):"",c="https://etherscan.io/token/".concat(t).concat(l);return r.a.createElement("a",{href:c},a)};V.defaultProps={ownerAddress:null};var X=V,Y=function(e){var a=e.onClick;return r.a.createElement(u.a,{type:"link",onClick:a},"Details")},Z=function(e){var a=e.address,t=e.pairDict,l=Object(n.useState)(!1),c=Object(m.a)(l,2),i=c[0],o=c[1],u=t.tokens[0],d=t.tokens[1];return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(X,{text:t.symbol,tokenAddress:t.contract_address})),r.a.createElement("td",null,r.a.createElement(X,{text:t.owner_balance.toFixed(2),tokenAddress:t.contract_address,ownerAddress:a})),r.a.createElement("td",null,r.a.createElement(s.b,{to:"/pairs/".concat(t.contract_address)},"$",t.price_usd.toFixed(2))),r.a.createElement("td",null,t.share.toFixed(2),"%"),r.a.createElement("td",null,u.balance.toFixed(2)," ",u.symbol," ","+"," ",d.balance.toFixed(2)," ","+"," ",d.symbol),r.a.createElement("td",null,"$",t.balance_usd.toFixed(2)),r.a.createElement("td",null,r.a.createElement(Q,{pairDict:t,show:i,onHide:function(){return o(!1)}}),r.a.createElement(Y,{onClick:function(){return o(!0)}})))},ee=function(e){var a=e.address,t=e.pairs.map((function(e){return r.a.createElement(Z,{address:a,pairDict:e,key:e.contract_address})}));return r.a.createElement(B.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Symbol"),r.a.createElement("th",null,"Pool token balance"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Share"),r.a.createElement("th",null,"Tokens balance"),r.a.createElement("th",null,"Balance USD"),r.a.createElement("th",null,"Details"))),r.a.createElement("tbody",null,t))},ae=function(e){var a=e.title,t=e.extraComponent;return r.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},r.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},a),t)};ae.defaultProps={extraComponent:null};var te=ae,ne=function(e){var a=e.address;return r.a.createElement(u.a,{variant:"primary",size:"sm",href:O(a)},r.a.createElement(d.a,{icon:"download"})," ","Download")},re=function(e){var a=e.dataDict,t=a.balance_usd,n=a.pairs.map((function(e){return Math.round(100*e.balance_usd/t)})),l={labels:a.pairs.map((function(e){return e.symbol})),datasets:[{label:"Portfolio share",data:n}]};return r.a.createElement(_.Doughnut,{data:l,options:{plugins:{colorschemes:{scheme:"brewer.SetOne9"}}}})},le=function(e){var a=e.dataDict;return r.a.createElement(q.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Header,null,r.a.createElement(q.a.Toggle,{as:u.a,variant:"link",eventKey:"0"},"See full JSON response")),r.a.createElement(q.a.Collapse,{eventKey:"0",animation:"false"},r.a.createElement(C.a.Body,null,r.a.createElement("pre",null,JSON.stringify(a,null,2))))))},ce=function(e){var a=e.dataDict;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{title:"Portfolio",extraComponent:r.a.createElement(ne,{address:a.address})}),r.a.createElement(P.a,null,r.a.createElement("h3",null,"Liquidity provider balance: $",a.balance_usd.toFixed(2))),r.a.createElement(P.a,null,r.a.createElement(R.a,{xs:7},r.a.createElement(re,{dataDict:a}))),r.a.createElement(P.a,null,r.a.createElement(ee,{address:a.address,pairs:a.pairs})),r.a.createElement(P.a,null,r.a.createElement(le,{dataDict:a})))},ie=function(){var e=Object(y.h)().address,a=Object(n.useState)(null),t=Object(m.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(null),o=Object(m.a)(i,2),s=o[0],u=o[1],d=function(e){u(null),c(e)},E=s?r.a.createElement(F,{detail:s.detail}):null,p=l?r.a.createElement(ce,{dataDict:l}):null,b=l||s?null:r.a.createElement(k.a,{animation:"border"});return Object(n.useEffect)((function(){u(null),c(null),function(e,a,t){D(O(e),a,t)}(e,d,u)}),[e]),r.a.createElement(r.a.Fragment,null,E,b,p)},oe=function(e){var a=e.datePrice.sort((function(e,a){return new Date(e.date)-new Date(a.date)})),t={labels:a.map((function(e){return e.date})),datasets:[{label:"Price USD",data:a.map((function(e){return e.price_usd.toFixed(2)}))}]};return r.a.createElement(_.Line,{data:t,options:{scales:{xAxes:[{type:"time",time:{unit:"day"}}]}}})},se=function(e){var a=e.pairsDaily;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{title:"Pair ".concat(a.pair.symbol," $").concat(a.pair.price_usd.toFixed(2))}),r.a.createElement(P.a,null,r.a.createElement(R.a,{xs:10},r.a.createElement(oe,{datePrice:a.date_price}))))},me=function(){var e=Object(y.h)().address,a=Object(n.useState)(null),t=Object(m.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(null),o=Object(m.a)(i,2),s=o[0],u=o[1],d=function(e){u(null),c(e)},E=s?r.a.createElement(F,{detail:s.detail}):null,p=l?r.a.createElement(se,{pairsDaily:l}):null,b=l||s?null:r.a.createElement(k.a,{animation:"border"});return Object(n.useEffect)((function(){u(null),c(null),j(e,d,u)}),[e]),r.a.createElement(r.a.Fragment,null,E,b,p)},ue=function(e){var a=e.pairDict;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(X,{text:a.symbol,tokenAddress:a.id})),r.a.createElement("td",null,r.a.createElement(s.b,{to:"/pairs/".concat(a.id)},"$",a.price_usd.toFixed(2))),r.a.createElement("td",null,"TODO"))},de=function(e){var a=e.pairs.map((function(e){return r.a.createElement(ue,{pairDict:e,key:e.id})}));return r.a.createElement(B.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Pair"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Market Cap"))),r.a.createElement("tbody",null,a))},Ee=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),i=Object(m.a)(c,2),o=i[0],s=i[1],u=function(e){s(null),l(e)},d=o?r.a.createElement(F,{detail:o.detail}):null,E=t?r.a.createElement(de,{pairs:t}):null,p=t||o?null:r.a.createElement(k.a,{animation:"border"});return Object(n.useEffect)((function(){s(null),l(null),function(e,a){D(x,e,a)}(u,s)}),[]),r.a.createElement(r.a.Fragment,null,d,p,E)},pe=t(134),be=t.n(pe),fe=t(135),ve=t.n(fe),he=function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],l=a[1];return fetch(ve.a).then((function(e){return e.text()})).then(l),r.a.createElement(be.a,{source:t})},ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{title:"Home"}),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"Enter your address to track your portfolio, e.g."," ",r.a.createElement(s.b,{to:"/portfolio/0x000000000000000000000000000000000000dEaD"},"burn address portfolio"))))},ye=function(){return r.a.createElement(N.a,{fluid:!0},r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/"},r.a.createElement(ge,null)),r.a.createElement(y.b,{path:"/portfolio/:address"},r.a.createElement(ie,null)),r.a.createElement(y.b,{exact:!0,path:"/pairs"},r.a.createElement(Ee,null)),r.a.createElement(y.b,{path:"/pairs/:address"},r.a.createElement(me,null)),r.a.createElement(y.b,{path:"/changelog"},r.a.createElement(he,null))))},Ne=t(335),ke=function(e){var a=e.onAddress,t=e.loading,l=Object(n.useState)(),c=Object(m.a)(l,2),i=c[0],o=c[1],s=t?"spinner":"search",u=function(e){e.preventDefault(),a(i)};return r.a.createElement("form",{className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",onSubmit:u},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Ethereum address","aria-label":"Address","aria-describedby":"basic-addon2",onChange:function(e){o(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:u},r.a.createElement(d.a,{className:"fa-sm",icon:s,pulse:t})))))};ke.defaultProps={loading:!1};var we=function(e){var a=e.onAddress,t=e.loading;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",type:"button"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement(ke,{onAddress:a,loading:t}),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),r.a.createElement(Ne.a,{title:"0x00000...0000",id:"nav-dropdown",className:"mr-2 d-none d-lg-inline small"},r.a.createElement(Ne.a.Item,null,"Profile"),r.a.createElement(Ne.a.Item,null,"Settings"),r.a.createElement(Ne.a.Divider,null),r.a.createElement(Ne.a.Item,null,"Logout"))))},Oe=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(y.g)(),i=t?r.a.createElement(y.a,{to:"/portfolio/".concat(t)}):null;return r.a.createElement("div",{id:"content"},i,r.a.createElement(we,{onAddress:function(e){t===e&&(c.push("/temp"),c.goBack()),l(e)}}),r.a.createElement(ye,null))},xe=t(137),De=function(){return r.a.createElement("footer",{className:"sticky-footer bg-white"},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"copyright text-center my-auto"},r.a.createElement("span",null,"Copyright \xa9 Andre Miras 2020 - Pools v",xe.a))))},je=function(){return r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement(Oe,null),r.a.createElement(De,null))};i.b.add(o.a);var Se=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App",id:"wrapper"},r.a.createElement(g,null),r.a.createElement(je,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.0f5555e6.chunk.js.map