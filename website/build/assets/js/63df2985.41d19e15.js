"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6389],{7542:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(5893),r=s(1151);const t={sidebar_position:16},o="Ansible. Loop",l={id:"Ansible/ansible-loop",title:"Ansible. Loop",description:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c, \u0447\u0442\u043e \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Ansible. \u0412 \u043f\u0440\u043e\u0441\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c user, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c. \u0412\u043e\u0442 \u0442\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f Boris:",source:"@site/docs/Ansible/ansible-loop.md",sourceDirName:"Ansible",slug:"/Ansible/ansible-loop",permalink:"/docs/Ansible/ansible-loop",draft:!1,unlisted:!1,editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/docs/Ansible/ansible-loop.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Ansible. \u0423\u0441\u043b\u043e\u0432\u0438\u044f. \u041f\u0440\u0438\u043c\u0435\u0440\u044b",permalink:"/docs/Ansible/ansible-conditions-examples"},next:{title:"Ansible. with_items",permalink:"/docs/Ansible/ansible-with-items"}},a={},d=[{value:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435",id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f-\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u0435",level:2},{value:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435",id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u0435",level:2},{value:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438",id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0441-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438",level:2},{value:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 (\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441)",id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0441-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438-\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0439-\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",level:2},{value:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c",id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f-\u0441\u043e-\u0441\u043f\u0438\u0441\u043a\u043e\u043c",level:2},{value:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441 \u0444\u0430\u0439\u043b\u043e\u043c",id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f-\u0441-\u0444\u0430\u0439\u043b\u043e\u043c",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ansible-loop",children:"Ansible. Loop"}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c, \u0447\u0442\u043e \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Ansible. \u0412 \u043f\u0440\u043e\u0441\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c ",(0,i.jsx)(n.code,{children:"user"}),", \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c. \u0412\u043e\u0442 \u0442\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,i.jsx)(n.code,{children:"Boris"}),":"]}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f-\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u0435",children:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- name: create users\r\n  hosts: localhost\r\n  tasks:\r\n    - user: name=Boris state=present\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0442\u043e \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a ",(0,i.jsx)(n.code,{children:"loop"}),", \u0438 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0438\u043c\u0435\u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u044d\u0442\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435:"]}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u0435",children:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- name: create users\r\n  hosts: localhost\r\n  tasks:\r\n    - user: name='{{ item }}' state=present\r\n      loop:\r\n        - Boris\r\n        - David\r\n        - Gordon\r\n        - Tony\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u0430\u0440\u044c ",(0,i.jsx)(n.code,{children:"dictionary"}),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.jsx)(n.code,{children:"item.name"})," \u0438 ",(0,i.jsx)(n.code,{children:"item.uid"}),":"]}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0441-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438",children:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- name: create users\r\n  hosts: localhost\r\n  tasks:\r\n    - user: name='{{ item.name }}' state=present uid='{{ item.uid }}'\r\n      loop:\r\n        - { name: Boris, uid: 1010 }\r\n        - { name: David, uid: 1011 }\r\n        - { name: Gordon, uid: 1012 }\r\n        - { name: Tony, uid: 1013 }\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439:"}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0441-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438-\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0439-\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",children:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 (\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- name: create users\r\n  hosts: localhost\r\n  tasks:\r\n    - user: name='{{ item.name }}' state=present uid='{{ item.uid }}'\r\n      loop:\r\n        - { name: Boris, uid: 1010 }\r\n        - { name: David, uid: 1011 }\r\n        - { name: Gordon, uid: 1012 }\r\n        - { name: Tony, uid: 1013 }\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ansible"})," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.jsx)(n.code,{children:"with_items"})," \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c, \u0438\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.jsx)(n.code,{children:"with_file"})," \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441 \u0444\u0430\u0439\u043b\u043e\u043c:"]}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f-\u0441\u043e-\u0441\u043f\u0438\u0441\u043a\u043e\u043c",children:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- name: Install packages with items\r\n  hosts: localhost\r\n  tasks:\r\n    - yum:\r\n        name: "{{ item }}"\r\n        state: present\r\n      with_items:\r\n        - httpd\r\n        - libaio\r\n        - make\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043b\u0435\u0439\u0431\u0443\u043a-\u0434\u043b\u044f-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f-\u0441-\u0444\u0430\u0439\u043b\u043e\u043c",children:"\u041f\u043b\u0435\u0439\u0431\u0443\u043a \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441 \u0444\u0430\u0439\u043b\u043e\u043c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- name: Copy file to hosts\r\n  hosts: all\r\n  tasks:\r\n    - copy:\r\n        src: "{{ item }}"\r\n        dest: "/tmp/"\r\n      with_file:\r\n        - "/etc/hosts"\r\n        - "/etc/resolv.conf"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u0412 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u044d\u0442\u043e\u043c\u0443, Ansible \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a ",(0,i.jsx)(n.code,{children:"with_mongodb"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0441 MongoDB."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var i=s(7294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);