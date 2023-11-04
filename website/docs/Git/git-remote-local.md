---
sidebar_position: 15
---

# Git. Связь существующего локального репозитория с удаленным

Чтобы создать локальный репозиторий и синхронизировать его с удаленным репозиторием через SSH, выполните следующие шаги:

1. Создайте локальный репозиторий на вашем компьютере. Для этого перейдите в папку, где вы хотите создать репозиторий, и выполните команду:

```bash
git init .
```

1. Добавьте файлы в локальный репозиторий. Для этого выполните команду:

```bash
git add .
```

Она добавит все файлы из текущей папки в индекс Git.

1. Зафиксируйте изменения в локальном репозитории. Для этого выполните команду:

```bash
git commit -m "added"
```

1. Создайте удаленный репозиторий на сервере. Для этого следуйте инструкциям вашего хостинг-провайдера. Обычно это можно сделать через веб-интерфейс.
2. Добавьте SSH-ключ на сервер, чтобы иметь возможность выполнить синхронизацию через SSH.
3. Добавьте удаленный репозиторий в локальный репозиторий. Для этого выполните команду:

```bash
git remote set-url origin git@github.com:username/repo.git
```

Замените `user` на имя пользователя на сервере, `server` на имя сервера и `path/to/repo.git` на путь к удаленному репозиторию на сервере.

1. Отправьте изменения из локального репозитория в удаленный репозиторий. Для этого выполните команду:

```bash
git push -u origin main
```

Эта команда отправит изменения из локального репозитория в удаленный репозиторий и установит отслеживание ветки `master`. После этого вы сможете выполнять `git push` без указания имени удаленного репозитория и ветки:

```bash
git push
```

Эта команда отправит изменения из локального репозитория в удаленный репозиторий.