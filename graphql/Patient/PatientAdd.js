var ModelType = require('./PatientType').PatientType;
var ArgFieldTypes = require('./PatientType').ArgFieldTypes;
var models = require('../../models');
const _ = require('lodash');
const uk = require("unique-key");

function getEmrId(){
    return Math.floor(100000 + Math.random() * 900000);
};

module.exports = {
    type: ModelType,
    args: ArgFieldTypes,
    resolve: async(root, args)=> {
        const record = await models.Patient.create(Object.assign({
            id: uk('pt_', 29)
        }, args, {
            emr_id: getEmrId(), 
            name: `${args.last_name} ${args.first_name} ${args.other_names || ""}`.trim()
        }));
        // const record = await uModel.save();
        if (!record) {
            throw new Error('error saving records');
        }
        return record;
    }
}