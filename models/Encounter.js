'use strict';
module.exports = (sequelize, DataTypes) => {
    const Encounter = sequelize.define('Encounter', {
        id: {
            type: DataTypes.STRING(32),
            primaryKey: true,
            // allowNull: false,
        },
        emr_id: {
            allowNull: true,
            index: true,
            type: DataTypes.STRING(32),
        },
        /*
          Encounter Type
          - Consultation (Not Accessible to Patient with billing profile set as Walk-In)
          - Follow Up  (Not Accessible to Patient with billing profile set as Walk-In)
          - Walk In
          - Admission
        */
        encounter_type_name: {
            type: DataTypes.STRING(32),
        },
        encounter_type_id: {
            type: DataTypes.STRING(32),
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
        triaged: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        triaged_date: {
            type: DataTypes.DATE,
        },
        triaged_by: {
            type: DataTypes.STRING(32),
        },
        triaged_by_id: {
            type: DataTypes.STRING(32),
        },
        reason: {
            type: DataTypes.STRING
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
        referral_user_id: {
            type: DataTypes.STRING(32),
        },
        referral_user_name: {
            type: DataTypes.STRING(32),
        },
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
    Encounter.associate = function(models) {
        // associations can be defined here
        Encounter.belongsTo(models.Patient, { as: 'patient', foreignKey: 'patient_id' });
        Encounter.belongsTo(models.EncounterType, { as: 'encounter_type', foreignKey: 'encounter_type_id' });
    };
    return Encounter;
};