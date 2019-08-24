var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelGraphQLType = require('./PatientVisitNoteType').Type;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    PatientVisitNotes: {
        type: new GraphQLList(ModelGraphQLType),
        resolve: async() => {
            const list = await models.PatientVisitNotes.findAll({
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
    getPatientVisitNotes: {
        args: {
            id: {
                type: GraphQLID,
            },
        },
        type: ModelGraphQLType,
        resolve: async(root, args) => {
            return await models.PatientVisitNotes.findOne({
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
    },
    lastPatientVisitNote: {
        type: new GraphQLList(ModelGraphQLType),
        resolve: async() => {
            const list = await models.PatientVisitNotes.findAll({
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
            return list[0];
        }
    }
}