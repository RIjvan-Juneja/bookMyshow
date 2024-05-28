'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DateTime extends Model {
    static associate(models) {
      DateTime.hasMany(models.EventDateTimeMapping, { foreignKey: 'date_id' });
    }
  }
  DateTime.init({
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'DateTime',
    timestamps: false
  });
  return DateTime;
};
