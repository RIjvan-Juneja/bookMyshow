'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User, { foreignKey: 'role_id' });
      Role.belongsToMany(models.Permission, {
        through: models.RolePermission,
        foreignKey: 'role_id'
      });
    }
  }
  Role.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: false
  });
  return Role;
};
