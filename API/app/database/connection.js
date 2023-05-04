const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    database: 'cloud',
    user: "root",
    password: "RaidenShogun070599:)",
    port: 7575

    // Test With Local Database
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = con;