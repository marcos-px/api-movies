const db = require('../database');
const sequelize = require("sequelize");

const Gender = db.define(
    "Gender",{
        gender_id:{
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        gender:{
            type: sequelize.DataTypes.STRING
        }
    },
    {
        tableName:"gender",
        timestamps: false,
    }
)


module.exports = Gender;