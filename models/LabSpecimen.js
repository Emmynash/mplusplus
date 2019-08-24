'use strict';
module.exports = (sequelize, DataTypes) => {
  const LabSpecimen = sequelize.define('LabSpecimen', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(32),
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
      underscored: true,
  });
  LabSpecimen.associate = function(models) {
    // associations can be defined here
  };
  return LabSpecimen;
};