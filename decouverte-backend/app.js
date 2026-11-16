//Chargement de Express
const express = require("express");

//Création de l'application Express
const app = express();

//Ajouter un middleware pour lire les données envoyées par les utilisateurs via le formulaire en JSON (transforme les données en objet JS)
app.use(express.json());

//Ajouter une middleware qui autorisera les échanges cross-origin (entre le back et le front)
const cors = require("cors");

//Utilisation de cors
app.use(cors());

//Définition d'une route qui permet à Express d'écouter les requêtes provennant de "/" et d'y répondre
app.get("/", function(req, res) {
    res.send("Bienvenue sur mon API Express");

});

//Création d'une route /contact
app.get("/contact", function(req, res) {
    res.status(200).send("Voici la route contact");
});

//Création d'une route POST, pour envoyer des infos au serveur
app.post("/contact", function(req, res) {
    const donnees = req.body;

    if (!donnees || typeof donnees !== "object" || Array.isArray(donnees)) {
        res.status(400).send("Les données envoyées sont invalides");
        return;
    }

    const champsObligatoires = [
        donnees.nom,
        donnees.prenom,
        donnees.email,
        donnees.telephone,
        donnees.objet,
        donnees.message
    ];

    // Vérifie si au moins un champ est absent ou vide après suppression des espaces
    const unChampEstVide = champsObligatoires.some(champ => typeof champ !== 'string' || !champ.trim());

    //Si c'est le cas message d'erreur
    if (unChampEstVide) {   
    res.status(400).send("Tous les champs sont obligatoires");
        return;
    };

    //Constante qui utilise REGEX pour vérifier l'email avec la méthode test()
    const emailValide = /^[\w\.-]+@[\w\.-]+\.\w+$/.test(donnees.email);

    //Si le mail est invalide, message d'alerte
    if (!emailValide) {   
        res.status(400).send("L'adresse mail est invalide");
        return;
    };

    //Constante qui utilise REGEX pour vérifier le numéro de téléphone avec la méthode test()
    const telephoneValide = /(?:(?:\+|00)33|0)[1-9](?:[\s.\-]*\d{2}){4}/.test(donnees.telephone);

    //Si le numéro de téléphone est invalide, message d'alerte
    if (!telephoneValide) {
        res.status(400).send("Le numéro de téléphone est invalide")
        return;
    };

    // La date est facultative
    if (donnees.date !== "") {

        // Vérifier le format JJ/MM/AAAA
        const formatDateValide = /^\d{2}\/\d{2}\/\d{4}$/.test(donnees.date);

        if (!formatDateValide) {
            res.status(400).send("Le format de la date doit être JJ/MM/AAAA");
            return;
        }

        // Séparer le jour, le mois et l'année
        const [jour, mois, annee] = donnees.date.split("/").map(Number);

        // Créer une date JavaScript
        const date = new Date(annee, mois - 1, jour);

        // Vérifier que la date existe réellement
        const dateValide =
            date.getDate() === jour &&
            date.getMonth() === mois - 1 &&
            date.getFullYear() === annee;

        if (!dateValide) {
            res.status(400).send("La date indiquée n'existe pas");
            return;
        }
    }

    //Afficher les données reçues dans le terminal
    console.log("Données reçues :", donnees);

    //Retourner une réponse au format JSON avec le statut HTTP 201
    res.status(201).json({
        message: "Demande de contact reçues",
        donnees: donnees
    });
});

//Création d'une route pour les requêtes qui ne correspondent à aucune route
app.use(function(req, res) {
    res.status(404).send("Route introuvable");
});

//L'application va écouter les requêtes provenant du port 3000
app.listen(3000);

