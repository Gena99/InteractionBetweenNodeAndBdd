const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

//Data Name

const dbName = 'InteractionBetweenNodeAndBdd';

//Use connect method to connect to the server

MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    // connection ouverte on se positionne sur la BDD InteractionBetweenNodeAndBdd
    const db = client.db(dbName);

    // création d'un objet post avec un commentaire
    var post = {_id: 1, user: "Géna", title: "title1", content: "content1", comments :[{"user": "user1", "comment": "Bravo"}]};

    // insertion dans la collection de mongo > {upsert: true} est un objet de config, upsert signifie update or insert if not found
    // doc de replaceOne sur la doc officielle de la lib. : http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html#replaceOne
    db.collection("post").replaceOne({_id: 1}, post, {upsert: true}, function (error, results) {
        if (error) throw error;
        //console.log("Le document a bien été inséré");

        //Ajout de 2 nouveaux commentaires
        post.comments.push({"user": "user2", "comment": "Génial"});
        post.comments.push({"user": "user3", "comment": "Pas faux"});

        // update dans mongo
        db.collection("post").replaceOne({_id: 1}, post, {upsert: true}, function (error, results) {
            if (error) throw error;
            //console.log("Le document a bien été updated");

            // on interroge la bdd mongo pour récupérer l'enregistrement
            db.collection("post").findOne({_id: 1}, function (error, result) {

                // on l'affiche
                console.log("resultat : ",result);

                // fermeture de la connexion (sinon le script ne rend pas la main.)
                client.close();
            })
        });
    });
});

// Noter que que : bien que positionné en dernier dans le code, ce message s'affiche en premier
// Vive l'asynchrone Lol ;)
console.log('done');


