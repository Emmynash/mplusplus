var ModelGraphQLType = require('./VitalSignType').VitalSignType;
var ArgFieldTypes = require('./VitalSignType').ArgFieldTypes;
// var Model = require('../../models/VitalSign');

const models = require("../../models");

module.exports = {
    type: ModelGraphQLType,
    args: ArgFieldTypes,
    resolve: async(root, args) => {
        const encounter = await models.Encounter.findOne({
            where: args.encounter_id,
            include: [{
                model: 'EncounterType',
                as: 'encounter_type',
            }, {
                model: 'Patient',
                as: 'patient'
            }]
        });

        if (!encounter) {
            throw new Error('Encounter does not exist');
        }
        const patient = encounter.patient;
        const vitalSignType = await models.VitalSignType.findById(args.vital_sign_type_id);
        if (!vitalSignType) {
            throw new Error('VitalSignType does not exist');
        }
        const record = await models.VitalSign.create(Object.assign({}, args, {
            emr_id: patient.emr_id,
            patient: patient._id,
            legacy_emr_id: patient.legacy_emr_id,
            first_name: patient.first_name,
            last_name: patient.last_name,
            other_names: patient.other_names,
            patient_name: patient.name,
            dob: patient.dob,
            marital_status: patient.marital_status,
            sex: patient.sex,
            place_of_birth: patient.place_of_birth,
            city: patient.city,
            state: patient.state,
            occupation: patient.occupation,
            primary_phone: patient.primary_phone,
            work_phone: patient.work_phone,
            email: patient.email,
            billing_profile_id: patient.billing_profile_id,
            billing_profile_name: patient.billing_profile_name,
            insurance_scheme_id: patient.insurance_scheme_id,
            insurance_scheme_policy_number: patient.insurance_scheme_policy_number,
            insurance_scheme_name: patient.insurance_scheme_name,
            encounter_type: encounter.encounter_type._id,
            encounter_type_id: encounter.encounter_type._id,
            encounter_type_name: encounter.encounter_type.name,
            encounter: encounter._id,
            vital_sign_type: vitalSignType._id,
            vital_sign_type_regex: vitalSignType.regex,
            vital_sign_type_name: vitalSignType.name,
            vital_sign_type_unit: vitalSignType.unit,
            vital_sign_type_max_value: vitalSignType.max_value,
            vital_sign_type_min_value: vitalSignType.min_value,
        }));

        if (!record) {
            throw new Error('error saving records');
        }
        return await models.VitalSign.findOne({
            where: {
                id: record._id
            },
            include: [{
                    model: models.Patient,
                    as: 'patient'
                },
                {
                    model: models.EncounterType,
                    as: 'encounter_type'
                },
                {
                    model: models.Encounter,
                    as: 'encounter'
                },
                {
                    model: models.VitalSignType,
                    as: 'vital_sign_type'
                },
            ]
        });
    }
}