'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    path: { type: DataTypes.STRING(40), unique: true, allowNull: false },
    name: { type: DataTypes.STRING(20), unique: true, allowNull: false },
    icon: { type: DataTypes.STRING(20) },
    action: { type: DataTypes.STRING(100) },
    father: { type: DataTypes.STRING(40), defaultValue: '' },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'path' ], unique: true },
    { fields: [ 'name' ], unique: true },
    { fields: [ 'valid' ] },
  ];

  const Page = app.model.define('page', columns, { indexs });

  Page.prototype.associate = function() {
    app.model.Page.hasMany(app.model.Power, { as: 'powers', foreignKey: 'pagePath' });
  };

  return Page;
};