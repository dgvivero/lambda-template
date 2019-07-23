const { sequelize, Sequelize }  = require('../store');

const Entity = sequelize.define('Entity',{
      id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      onboarding: Sequelize.BOOLEAN
    }, {underscored: true, tableName:'roles', sequelize });



module.exports = Entity;