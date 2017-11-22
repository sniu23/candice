'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    roleCode: { type: DataTypes.STRING(20), primaryKey: 'RolePage' },
    pagePath: { type: DataTypes.STRING(50), primaryKey: 'RolePage' },
    allow: { type: DataTypes.STRING(200), unique: true },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'status' ] },
  ];

  const Power = app.model.define('power', columns, { indexs });

  Power.prototype.associate = function() {
    app.model.Power.belongsTo(app.model.Role, { as: 'role', foreignKey: 'roleCode' });
    app.model.Power.belongsTo(app.model.Page, { as: 'page', foreignKey: 'pagePath' });
  };

  return Power;
};