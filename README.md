Создание проекта

- Создаем папку и открываем терминал
- Инициализируем проект:
  npm init -y

- В корне создаем index.js
- Создаем константу token
- Устанавливаем пакеты:
  npm i node-telegram-bot-api nodemon
Пишем код...



Деплой бота на сервер

Покупаем VPS

- Открываем терминал в поекте локально и подключаемся к серверу по реквизитам -
прописывыем ssh root@22.222.222.22 (адрес будет другой)
Вводим пароль (его прислали на почту)

- Установливаем и обновляем компоненты системы
sudo apt update

- Через файловый менеджер заливаем файлы (создаем папку в корне)
- Переходим в папку проекта: cd /bot_template

- Устанавливаем Node.js и пакетный менеджер npm:
sudo apt install nodejs     /
sudo apt install npm

- Обновим Node js и npm, после выполняем перезапуск сервера:
sudo npm install -g n       /
sudo n stable

- Заново подключаемся по ssh
- Переходим в папку проекта
cd /bot_template

- Устанавливаем все зависимости
npm i

- Устанавливаем pm2 для запуска бота
npm i pm2 -g

- Запуск бота на сервере
  pm2 start index.js

- Сохраняем настройки 
pm2 save

- Пишем команду на автоматическое подключение
pm2 startup

- Сохраняем настройки
  pm2 save

