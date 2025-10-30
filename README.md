

### 🛒 Vibe — Full Stack E-Commerce Project

A full-stack shopping cart web application built using **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB Atlas (database)**.
The app allows users to browse products, add them to the cart, and checkout securely.

---

## 🚀 Live Demo

* ** (Vercel):** [https://cart-ecru-sigma.vercel.app](https://cart-ecru-sigma.vercel.app)


---

## 🧩 Tech Stack

### 🖥️ Frontend

* React.js (Vite)
* Axios for API calls
* React Router DOM
* Tailwind CSS / CSS modules for styling

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB Atlas (Mongoose ODM)
* dotenv for environment configuration
* CORS enabled for cross-origin requests

---

## 🧱 Project Structure

```
Cart/
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   │   ├── products.js
│   │   │   ├── cart.js
│   │   │   └── checkout.js
│   │   └── models/
│   │       └── Product.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚡ Setup Instructions (Local)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Cart.git
cd Cart
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🌐 Deployment

### Frontend (Vercel)

1. Push your frontend folder to GitHub.
2. Import the repo to [Vercel](https://vercel.com/).
3. Select the `frontend` directory as your root.
4. Deploy!

### Backend (Render)

1. Import repo to [Render](https://render.com/).
2. Set:

   * Root directory → `backend`
   * Build command → `npm install`
   * Start command → `npm start`
3. Add `MONGO_URI` in Render’s **Environment Variables**.
4. Deploy 🚀

---

## 🧠 Features

* 🛍️ View product catalog
* 🛒 Add/remove items from cart
* 💳 Checkout functionality
* 🌐 RESTful API with Express
* ☁️ Hosted backend (Render) & frontend (Vercel)

---

## 🧰 Example API Endpoints

| Method | Endpoint        | Description        |
| :----- | :-------------- | :----------------- |
| GET    | `/api/products` | Fetch all products |
| POST   | `/api/cart`     | Add item to cart   |
| POST   | `/api/checkout` | Complete purchase  |

---

## 📷 Screenshots

<img width="1906" height="923" alt="image" src="https://github.com/user-attachments/assets/e0091408-bded-4f8d-b33c-5d9bdc33be5b" />
<img width="1852" height="893" alt="image" src="https://github.com/user-attachments/assets/f0cdf215-0208-458b-975e-6cb7dbeca1e7" />

---

## 🧑‍💻 Author

**Muskan Agrawal**
