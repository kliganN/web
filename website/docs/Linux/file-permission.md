---
sidebar_position: 4
---

# Разрешения файлов

![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

Чтобы просмотреть права доступа к файлу, используйте команду `ls -l` с указанием пути к файлу:

```bash
ls -l /home/user/script.sh
```

Результатом выполнения этой команды будет строка, которая покажет все разрешения на права использования. Например:

```bash
-rw-r--r-- 1 gordeev gordeev 0 Jun 14 11:09 script.sh
```

Для файлов используются несколько типов прав доступа: read (чтение), write (запись) и execute (исполнение). Каждый тип прав доступа представлен одним из трех символов: r, w, x.

Например, `-rwxr-xr--` означает, что это обычный файл, доступный пользователю на чтение, запись и исполнение, пользователь состоит в группе, и другой пользователь в этой группе не может записывать в файл, но может просматривать и запускать его без изменений. Если пользователь находится в другой группе, он может только читать файл.

Каждый тип прав доступа представлен четырьмя битами. Чтение - 4 бита, запись - 2 бита, исполнение - 1 бит, без доступа - 0 бит.

Чтобы изменить права доступа, используйте команду `chmod`. Например:

```bash
chmod u+rwx script.sh
```

Здесь `u` - это пользователь, `rwx` - полный доступ для пользователя. Для групп и остальных пользователей используйте `g` и `o` соответственно.

```bash
chmod ugo+r-x script.sh
```

Здесь `r` (чтение) разрешено всем пользователям, но `x` (исполнение) запрещено.

```bash
chmod o-rwx script.sh
```

Здесь полный доступ для всех остальных пользователей (не владельца и не в группе) закрыт.
:::danger

Давать полный доступ не разобравшись в правах может быть **НЕБЕЗОПАСНО!**

:::

Также можно использовать числовой формат для задания прав доступа. Например:

- **777** - полный доступ для всех пользователей (ugo)
- **555** - чтение и выполнение для всех пользователей (ugo)
- **660** - чтение и запись для владельца и группы, запрет на все остальное
- **750** - полный доступ для владельца, чтение и выполнение для группы, доступ закрыт для остальных

Чтобы изменить владельца или группу файла, используйте команды `chown` и `chgrp`. Например:

```bash
chown root:root dir
chown user1:devs my-file
chown user1 gzip.tar
```

Где, `root:root` - новый владелец и группа для `dir`, `user1:devs` - новый владелец и группа для `my-file`, `user1` - новый владелец для `gzip.tar`. Используйте `chgrp` для изменения только группы файла. Например:

```bash
chgrp devops dir
```
:::tip
Эти инструкции помогут вам управлять правами доступа и владельцами файлов в системе Linux.
:::