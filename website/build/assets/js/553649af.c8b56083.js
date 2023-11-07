"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1368],{5719:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var l=r(5893),i=r(1151);const s={title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 Proxmox",description:"Install proxmox home server.",authors:[{name:"Vladimir Gordeev",title:"SubNetwork administrator",url:"https://github.com/kliganN",email:"kligann@subnetwork.ru",image_url:"https://avatars.githubusercontent.com/u/84453321?v=4"}],tags:["proxmox","linux"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},o=void 0,t={permalink:"/blog/2023/11/01/blog-proxmoxinstall",editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/blog/2023-11-01-blog-proxmoxinstall.md",source:"@site/blog/2023-11-01-blog-proxmoxinstall.md",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 Proxmox",description:"Install proxmox home server.",date:"2023-11-01T00:00:00.000Z",formattedDate:"November 1, 2023",tags:[{label:"proxmox",permalink:"/blog/tags/proxmox"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:2.495,hasTruncateMarker:!1,authors:[{name:"Vladimir Gordeev",title:"SubNetwork administrator",url:"https://github.com/kliganN",email:"kligann@subnetwork.ru",image_url:"https://avatars.githubusercontent.com/u/84453321?v=4",imageURL:"https://avatars.githubusercontent.com/u/84453321?v=4"}],frontMatter:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 Proxmox",description:"Install proxmox home server.",authors:[{name:"Vladimir Gordeev",title:"SubNetwork administrator",url:"https://github.com/kliganN",email:"kligann@subnetwork.ru",image_url:"https://avatars.githubusercontent.com/u/84453321?v=4",imageURL:"https://avatars.githubusercontent.com/u/84453321?v=4"}],tags:["proxmox","linux"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430 AWS EC2.",permalink:"/blog/2023/11/02/blog-aws"},nextItem:{title:"\u0412\u044b\u0434\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 docusaurus",permalink:"/blog/2023/10/30/blog-docusaurus"}},a={authorsImageUrls:[void 0]},c=[{value:"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u044b \u0432 \u043f\u0430\u043f\u043a\u0443 <code>/jellyfin-media</code> \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 Jellyfin, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0442\u043e\u0440\u0440\u0435\u043d\u0442-\u0444\u0430\u0439\u043b\u044b \u0432 \u043f\u0430\u043f\u043a\u0443 <code>/jellyfin-media</code> \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f qBittorrent.",id:"\u0442\u0435\u043f\u0435\u0440\u044c-\u0432\u044b-\u043c\u043e\u0436\u0435\u0442\u0435-\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c-\u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u044b-\u0432-\u043f\u0430\u043f\u043a\u0443-jellyfin-media-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u043a\u043e\u0442\u043e\u0440\u044b\u0435-\u0431\u0443\u0434\u0443\u0442-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438-\u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c\u0441\u044f-\u0438-\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f-\u0432-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443-jellyfin-\u0430-\u0442\u0430\u043a\u0436\u0435-\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c-\u0442\u043e\u0440\u0440\u0435\u043d\u0442-\u0444\u0430\u0439\u043b\u044b-\u0432-\u043f\u0430\u043f\u043a\u0443-jellyfin-media-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u043a\u043e\u0442\u043e\u0440\u044b\u0435-\u0431\u0443\u0434\u0443\u0442-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438-\u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f-qbittorrent",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0421\u0430\u043c\u043e\u0435 \u043f\u0435\u0440\u0432\u043e\u0435, \u0447\u0442\u043e \u043c\u044b \u0434\u0435\u043b\u0430\u0435\u043c, \u044d\u0442\u043e - \u0440\u0430\u0437\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043c VM \u0441 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 Linux Ubuntu \u0438\u043b\u0438 Debian. \u0412 \u043c\u043e\u0435\u0439 \u0437\u0430\u043c\u0435\u0442\u043a\u0435 \u044f \u0432\u044b\u0431\u0440\u0430\u043b Debian, \u043e\u043d \u043c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0445."})}),"\n",(0,l.jsx)(n.p,{children:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Samba \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0441 Ubuntu \u0438\u043b\u0438 Debian \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Samba \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\r\nsudo apt-get install samba\n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 Samba \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0438\u043c \u043f\u0430\u0440\u043e\u043b\u0438:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo smbpasswd -a username\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u0417\u0434\u0435\u0441\u044c ",(0,l.jsx)(n.code,{children:"username"})," - \u044d\u0442\u043e \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Samba ",(0,l.jsx)(n.code,{children:"/etc/samba/smb.conf"}),", \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"[jellyfin-media]\r\n   path = /path/to/jellyfin-media\r\n   browseable = yes\r\n   read only = no\r\n   guest ok = yes\r\n   guest only = yes\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u0417\u0434\u0435\u0441\u044c ",(0,l.jsx)(n.code,{children:"jellyfin-media"})," - \u044d\u0442\u043e \u0438\u043c\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u0430\u043f\u043a\u0438, ",(0,l.jsx)(n.code,{children:"/path/to/jellyfin-media"})," - \u044d\u0442\u043e \u043f\u0443\u0442\u044c \u043a \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u043f\u043e \u0441\u0435\u0442\u0438, ",(0,l.jsx)(n.code,{children:"username"})," - \u044d\u0442\u043e \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f Samba, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u0430\u043f\u043a\u0435."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 Samba, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo service smbd restart\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 ",(0,l.jsx)(n.code,{children:"jellyfin-media"})," \u0441 \u043b\u044e\u0431\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0432 \u0441\u0435\u0442\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0438\u043c\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f Samba, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u044b\u043b \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 Windows \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a \u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 ",(0,l.jsx)(n.code,{children:"\\\\\\\\servername\\\\jellyfin-media"}),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043f\u0430\u043f\u043a\u0435."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u0434\u0430\u0432\u0430\u0439 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,l.jsx)(n.code,{children:"chmod 777 ."})]})}),"\n",(0,l.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Docker \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 Jellyfin \u0438 qBittorrent \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b Debian \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043f\u0430\u043f\u043a\u0435 ",(0,l.jsx)(n.code,{children:"/jellyfin-media"})," \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Docker \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b Debian, \u0441\u043b\u0435\u0434\u0443\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043d\u0430 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435 Docker: ",(0,l.jsx)(n.a,{href:"https://docs.docker.com/engine/install/debian/",children:"https://docs.docker.com/engine/install/debian/"})," \u2197"]}),"\n",(0,l.jsxs)(n.li,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 Jellyfin \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Docker \u0438 \u043f\u0440\u0438\u0432\u044f\u0436\u0438\u0442\u0435 \u043f\u0430\u043f\u043a\u0443 ",(0,l.jsx)(n.code,{children:"/jellyfin-media"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u0422.\u043a \u0443 \u043d\u0430\u0441 \u0443 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0430\u0440\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u043f\u043a\u0430 /jellyfin-media, \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u0435\u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"jellyconfig"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"torrent"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u0415\u0449\u0435 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u0430\u043f\u043a\u0443 Movies \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u043c\u043e\u0432 ",(0,l.jsx)(n.strong,{children:"Jellyfin"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u0412\u043e \u0432\u0441\u0435\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f\u0445 \u0434\u0435\u043b\u0430\u0435\u043c chmod ",(0,l.jsx)(n.code,{children:"777 ."})]}),"\n",(0,l.jsxs)(n.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u043c \u0432 ",(0,l.jsx)(n.code,{children:"/jellyfin-media/jellyconfig"})," \u0438 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c ",(0,l.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"version: '3.5'\r\nservices:\r\n  jellyfin:\r\n    image: jellyfin/jellyfin\r\n    container_name: jellyfin\r\n    user: 1000:1000\r\n    network_mode: 'host'\r\n    volumes:\r\n      - /home/vmware/jellyfin-media/jellyconfig:/config\r\n      - /home/vmware/jellyfin-media/jellyconfig/cache:/cache\r\n      - /home/vmware/jellyfin-media/Movies:/media\r\n    restart: 'unless-stopped'\r\n    extra_hosts:\r\n      - \"host.docker.internal:host-gateway\"\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 qBittorrent \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Docker \u0438 \u043f\u0440\u0438\u0432\u044f\u0436\u0438\u0442\u0435 \u043f\u0430\u043f\u043a\u0443 ",(0,l.jsx)(n.code,{children:"/jellyfin-media"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e /jellyfin-media/torrent \u0438 \u0442\u0430\u043a \u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u043c docker-compose.yml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'version: "2.1"\r\nservices:\r\n  qbittorrent:\r\n    image: lscr.io/linuxserver/qbittorrent:latest\r\n    container_name: qbittorrent\r\n    environment:\r\n      - PUID=1000\r\n      - PGID=1000\r\n      - TZ=Europe/Moscow\r\n      - WEBUI_PORT=8090\r\n    volumes:\r\n      - /home/vmware/jellyfin-media/torrent/appdata/config:/config\r\n      - /home/vmware/jellyfin-media/Movies:/downloads\r\n    ports:\r\n      - 8090:8090\r\n      - 6881:6881\r\n      - 6881:6881/udp\r\n    restart: unless-stopped\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u0417\u0434\u0435\u0441\u044c ",(0,l.jsx)(n.code,{children:"/jellyfin-media"})," - \u044d\u0442\u043e \u043f\u0443\u0442\u044c \u043a \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u043e\u0432, \u0430 ",(0,l.jsx)(n.code,{children:"/media"})," \u0438 ",(0,l.jsx)(n.code,{children:"/downloads"})," - \u044d\u0442\u043e \u043f\u0443\u0442\u0438 \u043a \u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u0430\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 Jellyfin \u0438 qBittorrent \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0447\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b Jellyfin \u0438 qBittorrent \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u044b \u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b, \u0441\u043b\u0435\u0434\u0443\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043d\u0430 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0430\u0439\u0442\u0430\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432:"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Jellyfin:  \u2197"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://jellyfin.org/docs/general/installation/container",children:"Container | Jellyfin"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"qBittorrent:  \u2197"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://hub.docker.com/r/linuxserver/qbittorrent",children:"Docker"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u0442\u0435\u043f\u0435\u0440\u044c-\u0432\u044b-\u043c\u043e\u0436\u0435\u0442\u0435-\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c-\u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u044b-\u0432-\u043f\u0430\u043f\u043a\u0443-jellyfin-media-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u043a\u043e\u0442\u043e\u0440\u044b\u0435-\u0431\u0443\u0434\u0443\u0442-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438-\u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c\u0441\u044f-\u0438-\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f-\u0432-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443-jellyfin-\u0430-\u0442\u0430\u043a\u0436\u0435-\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c-\u0442\u043e\u0440\u0440\u0435\u043d\u0442-\u0444\u0430\u0439\u043b\u044b-\u0432-\u043f\u0430\u043f\u043a\u0443-jellyfin-media-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u043a\u043e\u0442\u043e\u0440\u044b\u0435-\u0431\u0443\u0434\u0443\u0442-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438-\u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f-qbittorrent",children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043b\u044b \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,l.jsx)(n.code,{children:"/jellyfin-media"})," \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 Jellyfin, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0442\u043e\u0440\u0440\u0435\u043d\u0442-\u0444\u0430\u0439\u043b\u044b \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,l.jsx)(n.code,{children:"/jellyfin-media"})," \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f qBittorrent."]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>o});var l=r(7294);const i={},s=l.createContext(i);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);