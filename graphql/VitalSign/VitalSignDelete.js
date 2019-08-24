var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./VitalSignType').VitalSignType;
var Model = require('../../models/VitalSign');
module.exports = {
    type: ModelType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async(root, args)=> {
        const record = await Model.findByIdAndRemove(args.id);
        if (!record) {
            throw new Error('unable to delete');
        }
        return record;
    }
}