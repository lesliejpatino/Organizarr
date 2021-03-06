const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class StudyGroup extends Model {}

StudyGroup.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // could change once we learn more about video api
    url:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    date:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    time:{
      type: DataTypes.STRING,
      allowNull: false,
    },
     studyPreference:{
        type: DataTypes.STRING,
        allowNull: false, 
    },
    subject_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'subject',
        key:"id"
    },
  },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//         model: 'user',
//         key: 'id',
//     }
// }
    
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'study_group',
  },
);

module.exports = StudyGroup;