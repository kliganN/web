---
sidebar_position: 4
---

# Git. Настройка

## Git. Настройка конфига

С самого начала рекомендуется настроить конфиг нашего Git.

Конфиг настраивается командой `git config`, где:

- `git config` - изменение конфигурации Git
- `--global` - изменение глобальной конфигурации для всех репозиториев

Для настройки имени автора используйте команду:

```bash
git config --global user.name "gituser"
```

Для настройки вашего e-mail используйте команду:

```bash
git config --global user.email "your@mail.ru"
```

Чтобы проверить настройки Git, выполните команду:

```bash
git config --list
```
:::note
Таким образом, вы можете легко настроить Git, установив имя автора и e-mail, что позволит вам использовать Git для управления версиями вашего проекта и взаимодействия с другими разработчиками.
:::

Так же не забываем добавить отображение ветки для ssh подключений.
В файле ~/.bashrc вставляем это:
```bash
PS1='\u@\h:\w$(__git_ps1 " (%s)")\$ '
```