
class TaskController {
    constructor(){
        this.tasks = [];
    }

     // Create
    createTask(req, res) {
        this.tasks.push(req.body);
        return res.json({ message: "Task added successfully!" });
    }

    // Read
    getAllTasks(req, res) {
        return res.json(this.tasks);
    }

    // Update - simulando por enquanto
    updateTask(req, res) {
        const task = this.tasks.find(x => x.id == req.params.id);
        const taskId = this.tasks.indexOf(task);
        this.tasks.splice(taskId, 0 , req.body)
        return res.json({ message: "Task updated successfully!" });
    }

    // Delete - simulando por enquanto
    deleteTask(req, res) {
        const task = this.tasks.find(x => x.id == req.params.id);
        const taskId = this.tasks.indexOf(task);             //EXCLUINDO RECEITA
        this.tasks.splice(taskId, 1);
        return res.json({ message: "Task deleted successfully!" });
    }

}


export default new TaskController();