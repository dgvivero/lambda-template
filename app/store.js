const Sequelize = require('sequelize');

const db = {
  dialect: 'sqlite',
  storage: 'mydb.sqlite',
  logging: false
}
const sequelize = new Sequelize(db);

module.exports =  {sequelize, Sequelize}