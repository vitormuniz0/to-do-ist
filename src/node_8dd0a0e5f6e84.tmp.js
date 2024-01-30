import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json()); //Para lidar com json
app.use('/api', taskRoutes);//integrando as  rotas de tarefas


// Aqui entram as configurações do servidor, como middlewares...

app.listen(PORT, () => {
    console.log(`Servidor tá na área em <http://localhost>:${PORT} 🚀`);
});