import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Файл базы будет создан в корне backend
  logging: false,
});

export default sequelize;