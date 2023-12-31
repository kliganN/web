---
sidebar_position: 10
---

# Настройка маршрутизации и NAT между двумя подсетями

![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

Предположим, что у нас есть две подсети: `192.168.1.0/24` и `192.168.2.0/24`, и мы хотим настроить маршрутизацию и NAT между ними.

## Настройка маршрутизации

Для того, чтобы пакеты могли проходить между подсетями, нужно добавить маршруты на системах.

Предположим, что у нас есть три устройства:

- `Система 1` с IP-адресом `192.168.1.5`
- `Система 2` с IP-адресом `192.168.2.5`
- `Маршрутизатор` с двумя интерфейсами: `192.168.1.6` и `192.168.2.6`

Чтобы настроить маршрутизацию с `Системы 1` на `Систему 2`, нужно выполнить следующую команду на `Системе 1`:

```bash
ip route add 192.168.2.0/24 via 192.168.1.6
```

Здесь:

- `192.168.2.0/24` — это подсеть, в которую мы хотим попасть.
- `192.168.1.6` — это IP-адрес маршрутизатора, через который мы хотим отправить пакеты.

Аналогично, чтобы настроить маршрутизацию с `Системы 2` на `Систему 1`, нужно выполнить следующую команду на `Системе 2`:

```bash
ip route add 192.168.1.0/24 via 192.168.2.6
```

Здесь:

- `192.168.1.0/24` — это подсеть, в которую мы хотим попасть.
- `192.168.2.6` — это IP-адрес маршрутизатора, через который мы хотим отправить пакеты.

## Настройка NAT

Чтобы настроить NAT на маршрутизаторе, нужно выполнить следующую команду:

```bash
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -j MASQUERADE
```

Здесь:

- `-t nat` указывает на таблицу NAT.
- `-A POSTROUTING` указывает на цепочку POSTROUTING.
- `-s 192.168.1.0/24` указывает на исходную подсеть, которую мы хотим перевести через NAT.
- `-j MASQUERADE` указывает на действие MASQUERADE, которое заменит исходный IP-адрес на IP-адрес