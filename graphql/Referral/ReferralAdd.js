var ModelGraphQLType = require('./ReferralType').ReferralType;
var ArgFieldTypes = require('./ReferralType').ArgFieldTypes;
var models = require('../../models');
const uk = require("unique-key");

module.exports = {
    type: ModelGraphQLType,
    args: ArgFieldTypes,
    resolve: async(root, args)=> {
        const patient = await models.Patient.findOne({
            where: {
                emr_id: args.emr_id
            }
        });

        if(!patient){
            throw new Error('Patient does not exist');
        }
        const encounter = await models.Encounter.findOne({
            where: {
                id: args.encounter_id
            }
        });
        if(!encounter){
            throw new Error('Encounter does not exist');
        }
        const encounterType = await models.Encounter.findOne({
            where: {
                encounter_type_id: args.encounter_type_id
            }
        });

        if(!encounterType){
            throw new Error('EncounterType does not exist');
        }
        const record = await models.Referral.create(Object.assign({
            id: uk('rf_', 29)
        }, args, {
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
            encounter: encounter._id,
            encounter_type: encounterType._id,
            encounter_type_name: encounterType.name,
        }));
        
        if (!record) {
            throw new Error('error saving records');
        }
        // return await Model.findById(record._id)
        //     .populate('patient')
        //     .populate('encounter')
        //     .populate('encounter_type');
        return record;
    }
}