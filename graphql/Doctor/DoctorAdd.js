var ModelType = require('./DoctorType').DoctorType;
var ArgFieldTypes = require('./DoctorType').ArgFieldTypes;
var models = require('../../models');
var PatientModel = require('../../models/Patient');
const uk = require("unique-key");

module.exports = {
    type: ModelType,
    args: ArgFieldTypes,
    resolve: async(root, args)=> {
        
        const record = await models.Doctor.create(Object.assign({
            id: uk('dc_', 29)
        }, args, {
            first_name: args.first_name,
            last_name: args.last_name,
            other_names: args.other_names,
            dob: args.dob,
            marital_status: args.marital_status,
            user_name: args.user_name,
            sex: args.sex,
            place_of_birth: args.place_of_birth,
            city: args.city,
            state: args.state,
            local_government: args.local_government,
            occupation: args.occupation,
            primary_phone: args.primary_phone,
            secondary_phone: args.secondary_phone,
            work_phone: args.work_phone,
            email: args.email,
            employer_name: args.employer_name,
            employer_address: args.employer_address,
            employer_phone: args.employer_phone,
            emergency_contact_name: args.emergency_contact_name,
            emergency_contact_phone: args.emergency_contact_phone,
            emergency_contact_address: args.emergency_contact_address,
            country: args.country,
            billing_profile_id: args.billing_profile_id,
            billing_profile_name: args.billing_profile_name,
            insurance_scheme_id: args.insurance_scheme_id,
            insurance_scheme_policy_number: args.insurance_scheme_policy_number,
            insurance_scheme_name: args.insurance_scheme_name,
            preferred_notification_language: args.preferred_notification_language,
        }));
        // const record = await uModel.save();
        if (!record) {
            throw new Error('error saving records');
        }        
        return record;
    }
}