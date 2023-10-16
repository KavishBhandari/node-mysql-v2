module.exports = (sequelize, DataTypes)=>{
    const TableName1 = sequelize.define('tablename1', {
        /*id : {
            type : DataTypes.INTEGER,
            allowNull :false
        },*/

        email: {
            type: DataTypes.STRING,
            
            primaryKey: true,
            allowNull:false
        },

        password : {
            type : DataTypes.INTEGER
        }

        
    })

    return TableName1;
}