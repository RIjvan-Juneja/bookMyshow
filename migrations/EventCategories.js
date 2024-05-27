'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventCategory extends Model {
    static associate(models) {
      EventCategory.hasMany(models.EventCategoryMapping, { foreignKey: 'category_id' });
    }
  }
  EventCategory.init({
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'EventCategory',
    tableName: 'event_categories',
    timestamps: false
  });
  return EventCategory;
};
