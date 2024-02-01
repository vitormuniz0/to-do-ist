import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tasks', 'root', 'vitormuniz', {
  host: 'localhost',
  dialect: 'mysql' // especificando o banco PostgreSQL
});

export default sequelize;