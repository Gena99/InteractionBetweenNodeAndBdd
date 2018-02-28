# Interaction Between Node And a Bdd

## prerequisite
* Node installed with npx/npm/yarn 
* A running mongodb server instance
* A Gui (Graphical User interface) For mysql server

## Step 1
* Create a database for a simple blog system : user/post/comment
* Insert a new post
* Insert a comment on a post
* Read all post for a user
* Read one post with all its comments 

### Usefull Links
* [npm package manager website](https://www.npmjs.com)
* [librairie mongo pour node](https://www.npmjs.com/package/mongodb)
* [Référence de la lib](http://mongodb.github.io/node-mongodb-native/3.0/)
* [documentation de l'api](http://mongodb.github.io/node-mongodb-native/3.0/api/)


### Step by Step
Création du package.json. Lancer la commande ci-dessous et remplir les informations au fur et à mesure
```
npm init
```

Installer la librairie mysql et la déclarer comme dépendance dans le package.json 
```bash 
npm install mongodb --save
```

Créer le fichier index.js

Inclure la librairie mongo
````javascript
????
````
Initialiser la connexion :  
```javascript
???

```
Appeler la méthode createConnection de l'instance mysql (objet) en lui passant un objet contenant les paramètres, qui retourne une instance de la classe connexion
On appelle la méthode connect sur cette instance pour établir la connexion



Insérer un post :
````javascript
???
````
On assigne une requête SQL à la variable $query, 
on appelle la méthode query sur l'instance de la connexion. Cette méthode communique avec la base de données pour transmettre et exécuter la requête.
Cette méthode query prend deux paramètres : la requête ($query) et une fonction anonyme, qui va permettre de gérer le retour du serveur (callBack ou fonction de rappel)


