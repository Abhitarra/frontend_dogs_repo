# 🐶 Dog Manager Frontend

A modern React-based frontend application for managing dog breeds and sub-breeds.
This application allows users to **create, read, update, and delete (CRUD)** dog data with a clean dashboard UI.

---

## 🚀 Features

* 🔐 Authentication (Login / Signup)
* 🔄 Reset Password functionality
* 📊 Dashboard with sidebar navigation
* 🔍 Search dogs by breed
* ➕ Create new dog entries
* ✏️ Update sub-breeds
* 🗑️ Soft delete dogs
* 📄 About page with application details
* 📱 Responsive UI (mobile + desktop)

---

## 🧱 Tech Stack

* ⚛️ React.js
* 🎨 CSS (custom styling)
* 🌐 Fetch API / Axios
* 🔐 JWT Authentication (from backend)

---

## 📁 Project Structure

```
src/
 ├── components/
 │     ├── Navbar.js
 │     ├── Sidebar.js
 │
 ├── pages/
 │     ├── Login.js
 │     ├── Signup.js
 │     ├── ResetPasswordPage.js
 │     ├── Dogs.js
 │     ├── Create.js
 │     ├── Update.js
 │     ├── Delete.js
 │     ├── About.js
 │
 ├── services/
 │     ├── authService.js
 │     ├── dogService.js
 |     |── api.js
 │ 
 ├── utils/
 │     ├── auth.js
 ├── css/
 │     ├── *.css
 │
 ├── App.js
 ├── index.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/Abhitarra/frontend_dogs_repo.git
cd frontend-dogs-app
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Start Application

```
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 🔗 Backend Integration

Make sure your backend is running:

```
http://localhost:5000
```

Update API base URL in:

```
src/services/authService.js
src/services/dogService.js
```

---

## 🔐 Authentication Flow

* User logs in → JWT token stored in `localStorage`
* Token sent in API headers:

  ```
  Authorization: Bearer <token>
  ```
* Protected routes require valid login

---

## 🧪 Sample API Usage

```
GET    /dogs/fetch
POST   /dogs/create
PUT    /dogs/update/:id
DELETE /dogs/delete/:id
```

---

## 🎯 Key Functional Pages

### 🔍 Dogs Dashboard

* Search by breed
* Pagination support
* Delete functionality

### ➕ Create Page

* Add breed & sub-breeds
* Validation with success message

### ✏️ Update Page

* Search dog
* Add sub-breed dynamically

### 🗑️ Delete Page

* Search & delete dog with confirmation

### 🔐 Reset Password

* Validate current password
* Strong password rules

---

## ⚠️ Important Notes

* Use correct casing for file names (React is case-sensitive)
* Ensure backend APIs are running
* Store JWT token securely
* Follow validation rules for forms

---

## 👨‍💻 Author

**Abhishek Tarra**

---

## ✨ Future Improvements

* 🔔 Toast notifications
* 📊 Charts & analytics
* 🌙 Dark mode
* 📧 OTP-based password reset
* 🧠 Advanced search filters

---

## ⭐ Acknowledgment

This project is built for learning and demonstrating full-stack development skills using **React + Node.js + MongoDB**.

---

✨ *Happy Coding!* 🚀
