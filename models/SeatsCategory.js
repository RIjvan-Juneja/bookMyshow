'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeatsCategory extends Model {
    static associate(models) {
      SeatsCategory.belongsTo(models.User, { foreignKey: 'user_id' });
      SeatsCategory.hasMany(models.Seat, { foreignKey: 'seats_category' });
    }
  }
  SeatsCategory.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
      allowNull: false
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'SeatsCategory',
    tableName: 'seats_category',
    timestamps: false
  });
  return SeatsCategory;
};
