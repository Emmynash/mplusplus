var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./VitalSignTypeType').VitalSignTypeType;
var ArgFieldTypes = require('./VitalSignTypeType').ArgFieldTypes;
var Model = require('../../models/VitalSignType');

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