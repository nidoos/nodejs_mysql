var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'tnqls',
    database: 'opentutorials',
    // multipleStatements:true -> db.query에서 여러개의 sql문을 허용하게 된다.
});
db.connect();
module.exports = db;


