var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelGraphQLType = require('./PatientVisitNoteType').Type;
var models = require('../../models');
module.exports = {
    type: ModelGraphQLType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },

    resolve: async(root, args) => {
        const record = await models.PatientVisitNotes.destroy({
            where: {
                id: args.id
            }
        });
        if (!record) {
            throw new Error('unable to delete Patient Diagnosis');
        }
        return await models.PatientVisitNotes.findOne({
            where: {
                id: args.id
            }
        });
    }
}