---
sidebar_position: 4
---

# Ansible. Ad-Hoc команды

![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&color=red&logoColor=white#gh-light-mode-only)
![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&color=red&logoColor=white#gh-dark-mode-only)

:::tip Что это?
Ansible Ad-Hoc команды - это способ выполнения быстрых одноразовых задач на удаленных хостах без необходимости написания и использования плейбуков. Они могут использоваться для быстрой проверки работы конкретной функциональности или для выполнения иных операций на удаленных хостах.
:::

Некоторые из часто используемых команд Ansible Ad-Hoc:

### **Ping** команда
    
    ```bash
    ansible all -m ping
    ```
    
    Проверяет, доступен ли удаленный хост и возвращает успех, если удаленный хост ответил.
    
### Команда для управления пакетами
    
    ```bash
    ansible all -m package -a "name=<package_name> state=<state>"
    ```
    
    Позволяет устанавливать, обновлять или удалять пакеты на удаленных хостах.
    
### Команда для создания пользователя
    
    ```bash
    ansible all -m user -a "name=<username> password=<password>"
    ```
    
    Создает новых пользователей на удаленных хостах.
    
### Команда для копирования файлов
    
    ```bash
    ansible all -m copy -a "src=<source_path> dest=<destination_path>"
    
    ```
    
    Копирует файлы или директории с локального хоста на удаленные хосты.
    
### Команда для выполнения произвольных команд
    
    ```bash
    ansible all -m shell -a "<command>"
    ```
    
    Позволяет выполнять произвольные команды на удаленных хостах.
    

Каждая команда начинается с команды `ansible`, далее указывается список хостов или групп хостов (`-i <inventory_file>`, если используется пользовательский файл инвентаря), затем указывается модуль, после чего следует список аргументов.