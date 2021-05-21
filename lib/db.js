var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'tnqls',
    database: 'opentutorials'
});
db.connect();
module.exports = db;


