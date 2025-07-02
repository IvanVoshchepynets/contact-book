# Contact Book

A full-featured web application for viewing and locally editing a list of contacts.  
Built with **Next.js**, **React**, **Tailwind CSS**, and **shadcn/ui**.

---

## 🔑 Main Features

- View all contacts in a styled table
- Click on a contact to see full details
- Edit contact information directly on the details page
- Save updates locally (localStorage or useContext)
- Confirmation toast on save
- Fully responsive and accessible UI

---

## 📚 Contact Fields

- `id`
- `name`
- `email`
- `phone`
- `address`
- `dateOfBirth`

---

## 📁 Project Structure

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

## 🛠 Tech Stack

- [Next.js (App Router)]
- [React]
- [Tailwind CSS]
- [shadcn/ui]
- [localStorage]
- TypeScript

## 🚀 How to Run the Project

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
