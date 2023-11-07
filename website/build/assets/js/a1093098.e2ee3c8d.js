"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2895],{2619:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var c=r(5893),o=r(1151);const s={sidebar_position:14},i="Docker. \u0421\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",d={id:"Docker/docker-environment",title:"Docker. \u0421\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",description:"Docker \u0441\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",source:"@site/docs/Docker/docker-environment.md",sourceDirName:"Docker",slug:"/Docker/docker-environment",permalink:"/docs/Docker/docker-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/docs/Docker/docker-environment.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Docker Compose. \u041a\u043e\u043c\u0430\u043d\u0434\u044b",permalink:"/docs/Docker/docker-compose-commands"},next:{title:"Docker. \u0424\u0430\u0439\u043b\u043e\u0432\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435",permalink:"/docs/Docker/docker-files-volumes"}},a={},l=[{value:"Docker \u0441\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",id:"docker-\u0441\u0440\u0435\u0434\u0430-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-1",level:2},{value:"Docker Host",id:"docker-host",level:2},{value:"Namespace",id:"namespace",level:2},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435-\u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445-\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f namespace \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-namespace-\u0438-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"docker-\u0441\u0440\u0435\u0434\u0430-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",children:"Docker. \u0421\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),"\n",(0,c.jsx)(n.h2,{id:"docker-\u0441\u0440\u0435\u0434\u0430-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-1",children:"Docker \u0441\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),"\n",(0,c.jsx)(n.p,{children:"Docker \u0441\u0440\u0435\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"Docker Engine - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438."}),"\n",(0,c.jsx)(n.li,{children:"Docker CLI - \u0443\u0442\u0438\u043b\u0438\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f Docker."}),"\n",(0,c.jsx)(n.li,{children:"REST API - API \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f Docker."}),"\n",(0,c.jsx)(n.li,{children:"Docker daemon - \u0444\u043e\u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 Docker, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a \u043e\u0431\u0440\u0430\u0437\u044b, \u0442\u043e\u043c\u0430 \u0438 \u0441\u0435\u0442\u0438."}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"docker-host",children:"Docker Host"}),"\n",(0,c.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 Docker \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u043c \u0445\u043e\u0441\u0442\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u044e ",(0,c.jsx)(n.code,{children:"-H"})," \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 ",(0,c.jsx)(n.code,{children:"docker"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker -H=remote-docker-engine:5478\r\ndocker -H=10.10.10.1:5478 run nginx\n"})}),"\n",(0,c.jsx)(n.h2,{id:"namespace",children:"Namespace"}),"\n",(0,c.jsxs)(n.p,{children:["Docker \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 namespace \u0434\u043b\u044f \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0432 namespace \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,c.jsx)(n.code,{children:"docker run -it alpine ps aux"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435-\u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445-\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"}),"\n",(0,c.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 Docker \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u0438 ",(0,c.jsx)(n.code,{children:"--cpus"})," \u0438 ",(0,c.jsx)(n.code,{children:"--memory"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run --cpus=.5 nginx\r\ndocker run --memory=100m nginx\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-namespace-\u0438-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f namespace \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,c.jsx)(n.p,{children:"\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 100 \u041c\u0411 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run -d --memory=100mb --name alpine-100mb alpine top\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,c.jsx)(n.code,{children:"docker stats --no-stream"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0432 namespace \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u044e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"--net=container"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run -d --name=http nginx:alpine\r\ndocker run --net=container:http benhall/curl curl -s localhost\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u0414\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0432 namespace \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u044e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"--pid=container"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run --pid=container:http alpine ps aux\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var c=r(7294);const o={},s=c.createContext(o);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);