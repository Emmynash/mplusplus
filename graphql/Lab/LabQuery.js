var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelType = require('./LabType').LabType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    labs: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await models.Lab.findAll()
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getLab: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await models.Lab.findOne({
                where: {
                    id: args.id
                }
            });
        }
    }
}
    
