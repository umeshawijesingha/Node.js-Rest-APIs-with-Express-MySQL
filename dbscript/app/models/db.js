const mysql=require("mysql");
const dbConfig = require("../config/db.config.js");
const dbconfi=require("../config/db.config.js");

//Create a connection to the database
const connection=mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB

});

//Open the mysql connection
connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to the database");

})

module.exports=connection;