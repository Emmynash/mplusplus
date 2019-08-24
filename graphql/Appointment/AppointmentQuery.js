var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var Model = require('../../models/Appointment');
var ModelType = require('./AppointmentType').AppointmentType;
var GraphQLID = require('graphql').GraphQLID;

module.exports = {
    appointments: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await Model.find().populate('patient')
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getAppointment: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await Model.findById(args.id).populate('patient');
        }
    }
}
    
