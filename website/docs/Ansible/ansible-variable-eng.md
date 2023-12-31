---
sidebar_position: 13
---

# Ansible. Variable

![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&color=red&logoColor=white#gh-light-mode-only)
![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&color=red&logoColor=white#gh-dark-mode-only)

:::tip
Ansible позволяет хранить различные данные и конфигурации в переменных. Это удобно, если вы хотите хранить разную информацию для разных хостов, например, параметры конфигурации, порты, IP-адреса и т.д. В Ansible есть два способа определения переменных: в инвентарном файле и в плейбуке.
:::

## Определение переменных в инвентарном файле

Вы можете определить переменные в инвентарном файле, используя формат `hostname ansible_variable=value`. Например:

```bash
web http_port=8081 snmp_port=161-162 inter_ip_range=192.0.2.0
```

## Определение переменных в плейбуке

Вы также можете определить переменные непосредственно в плейбуке, используя инструкцию `vars`. Например:

```yaml title="vars.yml"
- name: add dns server
  hosts: localhost
  vars:
    dns_server: 10.1.250.10
  tasks:
    - lineinfile:
        path: /etc/resolv.conf
        line: 'nameserver '{{ dns_server }}'
```

### Использование файлов переменных

Хорошей практикой является хранение переменных в отдельных файлах YAML. Например, вы можете создать файл `variables-web.yml` со следующим содержимым:

```yaml title="variables-web.yml"
http_port: 8081
snmp_port: 161-162
inter_ip_range: 192.0.2.0
```

Затем вы можете использовать инструкцию `vars_file` в плейбуке, чтобы подключить этот файл переменных. Например:

```yaml
- name: Configure web servers
  hosts: web
  vars_file:
    - variables-web.yml
  tasks:
    - name: Install Apache web server
      yum:
        name: httpd
        state: present
```

### Использование Jinja2 Templating

В Ansible для использования переменных внутри строк необходимо заключать их в двойные фигурные скобки и кавычки. Например, `'nameserver '{{ dns_server }}'`. Это называется Jinja2 Templating и является мощной возможностью Ansible, которая позволяет использовать переменные внутри строк и динамически формировать конфигурационные файлы и команды на основе значений переменных.