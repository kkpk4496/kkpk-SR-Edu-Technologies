const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample tasks array to store tasks
let tasks = [];

// API endpoint to get tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// API endpoint to add a new task
app.post("/api/tasks", (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
