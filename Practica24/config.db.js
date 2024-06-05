// Se descarga (en una nueva terminal): 
// npm i dotenv 
// npm i mysql
// npm i cors

const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql');
let connection; 

try {
    connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME
    });
        

}catch (error) {
    console.log(error);
}

module.exports = { connection }