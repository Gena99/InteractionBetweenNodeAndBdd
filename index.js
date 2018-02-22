var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'InteractionBetweenNodeAndBdd'
});

connection.connect();

$query = "INSERT INTO Post (`title`, `content`, `idUser`) VALUES ('title 1', 'Content1', 1);"

connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('inserted post 1 ');
});

$query = "INSERT INTO Post (`title`, `content`, `idUser`) VALUES ('title 2', 'Content2', 2);"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('inserted post 2 ');
});

$query = "INSERT INTO Comments (`comment`, `idUser`, `idPost`) VALUES ('Comment 1 on post 1', 2, 1);"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('inserted comment 1 ');
});

$query = "INSERT INTO Comments (`comment`, `idUser`, `idPost`) VALUES ('Comment 2 on post 1', 3, 1);"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('inserted comment 2 ');
});

$query = "INSERT INTO Comments (`comment`, `idUser`, `idPost`) VALUES ('Comment 3 on post 2', 1, 2);"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('inserted comment 3 ');
});

$query = "SELECT P.*, U.pseudo FROM Post P INNER JOIN users U USING(idUser);"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('Select all ', results);
});

$query = "TRUNCATE Post;"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('truncate Post');
});

$query = "TRUNCATE Comments;"
connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('truncate Comments');
});