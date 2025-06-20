const API_URL = 'http://localhost:5000/api/tasks';

document.getElementById('task-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description })
  });

  document.getElementById('task-form').reset();
  loadTasks();
});

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const container = document.getElementById('task-list');
  container.innerHTML = '';

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = `
      <strong>${task.title}</strong> - ${task.description || 'No description'}<br/>
      <small>Status: ${task.completed ? '✅ Completed' : '❌ Pending'}</small><br/>
      <button onclick="markCompleted('${task._id}')">Mark Completed</button>
      <button onclick="deleteTask('${task._id}')">Delete</button>
    `;
    container.appendChild(div);
  });
}

async function markCompleted(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true })
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  loadTasks();
}

loadTasks();
