var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./AppointmentType').AppointmentType;
var models = require('../../models');
module.exports = {
    type: ModelType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async(root, args)=> {
        const record = await models.Appointment.destroy({
            where: {
                id: args.id
            }
        });
        if (!record) {
            throw new Error('unable to delete');
        }
        return record;
    }
}