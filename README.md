# Interaction Between Node And a Bdd

## prerequisite
* Node installed with npx/npm/yarn 
* A running mysql server instance
* A Gui (Graphical User interface) For mysql server

## Step 1
* Create a database for a simple blog system : user/post/comment
* Insert a new post
* Insert a comment on a post
* Read all post for a user
* Read one post with all its comments 

### Usefull Links
* [npm package manager website](https://www.npmjs.com)
* [librairie mysql pour node](https://www.npmjs.com/package/mysql)


### Step by Step
Création du package.json. Lancer la commande ci-dessous et remplir les informations au fur et à mesure
```
npm init
```

Installer la librairie mysql et la déclarer comme dépendance dans le package.json 
```bash 
npm install mysql --save
```

Créer le fichier index.js

Inclure la librairie mysql
````javascript
var mysql = require('mysql');
````
Initialiser la connexion :  
```javascript
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'InteractionBetweenNodeAndBdd'
});

connection.connect();ù
```
Appeler la méthode createConnection de l'instance mysql (objet) en lui passant un objet contenant les paramètres, qui retourne une instance de la cclasse connexion
On appelle la méthode connect sur cette instance pour établie la connexion



Insérer un post :
````javascript
$query = "INSERT INTO Post (`title`, `content`, `idUser`) VALUES ('title 1', 'Content1', 1);"

connection.query($query, function (error, results, fields) {
    if (error) throw error;
    console.log('inserted post 1 ');
});
````
On assigne une requête SQL à la variable $query, 
on appelle la méthode query sur l'instance de la connexion. Cette méthode communique avec la base de données pour transmettre et exécuter la requête.
Cette méthode query prend deux paramètres : la requête ($query) et une fonction anonyme, qui va permettre de gérer le retour du serveur (callBack ou fonction de rappel)


