var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./PatientVisitNoteType').Type;
var ArgFieldTypes = require('./PatientVisitNoteType').ArgFieldTypes;
var models = require('../../models');

module.exports = {
    type: ModelType,
    args: Object.assign({}, ArgFieldTypes, {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    }),
    resolve: async(root, args) => {
        const obj = await models.PatientVisitNotes.update(args, {
                where: {
                    id: args.id
                }
            },
            Object.assign({}, args, {
                updated_at: new Date()
            })
        );
        if (!obj) {
            throw new Error('error');
        }
        return await models.PatientVisitNotes.findOne({
            where: {
                id: args.id
            }
        })

        // return obj;

    }
}