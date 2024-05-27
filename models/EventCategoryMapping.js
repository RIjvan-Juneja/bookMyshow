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
        model: 'events',
        key: 'id'
      },
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event_categories',
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
    tableName: 'event_category_mapping',
    timestamps: false
  });
  return EventCategoryMapping;
};
