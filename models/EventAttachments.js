'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventAttachment extends Model {
    static associate(models) {
      EventAttachment.belongsTo(models.Event, { foreignKey: 'event_id' });
    }
  }
  EventAttachment.init({
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
        key: 'id'
      },
      allowNull: false
    },
    attachment_path: DataTypes.STRING,
    file_type: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'EventAttachment',
    timestamps: false
  });
  return EventAttachment;
};
