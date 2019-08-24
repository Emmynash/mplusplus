'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    emr_id: {
      allowNull: false,
      index: true,
      type: DataTypes.STRING(32),
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(32)
    },
    last_name: {
      type: DataTypes.STRING(32)
    },
    other_names: {
      type: DataTypes.STRING(32)
    },
    patient_name: {
      type: DataTypes.STRING(32)
    },
    doctor_name: {
      type: DataTypes.STRING(32)
    },    
    from: { 
      type: DataTypes.DATE, 
      default: new Date() 
    },
    to: { 
      type: DataTypes.DATE, 
      default: new Date() 
    },    
    legacy_emr_id: {
      type: DataTypes.STRING(32)
    },  
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  Appointment.associate = function (models) {
    // associations can be defined here
    Appointment.belongsTo(models.Patient, { as: 'patient' });
  };
  return Appointment;
};