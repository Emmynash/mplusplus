'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientLabSpecimen = sequelize.define('PatientLabSpecimen', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    physician_user_id: {
      type: DataTypes.STRING(32),
    },
    physician_user_name: {
      type: DataTypes.STRING(32),
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  PatientLabSpecimen.associate = function(models) {
    // associations can be defined here
    PatientLabSpecimen.belongsTo(models.Lab, { as: "lab", foreignKey: "lab_id"});
    PatientLabSpecimen.belongsTo(models.PatientLab, { as: "patient_lab", foreignKey: "patient_lab_id"});
    PatientLabSpecimen.belongsTo(models.LabSpecimen, { as: "lab_specimen", foreignKey: "lab_specimen_id"});
  };
  return PatientLabSpecimen;
};