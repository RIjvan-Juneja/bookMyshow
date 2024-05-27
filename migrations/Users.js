'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
        User.belongsTo(models.Role, { foreignKey: 'role_id' });
        User.hasMany(models.Venue, { foreignKey: 'user_id' });
        User.hasMany(models.Event, { foreignKey: 'user_id' });
        User.hasMany(models.Booking, { foreignKey: 'user_id' });
      }
    }
    User.init({
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      mobileNumber: DataTypes.STRING,
      salt: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
      address: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: DataTypes.DATE
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: false
    });
    return User;
  };
