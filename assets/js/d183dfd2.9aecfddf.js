"use strict";(self.webpackChunkda_sr_wiki=self.webpackChunkda_sr_wiki||[]).push([[6469],{7555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(4848),i=n(8453),c=(n(7717),n(1133));const s={},a="Welcome",o={id:"da2/welcome/index",title:"Welcome",description:"Welcome to Dragon Age 2 speedrunning!",source:"@site/docs/da2/01-welcome/index.mdx",sourceDirName:"da2/01-welcome",slug:"/da2/welcome/",permalink:"/docs/da2/welcome/",draft:!1,unlisted:!1,editUrl:"https://github.com/DragonAgeSR/DragonAgeSR.github.io/blob/main/docs/da2/01-welcome/index.mdx",tags:[],version:"current",lastUpdatedBy:"Lemuura",lastUpdatedAt:1713645705,formattedLastUpdatedAt:"Apr 20, 2024",frontMatter:{},sidebar:"da2Sidebar",next:{title:"\ud83d\udd28 Setup",permalink:"/docs/da2/welcome/basic-setup"}},d={},l=[];function m(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"welcome",children:"Welcome"}),"\n",(0,r.jsx)(t.p,{children:"Welcome to Dragon Age 2 speedrunning!"}),"\n",(0,r.jsx)(c.A,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1133:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(8215),i=n(1754),c=n(8774),s=n(6654),a=n(1312),o=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function m(e){let{href:t,children:n}=e;return(0,l.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:i,description:c}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(o.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),c&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const c=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}}}]);