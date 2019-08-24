'use strict';
module.exports = (sequelize, DataTypes) => {
  const Referral = sequelize.define('Referral', {
    // name: DataTypes.STRING
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    emr_id: {
      allowNull: false,
      index: true,
      type: DataTypes.STRING(32),
    },
    // patient: {
    //   allowNull: false,
    //   type: Schema.Types.ObjectId, ref: 'Patient'
    // },
    clinical_finding: {
      type: DataTypes.STRING(32),
    },
    investigation: {
      type: DataTypes.STRING(32),
    },
    provisional_diagnoses: {
      type: DataTypes.STRING(32), //There is possibility of making this an embeded array
    },
    cancelled: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    cancelled_date: {
      type: DataTypes.DATE,
    },
    cancelled_by: {
      type: DataTypes.STRING(32),
    },
    cancelled_by_id: {
      type: DataTypes.STRING(32),
    },
    reason: {
      type: DataTypes.STRING,
    },
    sensitivity: {
      type: DataTypes.STRING(32), //{Low, Medium, High}
    },
    facility_name: {
      type: DataTypes.STRING(32),
    },
    facility_id: {
      type: DataTypes.STRING(32),
    },
    specialization_name: {
      type: DataTypes.STRING(32),
    },
    specialization_id: {
      type: DataTypes.STRING(32),
    },
    department_name: {
      type: DataTypes.STRING(32),
    },
    department_id: {
      type: DataTypes.STRING(32),
    },
    user_id: {
      type: DataTypes.STRING(32),
    },
    user_name: {
      type: DataTypes.STRING(32),
    },
    // encounter: {
    //   type: Schema.Types.ObjectId, ref: 'Encounter' //(Back to Back Relationship)
    // },
    // encounter_id: {
    //   type: Schema.Types.ObjectId,
    // },
    encounter_type_name: {
      type: DataTypes.STRING(32),
    },
    encounter_type_id: {
      type: DataTypes.STRING(32),
    },
    // encounter_type: {
    //   type: Schema.Types.ObjectId, ref: 'EncounterType'
    // },
    legacy_emr_id: {
      type: DataTypes.STRING(32),
    },
    first_name: {
      type: DataTypes.STRING(32),
    },
    last_name: {
      type: DataTypes.STRING(32),
    },
    other_names: {
      type: DataTypes.STRING(32),
    },
    patient_name: {
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
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  Referral.associate = function(models) {
    // associations can be defined here
    Referral.belongsTo(models.Patient, { as: 'patient' });
    Referral.belongsTo(models.Encounter, { as: 'encounter', foreignKey: 'encounter_id' });
    Referral.belongsTo(models.EncounterType, { as: 'encounter_type' });
  };
  return Referral;
};