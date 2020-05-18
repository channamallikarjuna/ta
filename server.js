var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('server created !');
}).listen(8080);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Channa@2000"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE ADMIN", function (err, result) {
    if (err) throw err;
    console.log("ADMIN Database created");
  });
  con.query("CREATE DATABASE CANDIDATE", function (err, result) {
    if (err) throw err;
    console.log("CANDIADTE Database created");
  });
  con.query("CREATE DATABASE VOTER", function (err, result) {
    if (err) throw err;
    console.log("VOTER Database created");
  });

});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Channa@2000",
  database: "ADMIN"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE admins (firstname varchar(255),middlename varchar(255),lastname varchar(255),mobilenumber varchar(10),DOB DATE,email varchar(255),phonenumber varchar (10),alternatephone varchar(10),adminid int AUTO_INCREMENT primary key)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Channa@2000",
  database: "CANDIDATE"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE candidates (candidateid int AUTO_INCREMENT primary key,firstname varchar(255),middlename varchar(255),lastname varchar(255),mobilenumber varchar(10),DOB DATE,email varchar(255),phonenumber varchar (10),alternatephone varchar(10),state varchar(255),constituency varchar(255),profession varchar(255),party varchar(255),movableassets int,immovableassets int,govtdues int,loans int,criminal cases varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Channa@2000",
  database: "VOTER"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE voters (firstname varchar(255),middlename varchar(255),lastname varchar(255),mobilenumber varchar(10),DOB DATE,email varchar(255),phonenumber varchar (10),alternatephone varchar(10),voterid int AUTO_INCREMENT primary key,state varchar(255),constituency varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


