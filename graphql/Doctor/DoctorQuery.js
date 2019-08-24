var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var Model = require('../../models/Doctor');
var ModelType = require('./DoctorType').DoctorType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    doctors: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await Model.find();
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getDoctor: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await Model.findById(args.id);
        }
    }
}
    
