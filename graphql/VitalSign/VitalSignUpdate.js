var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./VitalSignType').VitalSignType;
var ArgFieldTypes = require('./VitalSignType').ArgFieldTypes;
var Model = require('../../models/VitalSign');
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
        return await Model.findById(args.id)
        .populate('patient')
        .populate('encounter_type')
        .populate('vital_sign_type')
        .populate('encounter');
    }
}