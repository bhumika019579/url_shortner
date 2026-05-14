# 🔗 URL Shortener

A full-stack URL Shortener web application that allows authenticated users to generate short URLs, manage them securely, and track total clicks for each shortened link.

## 🚀 Live Demo

🌐 Live Site: https://urlshortner-production-8cb0.up.railway.app

## 📂 GitHub Repository

🔗 GitHub: https://github.com/bhumika019579/url_shortner.git

---

# ✨ Features

* 🔐 User Authentication using JWT
* 👤 Signup/Login/Logout functionality
* 🔗 Generate unique short URLs using NanoID
* 🌍 Redirect to original URL using generated short ID
* 📊 Track total clicks for every shortened URL
* 📁 User-specific dashboard
* 🛡️ Protected routes for authenticated users
* 💾 PostgreSQL database integration with Prisma ORM

---

# 🛠️ Tech Stack

## Frontend

* HTML
* CSS
* JavaScript
* EJS

## Backend

* Node.js
* Express.js

## Database & ORM

* PostgreSQL
* Prisma ORM

## Authentication

* JWT (JSON Web Token)

## Utilities

* NanoID

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/bhumika019579/url_shortner.git
```

## 2️⃣ Navigate to the project folder

```bash
cd url_shortner
```

## 3️⃣ Install dependencies

```bash
npm install
```

## 4️⃣ Setup environment variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
```

## 5️⃣ Run Prisma migrations

```bash
npx prisma migrate dev
```

## 6️⃣ Start the server

```bash
npm start
```

---

# 📸 Project Workflow

1. User signs up or logs in
2. Authenticated users can generate shortened URLs
3. NanoID creates a unique short ID
4. Visiting the short URL redirects to the original website
5. Every visit increases the total click count
6. Users can only view and manage their own URLs

---

# 📚 What I Learned

* JWT Authentication & Authorization
* Backend Routing with Express.js
* Database Management using Prisma ORM
* PostgreSQL Integration
* URL Redirection Logic
* User-specific Data Handling
* Full Stack Development Workflow

---

# 📌 Future Improvements

* QR Code generation for shortened URLs
* Copy-to-clipboard functionality
* Custom short URLs
* URL expiration feature
* Advanced analytics dashboard

---

# 👩‍💻 Author

Made with ❤️ by Bhumika
