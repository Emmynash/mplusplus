var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ModelType = require('./PatientLabType').PatientType;
var ArgFieldTypes = require('./PatientLabType').ArgFieldTypes;
var models = require('../../models');
const _ = require('lodash');

module.exports = {
    type: ModelType,
    args: Object.assign({}, ArgFieldTypes, { //Next: Overwrite required fields
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        first_name: {
            type: GraphQLString,
        },
        last_name: {
            type: GraphQLString,
        },
        sex: {
            type: GraphQLString,
        },
        billing_profile_id: {
            type: GraphQLString
        },
        insurance_scheme_id: {
            type: GraphQLString
        }
    }),
    resolve: async(root, args)=> {
        const obj = await models.PatientLab.update({
            where: {
                id: args.id
            }
        },Object.assign({}, args, {updated_at: new Date()}));
        if (!obj) {
            throw new Error('error');
        }
        await models.PatientLab.update({
            where: {
                id: args.id
            }
        },Object.assign({}, {name: `${obj.last_name} ${obj.first_name} ${obj.other_names || ""}`.trim(), updated_at: new Date()}));
        return await models.PatientLab.findOne({
            where: {
                id: args.id
            }
        });
    }
}