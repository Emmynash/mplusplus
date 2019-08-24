var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelGraphQLType = require('./PatientDiagnosisType').Type;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    PatientDiagnosis: {
        type: new GraphQLList(ModelGraphQLType),
        resolve: async() => {
            const list = await models.PatientDiagnosis.findAll({
                include: [{
                        model: models.Patient,
                        as: 'patient'
                    },
                    {
                        model: models.Encounter,
                        as: 'encounter'
                    }
                ]
            });

            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getPatientDiagnosis: {
        args: {
            id: {
                type: GraphQLID,
            },
        },
        type: ModelGraphQLType,
        resolve: async(root, args) => {
            return await models.PatientDiagnosis.findOne({
                where: {
                    id: args.id
                }
            }, {
                model: models.Patient,
                as: 'patient'
            }, {
                model: models.Encounter,
                as: 'encounter'
            }, )

        }
    }
}