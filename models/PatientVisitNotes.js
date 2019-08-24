'use strict';
module.exports = (sequelize, DataType) => {
    const PatientVisitNotes = sequelize.define('PatientVisitNotes', {
        id: {
            type: DataType.STRING(32),
            primaryKey: true,
        },
        encounter_id: {
            allowNull: false,
            type: DataType.STRING(32),
            index: true
        },
        emr_id: {
            allowNull: false,
            index: true,
            type: DataType.STRING(32),
        },
        date_of_entry: {
            type: DataType.DATE,
            allowNull: false,
            default: new Date()
        },
        noted_by: {
            type: DataType.STRING(32),
            allowNull: false,
        },
        decription: {
            type: DataType.TEXT,
            allowNull: false,
            lowercase: false
        },
        hospital_visited: {
            type: DataType.STRING,
        },
        note_type: {
            type: DataType.STRING,
        },
        reason: {
            type: DataType.STRING, //ENUM('normal', 'admission', 'antenatal')
            allowNull: false,
        },
        source_app: {
            type: DataType.STRING
        },
        module: {
            type: DataType.STRING,
            allowNull: false
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

    PatientVisitNotes.associate = function(models) {
        // define PatientVisitNotes association
        PatientVisitNotes.belongsTo(models.Patient, {
            as: 'patient',
            foreignKey: 'patient_id'
        });
        PatientVisitNotes.belongsTo(models.Encounter, {
            as: 'encounter',
            foreignKey: 'encounter_id'
        });
    }

    return PatientVisitNotes;
};