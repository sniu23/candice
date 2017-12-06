'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    code: { type: DataTypes.STRING(20), unique: true, allowNull: false },
    name: { type: DataTypes.STRING(20), unique: true, allowNull: false },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'code' ], unique: true },
    { fields: [ 'name' ], unique: true },
    { fields: [ 'valid' ] },
  ];

  const Role = app.model.define('role', columns, { indexs });

  Role.prototype.associate = function() {
    app.model.Role.hasMany(app.model.User, { as: 'users', foreignKey: 'roleCode' });
    app.model.Role.hasMany(app.model.Power, { as: 'powers', foreignKey: 'roleCode' });
  };

  return Role;
};