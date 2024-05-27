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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
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
    created_at: {
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
