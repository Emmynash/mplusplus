var ModelType = require('./EncounterTypeType').EncounterTypeType;
var ArgFieldTypes = require('./EncounterTypeType').ArgFieldTypes;
const models = require("../../models");
const uk = require("unique-key");

module.exports = {
    type: ModelType,
    args: ArgFieldTypes,
    resolve: async(root, args)=> {
        const record = await models.EncounterType.create(Object.assign({
            id: uk('et_', 29)
        }, args));
        if (!record) {
            throw new Error('error saving records');
        }
        return record;
    }
}