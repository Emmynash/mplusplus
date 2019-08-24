var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelGraphQLType = require('./VitalSignTypeType').VitalSignTypeType;
var Model = require('../../models/VitalSignType');
module.exports = {
    type: ModelGraphQLType,
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