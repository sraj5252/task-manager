# ✅ Task Manager API (Full Stack)

This is a full-stack Task Management web app built with **Node.js**, **Express.js**, **MongoDB**, and a frontend using **HTML/CSS/JavaScript**. Built as part of the **Keploy API Fellowship** to demonstrate API creation, database integration, and frontend interaction.

---

## 🚀 Features

- ✅ Add, retrieve, update, and delete tasks
- ✅ Mark tasks as completed
- ✅ Simple frontend UI for interacting with API
- ✅ RESTful API tested via Postman and frontend
- ✅ Clean UI with hover effects and transitions
- ✅ MongoDB integration for data persistence

---

## ⚙️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Frontend**: HTML, CSS, JavaScript
- **Testing**: Postman, Fetch API
- **Dev Tools**: dotenv, nodemon

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sraj5252/task-manager.git
cd task-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
```

### 4. Start Mongo

Make sure both services are running:

- **MongoDB**:
  ```bash
  mongoose
  ```

  ### 5. Start the Application

```bash
node app.js
```

Visit `http://localhost:5000/api/tasks` to verify the server is running.

---

## 📮 API Endpoints

### ➤ Create a Task

**POST** `/api/tasks`

**Request Body:**
```json
{
  "title": "Complete Keploy Assignment",
  "description": "Build API server with MongoDB"
}
```

### ➤ Get All Tasks

**GET** `/api/tasks`

**Example:**
```
GET /api/tasks
```

Response:
```json
[
  {
    "_id": "60f72a0c8fc4a92b983f2214",
    "title": "Complete Keploy Assignment",
    "description": "Build API server with MongoDB",
    "completed": false,
    "createdAt": "2025-06-20T12:00:00.000Z",
    "updatedAt": "2025-06-20T12:00:00.000Z"
  }
]
```

### ➤ Update a Task

**PUT** `/api/tasks/:id`

**Example:**
```
PUT /api/tasks/60f72a0c8fc4a92b983f2214
```
Request Body:
```json
{
  "title": "Updated Task Title",
  "description": "Updated task description",
  "completed": true
}
```

Response:
```json
{
  "_id": "60f72a0c8fc4a92b983f2214",
  "title": "Updated Task Title",
  "description": "Updated task description",
  "completed": true,
  "createdAt": "2025-06-20T12:00:00.000Z",
  "updatedAt": "2025-06-20T13:00:00.000Z"
}
```

### ➤ Delete a Task

**DELETE** `/api/tasks/:id`

**Example:**
```
DELETE /api/tasks/60f72a0c8fc4a92b983f2214
```

Response:
```json
{
  "message": "Task deleted"
}
```

---

## 🖥️ Frontend Interface

A basic responsive UI is available to manage tasks from the browser.

### ✨ Features

- Add tasks  
- View all tasks  
- Mark as completed  
- Delete tasks  
- Styled with smooth, modern design

## 📁 Frontend Structure

```
frontend/
├── index.html   # UI layout
├── style.css    # Beautiful responsive styling
└── script.js    # Fetch API for interaction
```


### 💻 To Run:

**Start backend:**

```bash
node server.js
```

**Open in browser:**

```
http://localhost:5000
```

## 📁 Project Structure

```
task-manager-api/
├── server.js
├── .env
├── package.json
├── README.md
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

## 📝 Assumptions

- MongoDB is assumed to be running locally.
- No authentication or user management is implemented.
- Basic error handling and validation for simplicity.

---

## 📬 Contact

For questions or feedback, contact **sraj80525@gmail.com**
