---
sidebar_position: 12
---

# Docker Compose. Сети

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

:::note
Данная заметка показывает использование Docker сетей для отделения трафика между фронтендом и бэкендом.
:::

## Docker сети.

Docker сети позволяют контейнерам взаимодействовать друг с другом, а также изолировать трафик между ними. Это полезно, когда необходимо отделить трафик между пользовательским интерфейсом (фронтендом) и бэкендом для безопасности и масштабируемости.

## Пример использования Docker сетей

Для отделения трафика между фронтендом и бэкендом с помощью Docker сетей, необходимо определить две сети: `frontend` и `backend`. Например, для запуска сервисов Redis, PostgreSQL, web и backweb можно использовать следующую конфигурацию:

```yaml
version: '2'

services:
  redis:
    image: redis
    networks:
      - backend

  db:
    image: postgres:9.4
    networks:
      - backend

  web:
    image: foot-app
    networks:
      - frontend
      - backend

  backweb:
    image: foot-app
    networks:
      - frontend
      - backend

networks:
  frontend:
  backend:
```

В этом примере `networks` определяет сети, которые будут использоваться для связи контейнеров. Обратите внимание, что сервисы `redis` и `db` используют только сеть `backend`, в то время как сервисы `foot` и `backfoot` используют и `frontend`, и `backend`.

Для запуска контейнеров с использованием Docker сетей выполните следующую команду:

```bash
docker-compose up -d
```
:::warning
Обратите внимание, что контейнеры, находящиеся в разных сетях, не могут общаться друг с другом напрямую. Если необходимо обеспечить связь между контейнерами в разных сетях, можно использовать механизмы маршрутизации и проксирования.
:::