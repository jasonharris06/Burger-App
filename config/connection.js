var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'akt15kmq0jjmh1zt',
        password: '	v5toi2gtpx1gjv35',
        database: 'qveuzda4tebqxd3h'

    })
};


connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;