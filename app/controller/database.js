'use strict';

module.exports = app => {
  class DatabaseController extends app.Controller {
    // * user() {
    //   yield this.ctx.service.sync.user();
    //   this.ctx.body = 'user sync';
    // }

    // * declare() {
    //   yield this.ctx.service.sync.declare();
    //   this.ctx.body = 'declare sync';
    // }

    // * receipt() {
    //   yield this.ctx.service.sync.receipt();
    //   this.ctx.body = 'receipt sync';
    // }

    * sync() {
      const force = this.ctx.params.force || false;
      yield this.ctx.service.database.sync(force);
      this.ctx.body = `database sync { force: ${force} } finish! `
    }

    * tableSync() {
      const model = this.ctx.params.model;
      yield this.ctx.service.database.tableSync(model);
      this.ctx.body = `database model: ${model} sync finish! `
    }

  }
  return DatabaseController;
};
