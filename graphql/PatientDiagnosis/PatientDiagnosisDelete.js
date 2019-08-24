var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;
var ModelGraphQLType = require('./PatientDiagnosisType').Type;
// var ArgFieldTypes = require('./PatientDiagnosisType').ArgFieldTypes;
var models = require('../../models');
module.exports = {
    type: ModelGraphQLType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },

    resolve: async(root, args) => {
        const record = await models.PatientDiagnosis.destroy({
            where: {
                id: args.id
            }
        });

        if (!record) {
            throw new Error('unable to delete Patient Diagnosis');
        }

        // return await record;
        return await models.PatientDiagnosis.findOne({
            where: {
                id: args.id
            }
        });

    }
}