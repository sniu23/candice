'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    path: { type: DataTypes.STRING(50), unique: true, primaryKey: true },
    name: { type: DataTypes.STRING(20), unique: true },
    action: { type: DataTypes.STRING(200) },
    father: { type: DataTypes.STRING(50), defaultValue: '' },
    isLeaf: { type: DataTypes.BOOLEAN(), defaultValue: true },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'name' ], unique: true },
    { fields: [ 'status' ] },
  ];

  const Page = app.model.define('page', columns, { indexs });

  Page.prototype.associate = function() {
    app.model.Page.hasMany(app.model.Power, { as: 'powers', foreignKey: 'pagePath' });
  };

  return Page;
};