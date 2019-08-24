'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lab = sequelize.define('Lab', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(32),
    },
    service_id: {
      type: DataTypes.STRING(32),
      index: true,
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
  Lab.associate = function(models) {
    // associations can be defined here
    Lab.hasMany(models.LabTemplate, { as: 'lab_templates', foreignKey: 'lab_template_id' });
  };
  return Lab;
};