'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventDateTimeMapping extends Model {
    static associate(models) {
      EventDateTimeMapping.belongsTo(models.Event, { foreignKey: 'event_id' });
      EventDateTimeMapping.belongsTo(models.DateTime, { foreignKey: 'date_id' });
    }
  }
  EventDateTimeMapping.init({
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'events',
        key: 'id'
      },
      allowNull: false
    },
    dateId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'date_time',
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
    modelName: 'EventDateTimeMapping',
    tableName: 'event_date_time_mapping',
    timestamps: false
  });
  return EventDateTimeMapping;
};
