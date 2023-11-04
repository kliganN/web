"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2216],{4272:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var l=s(5893),i=s(1151);const o={sidebar_position:6},r="Ansible. Playbooks",t={id:"Ansible/ansible-playbooks",title:"Ansible. Playbooks",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u043e\u043d\u044f\u0442\u0438\u044f",source:"@site/docs/Ansible/ansible-playbooks.md",sourceDirName:"Ansible",slug:"/Ansible/ansible-playbooks",permalink:"/docs/Ansible/ansible-playbooks",draft:!1,unlisted:!1,editUrl:"https://github.com/kliganN/docusaurus-web/tree/main/docs/Ansible/ansible-playbooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ansible. Ad-Hoc \u043a\u043e\u043c\u0430\u043d\u0434\u044b-2",permalink:"/docs/Ansible/ansible-adhoc2"},next:{title:"Ansible. \u0417\u0430\u043f\u0443\u0441\u043a playbook",permalink:"/docs/Ansible/ansible-load-playbook"}},a={},c=[{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u043e\u043d\u044f\u0442\u0438\u044f",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043f\u043e\u043d\u044f\u0442\u0438\u044f",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"ansible-playbooks",children:"Ansible. Playbooks"}),"\n",(0,l.jsx)(n.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043f\u043e\u043d\u044f\u0442\u0438\u044f",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u043e\u043d\u044f\u0442\u0438\u044f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Playbook"})," - \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 YAML-\u0444\u0430\u0439\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043d\u0430\u0431\u043e\u0440 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 (tasks) \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0445\u043e\u0441\u0442\u0430\u0445"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Play"})," - \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043d\u0430 \u043a\u0430\u043a\u0438\u0445 \u0445\u043e\u0441\u0442\u0430\u0445"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Task"})," - \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0430 \u0445\u043e\u0441\u0442\u0435. \u0417\u0430\u0434\u0430\u0447\u0438 \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),"\n",(0,l.jsx)(n.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),"\n",(0,l.jsx)(n.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432"}),"\n",(0,l.jsx)(n.li,{children:"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435/\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430"}),"\n",(0,l.jsx)(n.p,{children:"\u0412\u0437\u0433\u043b\u044f\u043d\u0435\u043c \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430 YAML:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="simple-playbook.yml"',children:'---\r\n- name: \u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430\r\n  hosts: localhost\r\n  become: true   # become \u043d\u0443\u0436\u0435\u043d \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043e\u0442 sudo \u0441 \u043f\u0430\u0440\u043e\u043b\u0435\u043c \u043e\u0442 SSH\r\n  tasks:\r\n    - name: \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 "date"\r\n      command: date\r\n\r\n    - name: \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435\r\n      script: test_script.sh\r\n\r\n    - name: \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441 httpd\r\n      yum:\r\n        name: httpd\r\n        state: present\r\n\r\n    - name: \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\r\n      service:\r\n        name: httpd\r\n        state: started\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u043b\u0435\u0439\u0431\u0443\u043a\u0430"}),"\n",(0,l.jsxs)(n.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u043b\u0435\u0439\u0431\u0443\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,l.jsx)(n.code,{children:"ansible-playbook"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ansible-playbook simple-playbook.yml -kK -i inventory\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u041e\u043f\u0446\u0438\u0438 ",(0,l.jsx)(n.code,{children:"-kK"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043f\u0430\u0440\u043e\u043b\u044f SSH \u0438 sudo, \u0430 ",(0,l.jsx)(n.code,{children:"-i"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0438\u043d\u0432\u0435\u0440\u0442\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430."]})})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var l=s(7294);const i={},o=l.createContext(i);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);