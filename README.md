# WebSocket Photo Uploader

## Требования
Убедитесь, что у вас установлены следующие инструменты:
- Docker
- Docker Compose
- Node.js и npm
- Python 3

## Шаги для запуска проекта

### 1. Настройка Backend:
1. Перейдите в папку `backend`:
   ```bash
   cd backend
2. Установите зависимости для backend:
```
python3 -m pip install --no-cache-dir -r requirements.txt
```
3. Соберите и запустите backend с помощью Docker Compose:
```
docker compose up -d --build
```

### 2. Настройка Frontend:
1. После запуска backend вернитесь в корневую папку:
```
cd ..
```
2. Перейдите в папку frontend:
```
cd frontend
```
3. Установите зависимости:
```
npm install
```
4. Запустите frontend:
```
npm run dev
```
5. Доступ к приложению:
После запуска backend и frontend откройте браузер и перейдите по адресу:
http://localhost:5173

Примечания:

Убедитесь, что backend работает, прежде чем запускать frontend.
Backend по умолчанию слушает на порту http://localhost:8000