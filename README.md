# Event people - агрегатор творческих людей

---

## Установка и локальный запуск

----
Склонируйте репозиторий на свой компьютер

- Убедитесь, что у вас установлен Docker и Docker Compose последних версий
- Перейдите в папку deploy
- Запустите проект командами docker-compose up --build
- Проект доступен по адресу http://localhost:8001/

### Разработка backend: docker-compose.dev.yml 

```bash
docker compose -f docker-compose.dev.yml up --build
```

### Разработка frontend без подгрузки node_modules: docker-compose.dev.front.yml 

```bash
docker compose -f docker-compose.dev.front.yml up --build
```