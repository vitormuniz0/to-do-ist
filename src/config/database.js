import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('task', 'vitor', '12345678', {
  host: 'localhost',
  dialect: 'postgres' // especificando o banco PostgreSQL
});

export default sequelize;