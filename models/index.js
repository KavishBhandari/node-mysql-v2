const dbConfig = require("../config/dbconfig.js");

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorAliases : false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
    
)
sequelize.authenticate()
.then(()=>{console.log("connected")})
.catch(err=>{console.log("err is occured")})

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.tablenames = require('./schema_model.js')(sequelize, DataTypes);

db.authtable = require("./authmodel.js")(sequelize, DataTypes); //comment

db.sequelize.sync({force:false})
.then(()=>{
    console.log("drop and re-sync db");
})

module.exports = db;