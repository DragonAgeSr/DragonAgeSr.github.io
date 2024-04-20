"use strict";(self.webpackChunkda_sr_wiki=self.webpackChunkda_sr_wiki||[]).push([[2138],{1035:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var s=r(6540),a=r(4586),n=r(1472),c=r(5260),l=r(8774),o=r(1312);const u=["zero","one","two","few","many","other"];function h(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=m();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var p=r(53),g=r(6347),x=r(2303),f=r(1088);const y=function(){const e=(0,x.A)(),t=(0,g.W6)(),r=(0,g.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(f.Hg)&&f.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var C=r(5891),S=r(2384),j=r(6841),w=r(3810),A=r(7674),I=r(2849),v=r(4471);const R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var P=r(3385),_=r(4848);function b(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=d(),{searchValue:n,searchContext:l,searchVersion:u,updateSearchPath:h,updateSearchContext:i}=y(),[m,g]=(0,s.useState)(n),[x,j]=(0,s.useState)(),[w,A]=(0,s.useState)(),v=`${e}${u}`,b=(0,s.useMemo)((()=>m?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,s.useEffect)((()=>{h(m),x&&(m?x(m,(e=>{A(e)})):A(void 0))}),[m,x]);const T=(0,s.useCallback)((e=>{g(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==m&&g(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(f.Hg)||l||f.dz?await(0,C.Z)(v,l):{wrappedIndexes:[],zhDictionary:[]};j((()=>(0,S.m)(e,t,100)))}()}),[l,v]),(0,_.jsxs)(s.Fragment,{children:[(0,_.jsxs)(c.A,{children:[(0,_.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,_.jsx)("title",{children:b})]}),(0,_.jsxs)("div",{className:"container margin-vert--lg",children:[(0,_.jsx)("h1",{children:b}),(0,_.jsxs)("div",{className:"row",children:[(0,_.jsx)("div",{className:(0,p.A)("col",{[R.searchQueryColumn]:Array.isArray(f.Hg),"col--9":Array.isArray(f.Hg),"col--12":!Array.isArray(f.Hg)}),children:(0,_.jsx)("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:T,value:m,autoComplete:"off",autoFocus:!0})}),Array.isArray(f.Hg)?(0,_.jsx)("div",{className:(0,p.A)("col","col--3","padding-left--none",R.searchContextColumn),children:(0,_.jsxs)("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value),children:[f.dz&&(0,_.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),f.Hg.map((e=>{const{label:r,path:s}=(0,P.p)(e,t);return(0,_.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!x&&m&&(0,_.jsx)("div",{children:(0,_.jsx)(I.A,{})}),w&&(w.length>0?(0,_.jsx)("p",{children:r(w.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))}):(0,_.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,_.jsx)("section",{children:w&&w.map((e=>(0,_.jsx)(F,{searchResult:e},e.document.i)))})]})]})}function F(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(f.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,_.jsxs)("article",{className:R.searchResultItem,children:[(0,_.jsx)("h2",{children:(0,_.jsx)(l.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,j.Z)(h,a):(0,w.C)(h,(0,A.g)(n,"t"),a,100)}})}),u.length>0&&(0,_.jsx)("p",{className:R.searchResultItemPath,children:(0,v.$)(u)}),o&&(0,_.jsx)("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,w.C)(t.t,(0,A.g)(n,"t"),a,100)}})]})}const T=function(){return(0,_.jsx)(n.A,{children:(0,_.jsx)(b,{})})}}}]);