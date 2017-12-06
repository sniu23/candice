'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const columns = {
    no: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    name: { type: DataTypes.STRING(20), allowNull: false },
    password: { type: DataTypes.STRING(32), allowNull: false },
    mail: { type: DataTypes.STRING(40) },
    mobile: { type: DataTypes.STRING(20) },
    roleCode: { type: DataTypes.STRING(20), allowNull: false },
    valid: { type: DataTypes.BOOLEAN(), defaultValue: true },
  };

  const indexs = [
    { fields: [ 'no' ], unique: true },
    { fields: [ 'name' ] },
    { fields: [ 'roleCode' ] },
    { fields: [ 'valid' ] },
  ];

  const User = app.model.define('user', columns, { indexs });

  User.prototype.associate = function() {
    app.model.User.belongsTo(app.model.Role, { as: 'role', foreignKey: 'roleCode' });
  };

  return User;
};