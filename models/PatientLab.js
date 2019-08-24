'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientLab = sequelize.define('PatientLab', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    service_request_id: { // to come from patientMicroservice
      type: DataTypes.STRING(32),
    },
    //TODO: Add More Fields about the service request like date time
    encounter_id: {
      type: DataTypes.STRING(32),
    },
    //TODO: Add additional Encounter Fields
    service_id: {
      type: DataTypes.STRING(32),
      index: true,
    },
    //TODO: add more field about the service
    /* Patient Demographic Information */
    emr_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    legacy_emr_id: {
      type: DataTypes.STRING(32),
    },
    first_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    other_names: {
      type: DataTypes.STRING(32),
    },
    name: {
      type: DataTypes.STRING(32),
    },
    dob: {
      type: DataTypes.DATE,
    },
    marital_status: {
      type: DataTypes.STRING(32),
    },
    sex: {
      type: DataTypes.STRING(32),
    },
    place_of_birth: {
      type: DataTypes.STRING(32),
    },
    address: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.STRING(32),
    },
    state: {
      type: DataTypes.STRING(32),
    },
    local_government: {
      type: DataTypes.STRING(32),
    },
    occupation: {
      type: DataTypes.STRING(32),
    },
    country: {
      type: DataTypes.STRING(32),
    },
    billing_profile_id: {
      type: DataTypes.STRING(32),
    },
    billing_profile_name: {
      type: DataTypes.STRING(32),
    },
    insurance_scheme_id: {
      type: DataTypes.STRING(32),
    },
    insurance_scheme_policy_number: {
      type: DataTypes.STRING(32),
    },
    insurance_scheme_name: {
      type: DataTypes.STRING(32),
    },
    /* user */
    pathologist_user_id: { //pathologist
      type: DataTypes.STRING(32),
    },
    pathologist_user_name: {
      type: DataTypes.STRING(32),
    },
    /* user */
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
  PatientLab.associate = function(models) {
    // associations can be defined here
    PatientLab.belongsTo(models.Lab);
  };
  return PatientLab;
};