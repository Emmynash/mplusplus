var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelGraphQLType = require('./ReferralType').ReferralType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    referrals: {
        type: new GraphQLList(ModelGraphQLType),
        resolve:  async ()=> {
            const list = await models.Referral.findAll({
                include: [
                    {
                        model: models.Patient,
                        as: 'patient'
                    },
                    {
                        model: models.Encounter,
                        as: 'encounter'
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
    getReferral: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelGraphQLType,
        resolve: async(root, args)=> {
            return await models.Referral.findOne({
                where: {
                    id: args.id
                },
                
            },
            {
                model: models.Patient,
                as: 'patient'
            },
            {
                model: models.Encounter,
                as: 'encounter'
            },
            {
                model: models.EncounterType,
                as: 'encounter_type'
            });
        }
    }
}
    
