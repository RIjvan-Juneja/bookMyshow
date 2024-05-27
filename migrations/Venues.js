'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    static associate(models) {
      Venue.belongsTo(models.User, { foreignKey: 'user_id' });
      Venue.hasMany(models.Event, { foreignKey: 'venue_id' });
    }
  }
  Venue.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Venue',
    tableName: 'venues',
    timestamps: false
  });
  return Venue;
};
