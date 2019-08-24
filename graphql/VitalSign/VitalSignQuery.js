var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var Model = require('../../models/VitalSign');
var ModelType = require('./VitalSignType').VitalSignType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    vitalSigns: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await Model.find()
            .populate('patient')
            .populate('encounter_type')
            .populate('vital_sign_type')
            .populate('encounter')
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getVitalSign: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await Model.findById(args.id)
            .populate('patient')
            .populate('encounter_type')
            .populate('vital_sign_type')
            .populate('encounter')
        }
    }
}
    
