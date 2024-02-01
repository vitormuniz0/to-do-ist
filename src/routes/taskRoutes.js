import express from "express";
import taskController from "../controllers/taskController.js";

const router = express.Router();

// Rota para listar todas as tarefas
router.get("/tasks", async (req, res) => {
  const tasks = await taskController.getAllTasks(req, res);
  res.status(200).json(tasks);
});

router.get("/tasks/:id", async (req, res) => {
  const taskId = req.params.id
  const tasks = await taskController.getAllTasksId(taskId);
  res.status(200).json(tasks);
});

// Rota para adicionar uma nova tarefa
router.post("/tasks", async (req, res) => {
  const newTask = await taskController.createTask(req.body, res);
  res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa
router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await taskController.updateTask(req, res);
  res.json(updatedTask);
});

// Rota para deletar uma tarefa
router.delete("/tasks/:id", async (req, res) => {
  const taskId = req.params.id
  const message = await taskController.deleteTask(taskId);
  res.json(message);
});

export default router;