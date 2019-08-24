'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
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
    user_id: {
      type: DataTypes.STRING(32),
    },
    user_name: {
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
    primary_phone: {
      type: DataTypes.STRING(32),
    },
    secondary_phone: {
      type: DataTypes.STRING(32),
    },
    work_phone: {
      type: DataTypes.STRING(32),
    },
    email: {
      type: DataTypes.STRING(32),
    },
    employer_name: {
      type: DataTypes.STRING(32),
    },
    employer_address: {
      type: DataTypes.TEXT,
    },
    employer_phone: {
      type: DataTypes.STRING(32),
    },
    emergency_contact_name: {
      type: DataTypes.STRING(32),
    },
    emergency_contact_phone: {
      type: DataTypes.STRING(32),
    },
    emergency_contact_address: {
      type: DataTypes.TEXT,
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
    preferred_notification_language: {
      type: DataTypes.STRING(32),
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  Doctor.associate = function(models) {
    // associations can be defined here
  };
  return Doctor;
};