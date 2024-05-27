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
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
        key: 'id'
      },
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event_categories',
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
    modelName: 'EventCategoryMapping',
    tableName: 'event_category_mapping',
    timestamps: false
  });
  return EventCategoryMapping;
};
