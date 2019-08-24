var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLNumber = require('graphql').GraphQLFloat;
var GraphQLDate = require('graphql').GraphQLString;
var PatientGraphQLType = require('../Patient/PatientType').PatientType;
// var EncounterTypeGraphQLType = require('../EncounterType/EncounterTypeType').EncounterTypeType;
var EncounterGraphQLType = require('../Encounter/EncounterType').EncounterType;
// var EncounterTypeModel = require('../../models/EncounterType');
var severityEnumType = require('./severityEnum')
var statusEnumType = require('./statusEnum')
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone');

var ArgFieldTypes = {
    emr_id: {
        type: new GraphQLNonNull(GraphQLString)
    },
    encounter_id: {
        type: (GraphQLString)
    },
    date_of_entry: {
        type: new GraphQLNonNull(GraphQLDate)
    },
    diagnosed_by: {
        type: GraphQLString
    },
    diagnosis_note: {
        type: GraphQLString
    },
    diagnosis_type: {
        type: GraphQLString
    },
    diagnosis: {
        type: GraphQLString
    },
    status: {
        type: GraphQLString
    },
    severity: {
        type: GraphQLString
    },
    active: {
        type: new GraphQLNonNull(GraphQLString)
    },
    hospital_diagnosed: {
        type: GraphQLString
    },
    in_parent_id: {
        type: GraphQLString
    },
    body_part_id: {
        type: GraphQLString
    }
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.Type = new GraphQLObjectType({
    name: 'PatientDiagnosis',
    fields: () => {
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            date_of_entry: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.date_of_entry)) {
                        return moment.tz(parent.date_of_entry, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            updated_at: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.updated_at)) {
                        return moment.tz(parent.updated_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            created_at: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.created_at)) {
                        return moment.tz(parent.created_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            patient: {
                type: PatientGraphQLType,
                async resolve(parent, args) {
                    if (_.isObject(parent.patient)) {
                        return parent.patient;
                    }
                    return await models.Patient.findOne({
                        where: {
                            emr_id: parent.emr_id
                        }
                    })
                }
            },
            encounter: {
                type: EncounterGraphQLType,
                async resolve(parent, args) {
                    if (_.isObject(parent.encounter)) {
                        return parent.encounter;
                    }
                    return await models.Encounter.findOne({
                        where: {
                            id: parent.encounter_id
                        }
                    })
                }
            },
        })
    }
});