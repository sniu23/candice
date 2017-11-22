'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  app.get('/database/sync/:force', 'database.sync');
  app.get('/table/:model/sync', 'database.tableSync');
  
};
