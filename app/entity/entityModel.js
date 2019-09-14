const { sequelize, Sequelize }  = require('../store');

const Entity = sequelize.define('Entity',{
      id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      active: Sequelize.BOOLEAN
    }, {underscored: true, tableName:'Entity', sequelize });



module.exports = Entity;