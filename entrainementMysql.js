var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'InteractionBetweenNodeAndBdd'

});
connection.connect();

connection.query("INSERT INTO Post (`title`, `content`, `idUser`) VALUES ('title 2', 'Content2', 2);"
    , function (error, results, fields) {
    if (error) throw error;
    console.log('Post 2 inséré');
});


connection.query("INSERT INTO users(`idUser`, pseudo) VALUES (1, 'gena');",
    function(error, result, fields){
    if(error) throw error;
    console.log('pseudo ajouté')
    });
connection.end();
