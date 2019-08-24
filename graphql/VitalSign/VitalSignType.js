var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLNumber = require('graphql').GraphQLFloat;
var PatientGraphQLType = require('../Patient/PatientType').PatientType;
var EncounterTypeGraphQLType = require('../EncounterType/EncounterTypeType').EncounterTypeType;
var VitalSignTypeGraphQLType = require('../VitalSignType/VitalSignTypeType').VitalSignTypeType;
var EncounterGraphQLType = require('../Encounter/EncounterType').EncounterType;
var EncounterTypeModel = require('../../models/EncounterType');
var PatientModel = require('../../models/Patient');
var VitalSignTypeModel = require('../../models/VitalSignType');
var EncounterModel = require('../../models/Encounter')
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone'); 

var ArgFieldTypes = {
    emr_id: {
        type: new GraphQLNonNull(GraphQLString)
    },
    encounter_id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    vital_sign_type_id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    vital_sign_value: {
      type: new GraphQLNonNull(GraphQLNumber)
    }
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.VitalSignType = new GraphQLObjectType({
    name: 'VitalSign',
    fields:  () =>{
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            patient: {
                type: PatientGraphQLType,
                async resolve(parent, args){
                    // if(_.isObject(parent.patient)){
                    //     return parent.patient;
                    // }
                    return await PatientModel.findOne({emr_id: parent.emr_id}) 
                }
            },
            encounter: {
              type: EncounterGraphQLType,
              async resolve(parent, args){
                  // if(_.isObject(parent.encounter)){
                  //     return parent.encounter;
                  // }
                  return await EncounterModel.findById(parent.encounter_id) 
              }
          },
            encounter_type: {
                type: EncounterTypeGraphQLType,
                async resolve(parent, args){
                    // if(_.isObject(parent.encounter_type)){
                    //     return parent.encounter_type;
                    // }
                    return await EncounterTypeModel.findById(parent.encounter_type_id) 
                }
            },
            vital_sign_type: {
              type: VitalSignTypeGraphQLType,
              async resolve(parent, args){
                  // if(_.isObject(parent.vital_sign_type)){
                  //     return parent.vital_sign_type;
                  // }
                  return await VitalSignTypeModel.findById(parent.vital_sign_type_id) 
              }
            },
            encounter_type_id: {
              type: GraphQLString
            },
            encounter_type_name: {
              type: GraphQLString,
            },
            vital_sign_type_min_value: {
              type: GraphQLNumber,
            },
            vital_sign_type_max_value: {
              type: GraphQLNumber,
            },
            vital_sign_type_unit: {
              type: GraphQLString,
            },
            vital_sign_type_name: {
              type: GraphQLString,
            },
            vital_sign_type_regex: {
              type: GraphQLString,
            },
            vital_sign_type_id: {
              type: GraphQLString
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
              resolve(parent, args){
                  if(!_.isNull(parent.dob)){
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
                resolve(parent, args){
                    if(!_.isNull(parent.created_at)){
                        return moment.tz(parent.created_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            updated_at: {
                type: GraphQLDate,
                resolve(parent, args){
                    if(!_.isNull(parent.updated_at)){
                        return moment.tz(parent.updated_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            }
        })
    }
});
