"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7629],{1268:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=r(5893),s=r(1151);const t={sidebar_position:7},c="Dcoker. \u0421\u0435\u0442\u0438",i={id:"Docker/docker-networks",title:"Dcoker. \u0421\u0435\u0442\u0438",description:"Docker \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u044b \u0441\u0435\u0442\u0438. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0442\u0440\u0438 \u0441\u0435\u0442\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - bridge, none \u0438 host.",source:"@site/docs/Docker/docker-networks.md",sourceDirName:"Docker",slug:"/Docker/docker-networks",permalink:"/docs/Docker/docker-networks",draft:!1,unlisted:!1,editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/docs/Docker/docker-networks.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Docker. Port and Volume Mapping. \u041f\u0440\u0438\u043c\u0435\u0440",permalink:"/docs/Docker/docker-portvolume-mapping"},next:{title:"Dockerfile",permalink:"/docs/Docker/docker-file"}},d={},l=[];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"dcoker-\u0441\u0435\u0442\u0438",children:"Dcoker. \u0421\u0435\u0442\u0438"}),"\n",(0,o.jsx)(n.admonition,{title:"\u0421\u0435\u0442\u0438",type:"tip",children:(0,o.jsx)(n.p,{children:"Docker \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u044b \u0441\u0435\u0442\u0438. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0442\u0440\u0438 \u0441\u0435\u0442\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - bridge, none \u0438 host."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Bridge"})," - \u044d\u0442\u043e \u043c\u043e\u0441\u0442\u043e\u0432\u0430\u044f \u0441\u0435\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432. \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0447\u0435\u0440\u0435\u0437 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 IP-\u0430\u0434\u0440\u0435\u0441 \u044d\u0442\u043e\u0439 \u0441\u0435\u0442\u0438 (\u043e\u0431\u044b\u0447\u043d\u043e 172.17.0.0/16)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"None"})," - \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043d\u0435 \u0438\u043c\u0435\u044e\u0442 \u0441\u0435\u0442\u0438."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Host"})," - \u0441\u0435\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u043c\u0435\u0436\u0434\u0443 \u0445\u043e\u0441\u0442\u043e\u043c \u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u043c."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Docker"})," \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0442\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,o.jsx)(n.code,{children:"Overlay"}),", ",(0,o.jsx)(n.code,{children:"Macvlan"}),", ",(0,o.jsx)(n.code,{children:"3rdParty plugins"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u0435\u0442\u044c, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,o.jsx)(n.code,{children:"docker network create"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker network create --driver bridge --subnet 172.22.0.0/24 --gateway 172.22.0.1 wp-mysql-network\n"})}),"\n",(0,o.jsx)(n.p,{children:'\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u0443\u044e \u0441\u0435\u0442\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "wp-mysql-network" \u0438 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u043c IP-\u0430\u0434\u0440\u0435\u0441\u043e\u0432 172.22.0.0/24.'}),"\n",(0,o.jsx)(n.p,{children:'\u0427\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 MySQL \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0431\u0440\u0430\u0437\u0430 MySQL \u0438 \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0435\u0435 \u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 "wp-mysql-network", \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d --name=mysql-db -e MYSQL_ROOT_PASSWORD=db_pass123 --network=wp-mysql-network mysql\n"})}),"\n",(0,o.jsx)(n.p,{children:'\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "mysql-db", \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043a \u0441\u0435\u0442\u0438 "wp-mysql-network".'}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Docker \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 DNS, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0432\u043c\u0435\u0441\u0442\u043e IP-\u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0439 \u0441\u0435\u0442\u0438."})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var o=r(7294);const s={},t=o.createContext(s);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);