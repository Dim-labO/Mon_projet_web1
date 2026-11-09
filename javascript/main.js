
//Afficher ou masquer des encarts sur la page Ressources lorsqu'un utilisateur clique sur l'un bouton.
//JS doit retrouver le bouton que l'on a créé en HTML pour ensuite agir dessus 
const boutonsRessources = document.querySelectorAll(".bouton-ressources");

//Pour parcourir tous les boutons de la page
boutonsRessources.forEach(function(bouton) {
    //JS doit retrouver la section correpondant au bouton 
    const sectionRessources = bouton.closest("section");
    //JS doit retrouver l'encart correspondant à la section dans laquel le bouton aura été cliqué
    const encartRessources = sectionRessources.querySelector(".encart-ressources");

    //On va maintenant demander à JS si l'utilisateur clique sur le bouton il fera telle action
    bouton.addEventListener("click", function () {
        //Ajout d'une instruction dans la fonction qui écoute le clic sur le bouton : si on clique sur le bouton tu feras l'inverse de la consigne CSS "encart--masque"
        encartRessources.classList.toggle("encart--masque");
        
        //Rendons le bouton intelligent : si encart--masque actif mettre le bouton "en savoir plus →" sinon mettre le bouton "réduire ↑"
        if (encartRessources.classList.contains("encart--masque")) {
            bouton.textContent = "En savoir plus ↓";
        } 
        else {
            bouton.textContent = "Réduire ↑";
        }
    });
});

//Filtrer les ressources par catégorie.
//JS doit retrouver les 4 boutons HTML 
const boutonsCollections = document.querySelectorAll("#filtres-collections button");

//Sélectionner les 3 sections 
const collections = document.querySelectorAll("section[data-collection]");

//On va maintenant demander à JS si l'utilisateur clique sur l'un des boutons il fera telle action
boutonsCollections.forEach(function (bouton) {

    //Installation d'un écouteur de clic sur chaque bouton
    bouton.addEventListener("click", function () {
        //Création d'une constante qui permet d'identifier le bouton cliqué
        const collectionChoisie = bouton.getAttribute("data-collection");

        //A chaque fois qu'un bouton sera sélectionné il aura le filtre "bouton sélectionné" et il sera retiré des autres
        boutonsCollections.forEach(function (boutonActuel) {

            //Décider quel bouton, pour cela le bouton doit correspondre au bouton cliqué 
            if (boutonActuel === bouton) {
                //Si c'est bien lui on lui ajoutera le filtre actif
                boutonActuel.classList.add("filtre--actif"); 
            }
            else {
                //Autrement on lui retire le filtre actif
                boutonActuel.classList.remove("filtre--actif"); 
            }
        }) 

        //Création d'une boucle parcourant collections
        collections.forEach(function (collection) {
            //Décider quelle collection afficher, vérifier de la collectionChoisie est strictement égale à la collection recherchée
            if (collectionChoisie === "toutes" || 
                collectionChoisie === collection.getAttribute("data-collection")) {
                //Si c'est bien elle il ne faut pas que la classe CSS de masquage fonctionne
                collection.classList.remove("encart--masque"); 
            }
            else {
                //Autrement si ce n'est pas elle, lui attribuer la classe CSS de masquage
                collection.classList.add("encart--masque");
            }
        }); 
        
    });

});


//Filtrer les actualités par catégories.
//JS doit retrouver les 6 boutons HTML 
const boutonsActus = document.querySelectorAll("#filtres-categories button");

//Sélectionner les 5 sections 
const articlesActus = document.querySelectorAll("li[data-categorie]");

//On va maintenant demander à JS si l'utilisateur clique sur l'un des boutons il fera telle action
boutonsActus.forEach(function (bouton) {

    //Installation d'un écouteur de clic sur chaque bouton
    bouton.addEventListener("click", function () {
        //Création d'une constante qui permet d'identifier le bouton cliqué
        const categorieChoisie = bouton.getAttribute("data-categorie");

        //A chaque fois qu'un bouton sera sélectionné il aura le filtre "bouton sélectionné" et il sera retiré des autres
        boutonsActus.forEach(function (boutonActuel) {

            //Décider quel bouton, pour cela le bouton doit correspondre au bouton cliqué 
            if (boutonActuel === bouton) {
                //Si c'est bien lui on lui ajoutera le filtre actif
                boutonActuel.classList.add("filtre--actif"); 
            }
            else {
                //Autrement on lui retire le filtre actif
                boutonActuel.classList.remove("filtre--actif"); 
            }
        }) 

        //Création d'une boucle parcourant catégories
        articlesActus.forEach(function (categorie) {
            //Décider quelle catégorie afficher, vérifier de la categorieChoisie est strictement égale à la categorie recherchée
            if (categorieChoisie === "tous" || 
                categorieChoisie === categorie.getAttribute("data-categorie")) {
                //Si c'est bien elle il ne faut pas que la classe CSS de masquage fonctionne
                categorie.classList.remove("encart--masque"); 
            }
            else {
                //Autrement si ce n'est pas elle, lui attribuer la classe CSS de masquage
                categorie.classList.add("encart--masque");
            }
        }); 
        
    });

});


//Rendons le formulaire intéractif et fonctionnel
//Récupérer les différents champs
const champNom = document.querySelector("#nom");
const champPrenom = document.querySelector("#prenom");
const champEmail = document.querySelector("#email")
const champTel = document.querySelector("#tel")


