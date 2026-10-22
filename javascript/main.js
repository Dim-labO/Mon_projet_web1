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