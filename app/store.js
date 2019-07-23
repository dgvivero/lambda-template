const Sequelize = require('sequelize');

let db ='';

db = {
    host: "3.218.78.31",//host,
    port: 6432,//5432,
    database: 'sme_instance',
    username: 'masteruser',
    password: 'hE*G:rsd2#f8(c>]',
    dialect:'postgres',
    logging: false
  };

  const sequelize = new Sequelize(db);

  module.exports =  {sequelize, Sequelize}