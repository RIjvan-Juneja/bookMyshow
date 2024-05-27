'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      Seat.belongsTo(models.SeatsCategory, { foreignKey: 'seats_category' });
    }
  }
  Seat.init({
    seat_start: DataTypes.INTEGER,
    seat_end: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    seats_category: {
      type: DataTypes.INTEGER,
      references: {
        model: 'seats_category',
        key: 'id'
      },
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Seat',
    tableName: 'seats',
    timestamps: false
  });
  return Seat;
};
