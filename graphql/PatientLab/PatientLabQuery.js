var GraphQLList = require('graphql').GraphQLList;
var models = require('../../models');
var ModelType = require('./PatientLabType').PatientLabType;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    patientLabs: {
        type: new GraphQLList(ModelType),
        resolve:  async ()=> {
            const list = await models.PatientLab.findAll()
            if (!list) {
                throw new Error('error while fetching data');
            }
            return list;
        }
    },
    getPatientLab: {
        args: {
            id:{
                type : GraphQLID,
            },
        },
        type: ModelType,
        resolve: async(root, args)=> {
            return await models.PatientLab.findOne({
                where: {
                    id: args.id
                }
            });
        }
    },

    findPatientLab: {
        args: {
            query:{
                type : GraphQLString,
            },
        },
        type: new GraphQLList(ModelType),
        resolve: async(root, args)=> {
            return await models.PatientLab.findAll({
                where: {
                    [Op.or]: [
                        {
                            id: {
                                [Op.like]: `%${args.query}%`
                            }
                        },
                        {
                            emr_id: {
                                [Op.like]: `%${args.query}%`
                            }
                        },
                        {
                            last_name: {
                                [Op.like]: `%${args.query}%`
                            }
                        },
                        {
                            primary_phone: {
                                [Op.like]: `%${args.query}%`
                            }
                        },
                        {
                            work_phone: {
                                [Op.like]: `%${args.query}%`
                            }
                        }
                    ]
                }
            });
        }
    }
}
