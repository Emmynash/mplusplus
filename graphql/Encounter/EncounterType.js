var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var PatientType = require('../Patient/PatientType').PatientType;
var EncounterTypeType = require('../EncounterType/EncounterTypeType').EncounterTypeType
var models = require('../../models');
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone');

var ArgFieldTypes = {
    emr_id: {
        type: new GraphQLNonNull(GraphQLString)
    },
    encounter_type_id: {
        type: new GraphQLNonNull(GraphQLString)
    },
    cancelled: {
        type: GraphQLBoolean,
    },
    cancelled_date: {
        type: GraphQLDate,
        resolve(parent, args) {
            if (!_.isNull(parent.cancelled_date)) {
                return moment.tz(parent.cancelled_date, config.timeZone).format('YYYY-MM-DD HH:mm');
            }
        }
    },
    cancelled_by: {
        type: GraphQLString,
    },
    cancelled_by_id: {
        type: GraphQLString,
    },
    triaged: {
        type: GraphQLBoolean,
    },
    triaged_date: {
        type: GraphQLDate,
        resolve(parent, args) {
            if (!_.isNull(parent.triaged_date)) {
                return moment.tz(parent.triaged_date, config.timeZone).format('YYYY-MM-DD HH:mm');
            }
        }
    },
    triaged_by: {
        type: GraphQLString,
    },
    triaged_by_id: {
        type: GraphQLString,
    },
    reason: {
        type: GraphQLString
    },
    sensitivity: {
        type: GraphQLString, //{Low, Medium, High}
    },
    facility_name: {
        type: GraphQLString,
    },
    facility_id: {
        type: GraphQLString,
    },
    specialization_name: {
        type: GraphQLString,
    },
    specialization_id: {
        type: GraphQLString,
    },
    department_name: {
        type: GraphQLString,
    },
    department_id: {
        type: GraphQLString,
    },
    user_id: {
        type: GraphQLString,
    },
    user_name: {
        type: GraphQLString,
    },
    referral_user_id: {
        type: GraphQLString,
    },
    referral_user_name: {
        type: GraphQLString,
    },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.EncounterType = new GraphQLObjectType({
    name: 'Encounter',
    fields: () => {
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            patient: {
                type: PatientType,
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
            encounter_type: {
                type: EncounterTypeType,
                async resolve(parent, args) {
                    if (_.isObject(parent.encounter_type)) {
                        return parent.encounter_type;
                    }
                    return await models.EncounterType.findOne({
                        where: {
                            id: parent.encounter_type_id
                        }
                    })
                }
            },
            encounter_type_name: {
                type: GraphQLString,
            },
            legacy_emr_id: {
                type: GraphQLString,
            },
            first_name: {
                type: GraphQLString,
            },
            last_name: {
                type: GraphQLString,
            },
            other_names: {
                type: GraphQLString,
            },
            patient_name: {
                type: GraphQLString,
            },
            dob: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.dob)) {
                        return moment.tz(parent.dob, config.timeZone).format('YYYY-MM-DD');
                    }
                }
            },
            marital_status: {
                type: GraphQLString,
            },
            sex: {
                type: GraphQLString,
            },
            place_of_birth: {
                type: GraphQLString,
            },
            city: {
                type: GraphQLString,
            },
            state: {
                type: GraphQLString,
            },
            occupation: {
                type: GraphQLString,
            },
            primary_phone: {
                type: GraphQLString,
            },
            work_phone: {
                type: GraphQLString,
            },
            email: {
                type: GraphQLString,
            },
            billing_profile_id: {
                type: GraphQLString,
            },
            billing_profile_name: {
                type: GraphQLString,
            },
            insurance_scheme_id: {
                type: GraphQLString,
            },
            insurance_scheme_policy_number: {
                type: GraphQLString,
            },
            insurance_scheme_name: {
                type: GraphQLString,
            },
            created_at: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.created_at)) {
                        return moment.tz(parent.created_at, config.timeZone).format('YYYY-MM-DD HH:mm');
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
            }
        })
    }
});