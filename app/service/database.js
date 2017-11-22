'use strict';

module.exports = app => {

  class DatabaseService extends app.Service {
    * sync(force) {
      yield this.app.model.sync({force})
    }

    * tableSync(model) {
      yield this.app.model[model].sync({force: false})
    }
    
  }
  return DatabaseService;
};
