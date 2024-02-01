import express from "express";
import sequelize from "./src/config/database.js";
import taskRoutes from "./src/routes/taskRoutes.js";

const app = express();
const PORT = 3000;


// Inicializando Sequelize
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    await sequelize.sync(); // Sincroniza os modelos com o banco de dados
    console.log("Modelos sincronizados com sucesso!");
  } catch (error) {
    console.error("Falha ao conectar com o banco de dados:", error);
  }
})();

app.use(express.json()); // Para lidar com JSON
app.use("/api", taskRoutes); // Integrando as rotas de tarefas

app.listen(PORT, () => {
  console.log(`Servidor tá na área em <http://localhost>:${PORT} 🚀`);
});