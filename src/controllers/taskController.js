import Task from '../models/task.js';

class TaskController {
  // Create
  async createTask(taskData) {
    if(!taskData || !taskData.nome){
      throw new Error('O campo "nome" é obrigatório.');
    }
    const task = await Task.create(taskData);
    return { message: "Task added successfully!", task };
  }

  // Read
  async getAllTasks() {
    const tasks = await Task.findAll();
    return tasks;
  }

  async getAllTasksId(id) {
    const tasks = await Task.findByPk(id);
    if(!Task){
      throw new Error("Tarefa não encontrada.");
    }
    
    return tasks;
  }

  // Update
  async updateTask(id, updatedData) {
    await Task.update(updatedData, { where: { id } });
    return { message: "Task updated successfully!" };
  }

  // Delete
  async deleteTask(id) {
    await Task.destroy({ where: { id } });
    return { message: "Task deleted successfully!" };
  }
}

export default new TaskController();