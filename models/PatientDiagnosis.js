'use strict';
module.exports = (sequelize, DataType) => {
    const PatientDiagnosis = sequelize.define('PatientDiagnosis', {
        id: {
            type: DataType.STRING(32),
            primaryKey: true,
        },
        emr_id: {
            allowNull: false,
            index: true,
            type: DataType.STRING(32),
        },
        encounter_id: {
            allowNull: false,
            type: DataType.STRING(32),
            index: true
        },
        date_of_entry: {
            type: DataType.DATE,
            allowNull: false,
            default: new Date()
        },
        diagnosed_by: {
            type: DataType.STRING
        },
        diagnosis_note: {
            type: DataType.TEXT,
            lowercase: false
        },
        diagnosis_type: {
            type: DataType.STRING,
        },
        diagnosis: {
            type: DataType.STRING,
        },
        status: {
            type: DataType.STRING //ENUM('differential', 'confirmed', 'history', 'query')
        },
        severity: {
            type: DataType.STRING //ENUM('acute', 'chronic', 'recurrent')
        },
        active: {
            type: DataType.STRING,
            allowNull: false
        },
        hospital_diagnosed: {
            type: DataType.STRING
        },
        in_parent_id: {
            type: DataType.STRING(32),
        },
        body_part_id: {
            type: DataType.STRING(32),
        },
        created_at: {
            type: DataType.DATE,
            default: new Date()
        },
        updated_at: {
            type: DataType.DATE,
            default: new Date()
        }
    });

    PatientDiagnosis.associate = function(models) {
        // define PatientDiagnosis association
        PatientDiagnosis.belongsTo(models.Patient, {
            as: 'patient',
            foreignKey: 'patient_id'
        });
        PatientDiagnosis.belongsTo(models.Encounter, {
            as: 'encounter',
            foreignKey: 'encounter_id'
        });
    }

    return PatientDiagnosis;
};