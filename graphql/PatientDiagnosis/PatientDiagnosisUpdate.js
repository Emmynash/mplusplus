var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./PatientDiagnosisType').Type;
var ArgFieldTypes = require('./PatientDiagnosisType').ArgFieldTypes;
var models = require('../../models');

module.exports = {
    type: ModelType,
    args: Object.assign({}, ArgFieldTypes, {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    }),
    resolve: async(root, args) => {
        const obj = await models.PatientDiagnosis.update(args, {
            where: {
                id: args.id
            }
        }, );
        if (!obj) {
            throw new Error('error');
        }
        const updated = await models.PatientDiagnosis.findOne({
            where: {
                id: args.id
            }
        })

        return updated;

    }
}