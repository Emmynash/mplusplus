var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelGraphQLType = require('./ReferralType').ReferralType;
var ArgFieldTypes = require('./ReferralType').ArgFieldTypes;
var models = require('../../models');
module.exports = {
    type: ModelGraphQLType,
    args: Object.assign({}, ArgFieldTypes, {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    }),
    resolve: async(root, args)=> {
        const obj = await models.Referral.update({
            where: {
                id: args.id
            }
        },Object.assign({}, args, {updated_at: new Date()}));
        if (!obj) {
            throw new Error('error');
        }
        return await models.Referral.findOne({
            where: {
                id: args.id
            }
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