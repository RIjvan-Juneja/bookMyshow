'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventAttachment extends Model {
    static associate(models) {
      EventAttachment.belongsTo(models.Event, { foreignKey: 'event_id' });
    }
  }
  EventAttachment.init({
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'events',
        key: 'id'
      },
      allowNull: false
    },
    attachmentPath: DataTypes.STRING,
    fileType: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'EventAttachment',
    tableName: 'event_attachments',
    timestamps: false
  });
  return EventAttachment;
};
