# Contact Book

A full-featured web application for viewing and locally editing a list of contacts.  
Built with **Next.js**, **React**, **Tailwind CSS**, and **shadcn/ui**.

---

## Main Features

- View all contacts in a styled table
- Click on a contact to see full details
- Edit contact information directly on the details page
- Save updates locally (localStorage or useContext)
- Confirmation toast on save
- Fully responsive and accessible UI

---

## Contact Fields

- `id`
- `name`
- `email`
- `phone`
- `address`
- `dateOfBirth`

---

## Project Structure

contact-book/
├── src/
│ ├── app/
│ │ ├── contacts/
│ │ │ ├── page.tsx # Contact list view
│ │ │ └── [id]/page.tsx # Contact detail/edit page
│ ├── components/ # Reusable UI components
│ ├── context/ # Optional: contact context
│ └── lib/ # Data helpers (e.g. from localStorage)
├── public/
├── styles/
│ └── globals.css # Tailwind styles
├── tailwind.config.ts
└── README.md

## Tech Stack

- [Next.js (App Router)]
- [React]
- [Tailwind CSS]
- [shadcn/ui]
- [localStorage]
- TypeScript

## How to Run the Project

# 1. Clone the repository

git clone https://github.com/IvanVoshchepynets/contact-book.git

# 2. Navigate into the project folder

cd contact-book

# 3. Install dependencies

npm install

# 4. Start the development server

npm run dev

# 5. Open in your browser

http://localhost:3000

# Contact Book

Повнофункціональний вебзастосунок для перегляду та локального редагування списку контактів.  
Побудований з використанням **Next.js**, **React**, **Tailwind CSS** та **shadcn/ui**.

## Основні можливості

- Перегляд усіх контактів у стилізованій таблиці
- Перехід до детальної інформації при натисканні на контакт
- Редагування даних контакту безпосередньо на сторінці
- Збереження змін локально (у `localStorage` або через `useContext`)
- Підтвердження збереження через toast-повідомлення
- Повністю адаптивний та доступний інтерфейс

## Поля контакту

- `id`
- `name` — ім’я
- `email`
- `phone` — номер телефону
- `address` — адреса
- `dateOfBirth` — дата народження

## Структура проєкту

contact-book/
├── src/
│ ├── app/
│ │ ├── contacts/
│ │ │ ├── page.tsx # Список контактів
│ │ │ └── [id]/page.tsx # Детальна сторінка контакту
│ ├── components/ # Універсальні UI-компоненти
│ ├── context/ # (Необов’язково) Контекст контактів
│ └── lib/ # Хелпери для роботи з localStorage
├── public/
├── styles/
│ └── globals.css # Tailwind стилі
├── tailwind.config.ts
└── README.md

## 🧰 Технології

- [Next.js (App Router)])
- [React]
- [Tailwind CSS]
- [shadcn/ui]
- `localStorage`
- TypeScript

## Як запустити проєкт

# 1. Клонувати репозиторій

git clone https://github.com/IvanVoshchepynets/contact-book.git

# 2. Перейти до папки з проєктом

cd contact-book

# 3. Встановити залежності

npm install

# 4. Запустити локальний сервер

npm run dev

# 5. Відкрити у браузері

http://localhost:3000
