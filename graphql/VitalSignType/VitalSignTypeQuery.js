var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelGraphQLType = require('./VitalSignTypeType').VitalSignTypeType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    vitalSignTypes: {
        type: new GraphQLList(ModelGraphQLType),
        resolve:  async ()=> {
            const list = await models.VitalSignType.findAll({})
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getVitalSignType: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelGraphQLType,
        resolve: async(root, args)=> {
            return await models.VitalSignType.findOne({
                where: {
                    id: args.id
                }
            });
        }
    }
}
