# SynaSphere

SynaSphere is a full‑stack MERN social feed prototype built as part of a learning project. The application demonstrates a clean, modern React frontend connected to a Node.js/Express backend with MongoDB, supporting full CRUD functionality for posts.

The focus of this project is **clarity, separation of concerns, and conventional structure**, rather than premature optimisation or heavy abstractions.

---

## ✨ Features

* Create, read, update, and delete posts (CRUD)
* React + TypeScript frontend (Vite)
* Express + MongoDB backend
* Clean component and page separation
* CSS handled via dedicated `.css` files (no inline styles)
* Simple REST API service layer
* Mobile‑first, responsive layout

---

## 🧱 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* CSS (global + component‑level styles)

### Backend

* Node.js
* Express
* MongoDB + Mongoose

---

## 📁 Project Structure (Client)

```
client/src
├── components
│   └── PostCard.tsx
├── pages
│   └── Feed.tsx
├── services
│   └── api.ts
├── styles
│   ├── Feed.css
│   └── PostCard.css
├── types
│   └── post.ts
├── index.css        # global styles
├── main.tsx
└── App.tsx
```

---

## 🔌 API Overview

The frontend communicates with the backend via a small service layer.

Example operations:

* `GET /posts` – fetch all posts
* `POST /posts` – create a post
* `PUT /posts/:id` – update a post
* `DELETE /posts/:id` – delete a post

All API calls are abstracted in `client/src/services/api.ts`.

---

## 🎨 Styling Approach

* **Global styles** live in `index.css`
* **Component/page styles** live in `src/styles/`
* No inline styles or CSS‑in‑JS
* Emphasis on readability and maintainability

---

## 🚧 Current Status

* Core CRUD functionality complete
* Styling foundation in place
* Backend and frontend fully connected

Planned next steps:

* Inline editing within PostCard
* Loading & error states
* Authentication (Firebase or JWT)
* Favourites / wishlist feature

---

## 🧪 Learning Goals

This project was built to practice:

* Type‑safe React patterns
* State updates with immutability
* API integration and data flow
* Clean Git workflow
* Conventional frontend architecture

---

## 📌 Notes

This is a prototype and learning project, not a production‑ready application. The emphasis is on **understanding why things work**, not just making them work.

---

## 🧑‍💻 Author

Rū Phoenix
