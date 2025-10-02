# Whispyr - A Real Time Chat Application

Whispyr is a real-time chat application built with the **MERN stack**, **Zustand**, **DaisyUI**, **Tailwind CSS**, **Toast**, **Socket.IO**, and **Vite**.  
It supports instant messaging with authentication, media upload via Cloudinary, and a clean, responsive interface.

<img width="1852" height="1013" alt="image" src="https://github.com/user-attachments/assets/2d6d1824-ed7c-4690-a24b-de979ef2ddc9" />


---

## Features

- Real-time messaging powered by Socket.IO  
- User authentication with JSON Web Tokens (JWT)  
- Cloudinary integration for image/media uploads  
- State management with Zustand  
- Responsive UI with Tailwind CSS and DaisyUI  
- Toast notifications for instant feedback  
- MongoDB Atlas for scalable cloud database storage  
- Modern frontend workflow using Vite  

---

## Project Structure

```

.
├── backend     # Node.js + Express + MongoDB Atlas + Cloudinary
└── frontend    # React + Vite + Zustand + Tailwind + DaisyUI

````

---

## Installation & Setup

### Prerequisites
- Node.js (>= 16.x recommended)  
- MongoDB Atlas account and connection string  
- Cloudinary account (for media uploads)  

### Clone the Repository
```bash
git clone https://github.com/your-username/realtime-chat-webapp.git
cd realtime-chat-webapp
````

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will start at **[http://localhost:5000](http://localhost:5000)** (configurable in `.env`).

### Frontend Setup

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on **[http://localhost:5173](http://localhost:5173)** by default.

---

## Environment Variables

Create a `.env` file inside the `backend` directory with the following:

```
PORT=5000

# MongoDB Atlas connection
MONGO_URI=your_mongodb_atlas_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Usage

1. Start the backend server (`npm run dev` inside `/backend`)
2. Start the frontend (`npm run dev` inside `/frontend`)
3. Open the frontend URL in your browser
4. Register/Login and start chatting in real time
5. Upload images/files that are stored on Cloudinary

---

## Tech Stack

* **Frontend**: React, Vite, Zustand, Tailwind CSS, DaisyUI, Toast
* **Backend**: Node.js, Express, MongoDB Atlas, JWT, Cloudinary
* **Real-time Communication**: Socket.IO

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.
