// require('dotenv').config();

module.exports = {
  development: {
    host: process.env.SEQUELIZE_HOST || 'localhost',
    dialect: process.env.SEQUELIZE_DIALECT || 'mysql',
    username: process.env.SEQUELIZE_USERNAME || 'root',
    password: process.env.SEQUELIZE_PASSWORD || 'mysql',
    database: process.env.SEQUELIZE_DATABASE || 'restful',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
      underscored: false,
      freezeTableName: true,
    },
    timezone: '+07:00',
  },
  test: {
    host: process.env.SEQUELIZE_HOST || 'localhost',
    dialect: process.env.SEQUELIZE_DIALECT || 'mysql',
    username: process.env.SEQUELIZE_USERNAME || 'root',
    password: process.env.SEQUELIZE_PASSWORD || 'mysql',
    database: process.env.SEQUELIZE_DATABASE || 'restful',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
      underscored: false,
      freezeTableName: true,
    },
    timezone: '+07:00',
  },
  production: {
    host: process.env.SEQUELIZE_HOST || 'localhost',
    dialect: process.env.SEQUELIZE_DIALECT || 'mysql',
    username: process.env.SEQUELIZE_USERNAME || 'root',
    password: process.env.SEQUELIZE_PASSWORD || 'mysql',
    database: process.env.SEQUELIZE_DATABASE || 'restful',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
      underscored: false,
      freezeTableName: true,
    },
    timezone: '+07:00',
  },
};
