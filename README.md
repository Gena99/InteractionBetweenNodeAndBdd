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
Initialiser la connexion
```javascript
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'InteractionBetweenNodeAndBdd'
});

connection.connect();
```