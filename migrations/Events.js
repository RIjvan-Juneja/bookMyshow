'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.Venue, { foreignKey: 'venue_id' });
      Event.belongsTo(models.User, { foreignKey: 'user_id' });
      Event.hasMany(models.EventCategoryMapping, { foreignKey: 'event_id' });
      Event.hasMany(models.EventAttachment, { foreignKey: 'event_id' });
      Event.hasMany(models.EventDateTimeMapping, { foreignKey: 'event_id' });
      Event.hasMany(models.Booking, { foreignKey: 'event_id' });
    }
  }
  Event.init({
    venueId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'venues',
        key: 'id'
      },
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};
