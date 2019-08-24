var ModelGraphQLType = require('./PatientDiagnosisType').Type;
var ArgFieldTypes = require('./PatientDiagnosisType').ArgFieldTypes;
// var Model = require('../../models/PatientDiagnosis');
const uk = require("unique-key");
const models = require("../../models");

module.exports = {
    type: ModelGraphQLType,
    args: ArgFieldTypes,
    resolve: async(root, args) => {
        const patient = await models.Patient.findOne({
            where: {
                emr_id: args.emr_id
            }
        });
        if (!patient) {
            throw new Error('Patient does not exist');
        }
        const encounter = await models.Encounter.findOne({
            where: {
                id: args.encounter_id
            }
        });
        if (!encounter) {
            throw new Error('Encounter does not exist');
        }

        const record = await models.PatientDiagnosis.create(Object.assign({
            id: uk('en_', 29)
        }, args, {
            encounter: encounter._id,
            emr_id: patient.emr_id
        }));
        if (!record) {
            throw new Error('error saving records');
        }

        return record;
    }
}