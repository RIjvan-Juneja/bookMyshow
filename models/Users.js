'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
        User.belongsTo(models.Role, { foreignKey: 'role_id' });
        User.hasMany(models.Venue, { foreignKey: 'user_id' }); // id may be
        User.hasMany(models.Event, { foreignKey: 'user_id' }); // id may be
        User.hasMany(models.Booking, { foreignKey: 'user_id' }); // id may be
      }
    }
    User.init({
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      mobile_number: DataTypes.STRING,
      salt: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      address: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    }, {
      sequelize,
      updatedAt : 'updated_at',
      modelName: 'User',
      tableName: 'users',
      timestamps: false
    });
    return User;
  };
