# Wallet dashboard

## Запуск базы данных

В корневой папке

```bash
docker-compose up
```

Применение миграций

```bash
cd backend
```

Через Go

```bash
go run migrator/*.go
```

Через Makefile

```bash
make migrations
```

## Запуск бэкенда

```bash
cd backend
```

Через Go

```bash
go run main.go
```

Через Makefile

```bash
make run
```

## Запуск фронтенда

```bash
cd frontend

npm run dev
```
