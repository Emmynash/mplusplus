'use strict';
module.exports = (sequelize, DataTypes) => {
  const LabTemplate = sequelize.define('LabTemplate', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(32),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
      underscored: true,
  });
  LabTemplate.associate = function(models) {
    // associations can be defined here
  };
  return LabTemplate;
};