var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelType = require('./EncounterType').EncounterType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    encounters: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await models.Encounter.findAll({
                include: [
                    {
                        model: models.Patient,
                        as: 'patient'
                    },
                    {
                        model: models.EncounterType,
                        as: 'encounter_type'
                    }
                ]
            });
            
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getEncounter: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await models.Encounter.findOne({
                where: {
                    id: args.id
                }
            },
                {
                    model: models.Patient,
                    as: 'patient'
                },
                {
                    model: models.EncounterType,
                    as: 'encounter_type'
                },
            )
        }
    }
}
    
