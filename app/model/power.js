'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    roleCode: { type: DataTypes.STRING(20), allowNull: false },
    pagePath: { type: DataTypes.STRING(40), allowNull: false },
    allow: { type: DataTypes.STRING(100), unique: true },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'roleCode', 'pagePath' ], unique: true },
    { fields: [ 'valid' ] },
  ];

  const Power = app.model.define('power', columns, { indexs });

  Power.prototype.associate = function() {
    app.model.Power.belongsTo(app.model.Role, { as: 'role', foreignKey: 'roleCode' });
    app.model.Power.belongsTo(app.model.Page, { as: 'page', foreignKey: 'pagePath' });
  };

  return Power;
};