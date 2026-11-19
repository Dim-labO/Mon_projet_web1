//Importer le module better-sqlite3
const betterSqlite = require("better-sqlite3")

//Création d'une constante pour la base de données
const db = new betterSqlite("investetvous.db")

//Création d'une nouvelle table 
db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
        -- Chaque contact aura son propre numéro entier qui sera unique, attribué automatique
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        -- Le nom et les autres champs seront sous format texte et seront obligatoires (à part la date)
        nom TEXT NOT NULL,

        prenom TEXT NOT NULL,

        email TEXT NOT NULL,

        telephone TEXT NOT NULL,

        objet TEXT NOT NULL,

        date TEXT,

        message TEXT NOT NULL,

        -- Date et heure de création générées automatiquement
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP

    );
`);

//Préparer l'enregistrement d'un contact dans la base de données
const insertContact = db.prepare(`
    INSERT INTO contacts (
        nom,
        prenom,
        email,
        telephone,
        objet,
        date,
        message
    )
    
    VALUES (
        @nom,
        @prenom,
        @email,
        @telephone,
        @objet,
        @date,
        @message
    )
`);

//Permet à un autre fichier JavaScript d'importer la connexion avec require()
module.exports = {
    db,
    insertContact
};

/*Première insertion 
insertContact.run({
    nom: "Dupont",
    prenom: "Jean",
    email: "jean.dupont@gmail.com",
    telephone: "0612345678",
    objet: "Bilan patrimonial",
    date: null,
    message: "Je souhaite réaliser un bilan patrimonial."
}); */

/* Tests de fonctionnement avant rattachement à l'API Express

// Préparer la modification d'un contact
const updateContact = db.prepare(`
    UPDATE contacts
    SET objet = @objet
    WHERE id = @id
`);

updateContact.run({
    objet: "Conseil en investissement",
    id: 1
});

// Préparer la suppression d'un contact 
const deleteContact = db.prepare(`
    DELETE FROM contacts
    WHERE id = @id;    
`);

deleteContact.run({
    id: 1
});

// Préparer une requête pour récupérer tous les contacts
const selectContacts = db.prepare(`
    SELECT * FROM contacts
`);

// Récupérer et afficher tous les contacts
const contacts = selectContacts.all();

console.log(contacts);*/