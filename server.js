const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api/tasks', taskRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve frontend index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Connect to MongoDB and conditionally start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    // Only start the server if not running tests
    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () =>
        console.log(`Server running at http://localhost:${PORT}`)
      );
    }
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });

// Export app for testing
module.exports = app;
