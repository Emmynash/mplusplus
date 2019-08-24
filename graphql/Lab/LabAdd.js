var ModelType = require('./LabType').AllergyType;
var ArgFieldTypes = require('./LabType').ArgFieldTypes;
var models = require('../../models');
const uk = require("unique-key");

module.exports = {
    type: ModelType,
    args: ArgFieldTypes,
    resolve: async(root, args)=> {
        
        const record = await models.Lab.create(Object.assign({
            id: uk('lb_', 29)
        }, args, {
            name: args.name,
            service_id: args.service_id,
            active: args.active,
        }));
        // const record = await uModel.save();
        if (!record) {
            throw new Error('error saving records');
        }
        // return await Model.findById(record._id).populate('patient');
        return record;
    }
}