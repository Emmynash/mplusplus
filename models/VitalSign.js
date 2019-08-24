'use strict';
module.exports = (sequelize, DataTypes) => {
  const VitalSign = sequelize.define('VitalSign', {
    // name: DataTypes.STRING,
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    emr_id: {
      allowNull: false,
      index: true,
      type: DataTypes.STRING,
    },
    // patient: {
    //   allowNull: false,
    //   type: Schema.Types.ObjectId, ref: 'Patient'
    // },
    vital_sign_value: {
      type: DataTypes.INTEGER
    },
    vital_sign_type_min_value: {
      type: DataTypes.INTEGER
    },
    vital_sign_type_max_value: {
      type: DataTypes.INTEGER
    },
    vital_sign_type_unit: {
      type: DataTypes.STRING,
    },
    vital_sign_type_name: {
      type: DataTypes.STRING,
    },
    vital_sign_type_regex: {
      type: DataTypes.STRING,
    },
    // vital_sign_type_id: {
    //   type: Schema.Types.ObjectId
    // },
    // vital_sign_type: {
    //   type: Schema.Types.ObjectId, ref: 'VitalSignType'
    // },
    // encounter_id: {
    //   type: Schema.Types.ObjectId,
    // },
    // encounter: {
    //   type: Schema.Types.ObjectId, ref: 'Encounter' //(Back to Back Relationship)
    // },
    encounter_type_name: {
      type: DataTypes.STRING,
    },
    // encounter_type_id: {
    //   type: Schema.Types.ObjectId
    // },
    // encounter_type: {
    //   type: Schema.Types.ObjectId, ref: 'EncounterType'
    // },
    user_id: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    legacy_emr_id: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    other_names: {
      type: DataTypes.STRING,
    },
    patient_name: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    marital_status: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.STRING,
    },
    place_of_birth: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    primary_phone: {
      type: DataTypes.STRING,
    },
    work_phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    billing_profile_id: {
      type: DataTypes.STRING,
    },
    billing_profile_name: {
      type: DataTypes.STRING,
    },
    insurance_scheme_id: {
      type: DataTypes.STRING,
    },
    insurance_scheme_policy_number: {
      type: DataTypes.STRING,
    },
    insurance_scheme_name: {
      type: DataTypes.STRING,
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {});
  VitalSign.associate = function(models) {
    // associations can be defined here
    VitalSign.belongsTo(models.Patient, { as: 'patient' });
    VitalSign.belongsTo(models.VitalSignType, { as: 'vital_sign_type' });
    VitalSign.belongsTo(models.Encounter, { as: 'encounter' });
    VitalSign.belongsTo(models.EncounterType, { as: 'encounter_type' });
  };
  return VitalSign;
};