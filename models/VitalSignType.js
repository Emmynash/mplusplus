'use strict';
module.exports = (sequelize, DataTypes) => {
  const VitalSignType = sequelize.define('VitalSignType', {
    // name: DataTypes.STRING
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    min_value: {
      type: DataTypes.INTEGER
    },
    max_value: {
      type: DataTypes.INTEGER
    },
    regex: {
      type: DataTypes.STRING,
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  VitalSignType.associate = function(models) {
    // associations can be defined here
  };
  return VitalSignType;
};