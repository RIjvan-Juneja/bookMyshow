'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'user_id' });
      Booking.belongsTo(models.Event, { foreignKey: 'event_id' });
      Booking.belongsTo(models.EventDateTimeMapping, { foreignKey: 'edt_id' });
    }
  }
  Booking.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
        key: 'id'
      },
      allowNull: false
    },
    seat_number: DataTypes.INTEGER,
    edt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'EventDateTimeMapping',
        key: 'id'
      },
      allowNull: false
    },
    status: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Booking',
    timestamps: false
  });
  return Booking;
};
