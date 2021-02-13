import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';

new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: 'mysql',
  database: 'restful',
  models: [path.join(__dirname, '../entities/implements/sequelize')],
});
