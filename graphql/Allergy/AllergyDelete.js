var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./AllergyType').AllergyType;
var models = require('../../models');
module.exports = {
    type: ModelType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async(root, args)=> {
        const record = await models.Allergy.destroy({
            where: {
                id: args.id
            }
        });
        if (!record) {
            throw new Error('unable to delete');
        }
        return record;
    }
}