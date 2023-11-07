"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1004],{6364:(e,n,r)=>{r.r(n),r.d(n,{Highlight:()=>d,assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(5893),t=r(1151);const o={sidebar_position:4},a="Markdown Features",i={id:"Linux/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/Linux/markdown-features.mdx",sourceDirName:"Linux",slug:"/Linux/markdown-features",permalink:"/docs/Linux/markdown-features",draft:!1,unlisted:!1,editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/docs/Linux/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SSH \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0440\u0443\u0442\u0430",permalink:"/docs/Linux/SSH \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0440\u0443\u0442\u0430"},next:{title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432",permalink:"/docs/Linux/\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0444\u0430\u0438\u0306\u043b\u043e\u0432"}},c={},l=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],d=({children:e,color:n})=>{const r={span:"span",...(0,t.a)()};return(0,s.jsx)(r.span,{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e})};function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus supports ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,s.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,s.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,s.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\r\n---\r\nid: my-doc-id\r\ntitle: My document title\r\ndescription: My document description\r\nslug: /my-custom-url\r\n---\r\n// highlight-end\r\n\r\n## Markdown heading\r\n\r\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,s.jsx)(n.a,{href:"./create-a-page.md",children:"Create a page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,s.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,s.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,s.jsx)(n.code,{children:"static/img/docusaurus.png"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/docusaurus.png)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docusaurus logo",src:r(2930).Z+"",width:"512",height:"512"})}),"\n",(0,s.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/docusaurus.png)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,s.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\r\n    return (\r\n        <h1>Hello, Docusaurus!</h1>\r\n    )\r\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\r\n  return <h1>Hello, Docusaurus!</h1>;\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,s.jsx)(n.p,{children:":::tip My tip"}),"\n",(0,s.jsx)(n.p,{children:"Use this awesome feature option"}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.p,{children:":::danger Take care"}),"\n",(0,s.jsx)(n.p,{children:"This action is dangerous"}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,s.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,s.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,s.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,s.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,s.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,s.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\r\n  <span\r\n    style={{\r\n      backgroundColor: color,\r\n      borderRadius: '20px',\r\n      color: '#fff',\r\n      padding: '10px',\r\n      cursor: 'pointer',\r\n    }}\r\n    onClick={() => {\r\n      alert(`You clicked the color ${color} with label ${children}`)\r\n    }}>\r\n    {children}\r\n  </span>\r\n);\r\n\r\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\r\n\r\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(d,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,s.jsxs)(n.p,{children:["This is ",(0,s.jsx)(d,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2930:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/docusaurus-b3be762162ca80fb4fda21c6ca0a27c7.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(7294);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);