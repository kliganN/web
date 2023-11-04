"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6965],{4737:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(5893),i=t(1151);const r={title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430 AWS EC2.",description:"AWS EC2 nginx static website",authors:[{name:"Vladimir Gordeev",title:"SubNetwork administrator",url:"https://github.com/kliganN",email:"kligann@subnetwork.ru",image_url:"https://avatars.githubusercontent.com/u/84453321?v=4"}],tags:["aws","nginx"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},a="AWS EC2 nginx static website",o={permalink:"/blog/2023/11/02/blog-aws",editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/blog/2023-11-02-blog-aws.md",source:"@site/blog/2023-11-02-blog-aws.md",title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430 AWS EC2.",description:"AWS EC2 nginx static website",date:"2023-11-02T00:00:00.000Z",formattedDate:"November 2, 2023",tags:[{label:"aws",permalink:"/blog/tags/aws"},{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:1.485,hasTruncateMarker:!1,authors:[{name:"Vladimir Gordeev",title:"SubNetwork administrator",url:"https://github.com/kliganN",email:"kligann@subnetwork.ru",image_url:"https://avatars.githubusercontent.com/u/84453321?v=4",imageURL:"https://avatars.githubusercontent.com/u/84453321?v=4"}],frontMatter:{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430 AWS EC2.",description:"AWS EC2 nginx static website",authors:[{name:"Vladimir Gordeev",title:"SubNetwork administrator",url:"https://github.com/kliganN",email:"kligann@subnetwork.ru",image_url:"https://avatars.githubusercontent.com/u/84453321?v=4",imageURL:"https://avatars.githubusercontent.com/u/84453321?v=4"}],tags:["aws","nginx"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 Proxmox",permalink:"/blog/2023/11/01/blog-proxmoxinstall"}},l={authorsImageUrls:[void 0]},c=[];function u(n){const e={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u0427\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0439\u0442 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Nginx \u043d\u0430 Amazon EC2, \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 Amazon EC2: \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 Amazon EC2 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0432\u0430\u043c\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Amazon Linux, Ubuntu, CentOS). \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0435\u0441\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u043e\u0440\u0442\u0443 80 (HTTP) \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e \u0442\u0440\u0430\u0444\u0438\u043a\u0430."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Nginx: \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c \u043a \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0443 Amazon EC2 \u043f\u043e SSH \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Nginx. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u043e\u0433\u0443\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f."}),"\n",(0,s.jsx)(e.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f Amazon Linux \u0438\u043b\u0438 CentOS \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo yum update -y\r\nsudo yum install nginx -y\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043b\u044f Ubuntu \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt update\r\nsudo apt install nginx -y\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e Nginx: \u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Nginx \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0424\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Nginx \u043e\u0431\u044b\u0447\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 ",(0,s.jsx)(e.code,{children:"/etc/nginx/nginx.conf"})," \u0438\u043b\u0438 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,s.jsx)(e.code,{children:"/etc/nginx/conf.d/"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"server {\r\n    listen 80;\r\n    server_name example.com;\r\n\r\n    root /path/to/your/static/site;\r\n\r\n    location / {\r\n        try_files $uri $uri/ =404;\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,s.jsx)(e.code,{children:"server_name"})," (\u0438\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u0430 \u0438\u043b\u0438 IP-\u0430\u0434\u0440\u0435\u0441\u0430) \u0438 ",(0,s.jsx)(e.code,{children:"root"})," (\u043f\u0443\u0442\u044c \u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0444\u0430\u0439\u043b\u0430\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430)."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 Nginx: \u041f\u043e\u0441\u043b\u0435 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e, \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 Nginx, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e."}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043b\u044f Amazon Linux \u0438\u043b\u0438 CentOS \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo service nginx restart\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043b\u044f Ubuntu \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 Nginx: \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e Nginx \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a. \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo service nginx status\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u0438\u043b\u0438"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo systemctl status nginx\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0439\u0442: \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 IP-\u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0433\u043e Amazon EC2 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0438\u043b\u0438 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0435 \u0438\u043c\u044f \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435. \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0430\u0448 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0439\u0442."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u0430\u0448 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Nginx \u043d\u0430 Amazon EC2. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u0430\u0448\u0438 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0430\u0439\u043b\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u044b \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,s.jsx)(e.code,{children:"root"}),", \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u0431\u044b\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u043c."]})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);