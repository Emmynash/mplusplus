var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./PatientType').PatientType;
var models = require('../../models');
module.exports = {
    type: ModelType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async(root, args)=> {
        const record = await models.Patient.destroy({
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