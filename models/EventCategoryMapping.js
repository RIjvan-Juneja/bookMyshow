'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventCategoryMapping extends Model {
    static associate(models) {
      EventCategoryMapping.belongsTo(models.Event, { foreignKey: 'event_id' });
      EventCategoryMapping.belongsTo(models.EventCategory, { foreignKey: 'category_id' });
    }
  }
  EventCategoryMapping.init({
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
        key: 'id'
      },
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'EventCategory',
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
    modelName: 'EventCategoryMapping',
    timestamps: false
  });
  return EventCategoryMapping;
};
