'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    no: { type: DataTypes.STRING(20), unique: true, primaryKey: true },
    name: { type: DataTypes.STRING(20), unique: true },
    password: { type: DataTypes.STRING(64), allowNull: false },
    mail: { type: DataTypes.STRING(50) },
    mobile: { type: DataTypes.STRING(20) },
    roleCode: { type: DataTypes.STRING(20), allowNull: false },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'name' ], unique: true },
    { fields: [ 'status' ] },
  ];

  const User = app.model.define('user', columns, { indexs });

  User.prototype.associate = function() {
    app.model.User.belongsTo(app.model.Role, { as: 'role', foreignKey: 'roleCode' });
  };

  return User;
};