
//let mysql2 = require("mysql2");


module.exports = (sequelize, DataTypes)=>{
    const TableName = sequelize.define('tablename', {
        /*id : {
            type : DataTypes.INTEGER,
            allowNull :false
        },*/

        id: {
            type: DataTypes.INTEGER,
            
            primaryKey: true,
            allowNull:false
        },

        title : {
            type : DataTypes.STRING
        },

        description : {
            type : DataTypes.STRING
        },

        status : {
            type : DataTypes.BOOLEAN
        }
    })

    return TableName;
}