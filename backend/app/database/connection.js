const mysql = require('mysql2');

const con = mysql.createConnection({
    // host = RDS endpoint
    host: "",
    
     user: "",
     password: "",
     port: 3000

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