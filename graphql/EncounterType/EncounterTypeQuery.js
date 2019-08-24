var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelType = require('./EncounterTypeType').EncounterTypeType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    encounterTypes: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await models.EncounterType.findAll({
                include: [
                    {
                        model: models.Encounter,
                        as: 'encounters'
                    }
                ]
            });
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getEncounterType: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await models.EncounterType.findOne({
                where: {
                    id: args.id
                }});
        }
    }
}
