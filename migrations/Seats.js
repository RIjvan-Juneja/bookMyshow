'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      Seat.belongsTo(models.SeatsCategory, { foreignKey: 'seats_category' });
    }
  }
  Seat.init({
    seatStart: DataTypes.INTEGER,
    seatEnd: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    seatsCategory: {
      type: DataTypes.INTEGER,
      references: {
        model: 'seats_category',
        key: 'id'
      },
      allowNull: false
    },
    createdAt: {
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
