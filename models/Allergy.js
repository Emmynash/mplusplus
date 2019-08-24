'use strict';
module.exports = (sequelize, DataTypes) => {
  const Allergy = sequelize.define('Allergy', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    emr_id: {
      allowNull: false,
      index: true,
      type: DataTypes.STRING(32),
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING(32)
    },
    user_name: {
      type: DataTypes.STRING(32)
    },
    legacy_emr_id: {
      type: DataTypes.STRING(32)
    },
    first_name: {
      type: DataTypes.STRING(32)
    },
    last_name: {
      type: DataTypes.STRING(32)
    },
    other_names: {
      type: DataTypes.STRING(32)
    },
    patient_name: {
      type: DataTypes.STRING(32)
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
    city: {
      type: DataTypes.STRING(32),
    },
    state: {
      type: DataTypes.STRING(32),
    },
    occupation: {
      type: DataTypes.STRING(32),
    },
    primary_phone: {
      type: DataTypes.STRING(32),
    },
    work_phone: {
      type: DataTypes.STRING(32),
    },
    email: {
      type: DataTypes.STRING(32),
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  Allergy.associate = function(models) {
    // associations can be defined here
    Allergy.belongsTo(models.Patient, {as: 'patient'});
  };
  return Allergy;
};