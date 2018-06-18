var mysqlite3 = require('sqlite3').verbose();
var db = new mysqlite3.Database('sqlitedb');


    db.run("CREATE TABLE IF NOT EXISTS post(title TEXT, content TEXT, idUser TEXT)" );
    db.run("INSERT INTO post VALUES ('toto', 'blabla', 2)" );
    db.run("INSERT INTO post Values ('tata', 'Hello', 3)");

db.close();



