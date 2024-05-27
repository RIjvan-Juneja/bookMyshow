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
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'events',
        key: 'id'
      },
      allowNull: false
    },
    date_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'date_time',
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
    modelName: 'EventDateTimeMapping',
    tableName: 'event_date_time_mapping',
    timestamps: false
  });
  return EventDateTimeMapping;
};
