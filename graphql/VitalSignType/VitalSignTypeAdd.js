var ModelGraphQLType = require('./VitalSignTypeType').VitalSignTypeType;
var ArgFieldTypes = require('./VitalSignTypeType').ArgFieldTypes;
var models = require('../../models');
const uk = require("unique-key");

module.exports = {
    type: ModelGraphQLType,
    args: ArgFieldTypes,
    resolve: async(root, args)=> {
        const record = await models.VitalSignType.create(Object.assign({
            id: uk('vs_', 29)
        }, args));
        // const record = await uModel.save();
        if (!record) {
            throw new Error('error saving records');
        }
        return record;
    }
}