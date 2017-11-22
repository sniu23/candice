'use strict';

module.exports = appInfo => {
  const config = {
    sequelize: {
      dialect: 'mysql',
      database: 'system',
      host: '127.0.0.1',
      port: '3306',
      username: 'username',
      password: 'password',
      pool: {
        max: 2,
        min: 0,
        idle: 10000,
      },
    },
  };

  return config;
};
