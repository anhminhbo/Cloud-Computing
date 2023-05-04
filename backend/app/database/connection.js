const mysql = require('mysql2');

const con = mysql.createConnection({
    // host = RDS endpoint
    host: process.env.DB_HOST,
    
     user: process.env.MYSQL_USER,
     password: process.env.MYSQL_PASSWORD,
     port: process.env.MYSQL_PORT

    // Test With Local Database
});

con.connect(function(err) {
    if (err) throw err;
    
    console.log('Connected to database');
});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

module.exports = con;