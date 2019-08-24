var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./EncounterTypeType').EncounterTypeType;
var ArgFieldTypes = require('./EncounterTypeType').ArgFieldTypes;
var Model = require('../../models/EncounterType');

module.exports = {
    type: ModelType,
    args: Object.assign({}, ArgFieldTypes, {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    }),
    resolve: async(root, args)=> {
        const obj = await Model.findByIdAndUpdate(args.id,Object.assign({}, args, {updated_at: new Date()}));
        if (!obj) {
            throw new Error('error');
        }
        return await Model.findById(args.id);
    }
}