//Installation d'un écouteur quand l'utilisateur quitte le focus sur l'élément champNom
champNom.addEventListener("blur", function() {

    //Création d'un objet avertissementMail pour informer l'utilisateur que le nom est obligatoire
    const avertissementNom = document.querySelector(".nomobligatoire"); 
    //Quand le nom est oublié un message apparaît en-dessous de la case
    if (champNom.checkValidity()) {
        avertissementNom.classList.add("infonom--masque");
    } 
    //Autrement rien n'apparaît
    else {
        avertissementNom.classList.remove("infonom--masque");
    }
        
});

//Installation d'un écouteur quand l'utilisateur quitte le focus sur l'élément champPrenom
champPrenom.addEventListener("blur", function() {

    //Création d'un objet avertissementPrenom pour informer l'utilisateur que le prénom est obligatoire
    const avertissementPrenom = document.querySelector(".prenomobligatoire"); 
    //Quand le prénom est oublié un message apparaît en-dessous de la case
    if (champPrenom.checkValidity()) {
        avertissementPrenom.classList.add("infoprenom--masque");
    } 
    //Autrement rien n'apparaît
    else {
        avertissementPrenom.classList.remove("infoprenom--masque");
    }
        
});

//Installation d'un écouteur quand l'utilisateur quitte le focus sur l'élément champEmail
champEmail.addEventListener("blur", function() {

    //Création d'un objet avertissementMail pour informer l'utilisateur que le mail qu'il a rentré est invalide
    const avertissementMail = document.querySelector(".emailobligatoire"); 
    //Quand l'adresse mail est invalide un message apparaît en-dessous de la case
    if (champEmail.checkValidity()) {
        avertissementMail.classList.add("infomail--masque");
    } 
    //Autrement rien n'apparaît
    else {
        avertissementMail.classList.remove("infomail--masque");
    }
        
});

//Installation d'un écouteur quand l'utilisateur quitte le focus sur l'élément champTel
champTel.addEventListener("blur", function() {

    //Création d'un objet avertissementTel pour informer l'utilisateur que le numéro de téléphone qu'il a rentré est invalide
    const avertissementTel = document.querySelector(".telobligatoire"); 
    //Quand le numéro de téléphone est invalide un message apparaît en-dessous de la case
    if (champTel.checkValidity()) {
        avertissementTel.classList.add("infotel--masque");
    } 
    //Autrement rien n'apparaît
    else {
        avertissementTel.classList.remove("infotel--masque");
    }
        
});

//Récupérer le formulaire
const formulaire = document.querySelector(".formulaire")
//Création d'un objet confirmationEnvoi pour informer l'utilisateur que son formulaire a bien été envoyé
const confirmationEnvoi = document.querySelector(".confirmation"); 

//Quand l'utilisateur click sur le bouton submit, JS comprend que le formulaire est envoyé
formulaire.addEventListener("submit", function(event) {
    console.log("La fonction submit est exécutée");
    // Le navigateur ne poursuit pas l'envoi classique du formulaire.
    event.preventDefault();
   
    //Quand l'utilisateur a bien rempli le formulaire, un message de validation va apparaître
    if (formulaire.checkValidity()) {
        confirmationEnvoi.classList.remove("confirmation--masque");
    } 
    //Autrement rien n'apparaît 
    else {
        confirmationEnvoi.classList.add("confirmation--masque");
    }
    
});

//Enlever le message de confirmation si l'utilisateur modifie un des champs 
//Sélectionner les input 
const mesInput = formulaire.querySelectorAll("input");

//On va parcourir les différents input
mesInput.forEach(function (input) {

    //Installation d'un écouteur de modification sur chaque champ
    input.addEventListener("input", function () {

        confirmationEnvoi.classList.add("confirmation--masque"); 

    });

});


/* //Premier essais : Afficher ou masquer un encart sur la page Ressources lorsqu'un utilisateur clique sur un bouton.
//JS doit retrouver le bouton que l'on a créé en HTML pour ensuite agir dessus 
const boutonRessources = document.querySelector("#bouton-ressources");

//JS doit retrouver l'encart que l'on a créé en HTML 
const encartRessources = document.querySelector("#encart-ressources");

//On va maintenant demander à JS si l'utilisateur clique sur le bouton il fera telle action
boutonRessources.addEventListener("click", function () {
    //Ajout d'une instruction dans la fonction qui écoute le clic sur le bouton : si on clique sur le bouton tu feras l'inverse de la consigne CSS "encart--masque"
    encartRessources.classList.toggle("encart--masque")

    //Rendons le bouton intelligent : si encart--masque actif mettre le bouton "en savoir plus →" sinon mettre le bouton "réduire ↑"
    if (encartRessources.classList.contains("encart--masque")) {
        boutonRessources.textContent = "En savoir plus →"; 
    }
    else {
        boutonRessources.textContent = "Réduire ↑";
    }
}); */


/*    //Faire en sorte que JS récupère les 7 informations importantes pour ensuite les exploiter
    const nomSaisie = document.querySelector("#nom").value
    const prenomSaisie = document.querySelector("#prenom").value
    const emailSaisie = document.querySelector("#email").value
    const telSaisie = document.querySelector("#tel").value
    const objetSaisie = document.querySelector("#objet").value
    const dateSaisie = document.querySelector("#date").value
    const messageSaisie = document.querySelector("#message").value

    //Créer un objet pour rassembler plusieurs informations sous forme de paires clés-valeur
    const donneesContact = {
    nom: nomSaisie,
    prenom: prenomSaisie,
    email: emailSaisie,
    telephone: telSaisie,
    objet: objetSaisie,
    date: dateSaisie,
    message: messageSaisie
    };

    const champsValide = document.querySelector(".champsobligatoires");
    const mailValide = document.querySelector(".emailobligatoire");
    const telValide = document.querySelector(".telobligatoire");  */