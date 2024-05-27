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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false
    },
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'events',
        key: 'id'
      },
      allowNull: false
    },
    seatNumber: DataTypes.INTEGER,
    edtId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event_date_time_mapping',
        key: 'id'
      },
      allowNull: false
    },
    status: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'booking',
    timestamps: false
  });
  return Booking;
};
