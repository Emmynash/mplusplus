'use strict';
module.exports = (sequelize, DataTypes) => {
  const LabTemplateData = sequelize.define('LabTemplateData', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING(32)
    },
    reference: {
      type: DataTypes.STRING(32)
    },
    unit: {
      type: DataTypes.STRING(32),
    },
    analyte: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    value_type: {
      type: DataTypes.ENUM,
      values: ['COMMENT', 'TEXT', 'NUMBER'],
      defaultValue: 'TEXT',
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
      underscored: true,
  });
  LabTemplateData.associate = function(models) {
    // associations can be defined here
    LabTemplateData.belongsTo(models.LabTemplate, { as: 'lab_templates', foreignKey: 'lab_template_id' });
  };
  return LabTemplateData;
};