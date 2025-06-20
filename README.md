# ✅ Task Manager API (Backend)

This is a backend service to create, update, retrieve, and delete tasks. It is built using **Node.js**, **Express.js**, and **MongoDB** as part of the **Keploy API Fellowship** assignment.

---

## 🚀 Features

- ✅ Add new tasks with title and description
- ✅ Retrieve all existing tasks
- ✅ Update tasks (including marking as completed)
- ✅ Delete tasks by ID
- ✅ MongoDB integration with Mongoose
- ✅ Tested with Postman
- ✅ RESTful API architecture

---

## ⚙️ Technologies Used

- Node.js + Express
- MongoDB (with Mongoose)
- dotenv
- Postman (for API testing)

---

## 🛠️ Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/sraj5252/task-manager-api.git
cd task-manager-api
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

## 📁 Project Structure

```
task-manager-api/
├── server.js
├── .env
├── README.md
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
```

## 📝 Assumptions

- MongoDB is assumed to be running locally.
- No authentication or user management is implemented.
- Basic error handling and validation for simplicity.

---

## 📬 Contact

For questions or feedback, contact **sraj80525@gmail.com**
