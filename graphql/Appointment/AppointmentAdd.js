var ModelType = require('./AppointmentType').AppointmentType;
var ArgFieldTypes = require('./AppointmentType').ArgFieldTypes;
var models = require('../../models');
var PatientModel = require('../../models/Patient');
const uk = require("unique-key");

module.exports = {
    type: ModelType,
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
        const record = await models.Appointment.create(Object.assign({
            id: uk('ap_', 29)
        }, args, {
            patient: patient._id,
            emr_id: patient.emr_id,
            first_name: patient.first_name,
            last_name: patient.last_name,
            other_names: patient.other_names,
            patient_name: patient.name,
            // check_in: args.check_in,
            doctor_name: args.doctor_name,
            from: args.from,
            to: args.to,
            description: args.description,
            legacy_emr_id: patient.legacy_emr_id,
        }));
        // const record = await uModel.save();
        if (!record) {
            throw new Error('error saving records');
        }
        // return await Model.findById(record._id).populate('patient');
        return record;
    }
}