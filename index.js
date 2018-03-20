var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sqlitedb');
//db.run("CREATE TABLE post (id TEXT,  user TEXT, date TEXT, titre TEXT, contenu TEXT)");

//ajouter un post


db.run ("INSERT INTO post VALUES('toto', 'nunId', 'monA', 'blabla')");
