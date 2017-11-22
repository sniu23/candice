'use strict';

// const path = require('path');
const sequelizeOp = require('../lib/sequelizeOp');

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + 'secret',
    middleware: [],
    sequelize: {
      define: {
        timestamps: true, // createdAt, updatedAt
        paranoid: false, // deletedAt
        underscore: false, // camelcase
        freezeTableName: true, // s
        charset: 'utf8',
        collate: 'utf8_general_ci',
        operatorsAliases: sequelizeOp,
      },
    },
  };

  return config;
};
