var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./AllergyType').AllergyType;
var ArgFieldTypes = require('./AllergyType').ArgFieldTypes;
var models = require('../../models');
module.exports = {
    type: ModelType,
    args: Object.assign({}, ArgFieldTypes, {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    }),
    resolve: async(root, args)=> {
        const obj = await models.Allergy.update({
            where: {
                id: args.id
            }
        },Object.assign({}, args, {updated_at: new Date()}));
        if (!obj) {
            throw new Error('error');
        }
        return await models.Allergy.findOne({
            where: {
                id: args.id
            }
        });
    }
}