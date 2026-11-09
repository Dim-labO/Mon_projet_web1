//Création du serveur http qui communiquera avec le site 
//Création d'une variable http qui va charger le module natif de Node.js pour créer un serveur 
const http = require("http");

//Création du serveur qui réagit quand on lui envoie une requête : notre code sera exécuté
const serveur = http.createServer(function(req, res) {

    console.log(req.url);
    
    //En fonction de la requête le routeur renvoi un message différent 
    if (req.url === "/") {
        res.statusCode = 200
        res.end("Bienvenue sur mon API !")

    } 
    else if (req.url === "/contact") {
        //Définition du code HTML
        res.statusCode = 200
        //Message adapté à la requête
        res.end("Voici la route contact")

    } 
    else {
        // Réponse si la route n'existe pas
        res.statusCode = 404
        res.end("Route introuvable")
    }
    
});

//Démarrage du serveur pour qu'il puisse écouter 
serveur.listen(3000, function() {
    console.log("Mon serveur est démarré !");
});

