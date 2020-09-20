// On va chercher les differents element de notre pag
const pages = document.querySelectorAll('.page');
const header = document.querySelector("header");
const nbPages = pages.length;
let pageActive = 1;
   

//On attends le chargement de la page
window.onload = () => {
    //On affiche la 1ere page du form
    document.querySelector(".page").style.display = "initial";

    //On affiche les n des pages dans l'entete
    // On parcourt la liste des pages
    pages.forEach((page, index) => {
        // On cree l'element "numero de page"
        let element = document.createElement("div");
        element.classList.add("page-num");
        element.id = "num" + (index + 1);
        if (pageActive === index + 1) {
            element.classList.add("active");
        }
        element.innerHTML = index + 1;
        
        header.appendChild(element);
    });
    //On gere les bouton "suivants"
    let boutons = document.querySelectorAll(".next");

    for(let bouton of boutons) {
        bouton.addEventListener("click", pageSuivante);
    }
    //On gere les bouton "precedent"
    boutons = document.querySelectorAll(".prev");

    for (let bouton of boutons) {
        bouton.addEventListener("click", pagePrecedente);
    }

}

/**
 * Fonction qui fait avancer le formulaire d'une page
 */
function pageSuivante(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.nextElementSibling.style.display = "initial"

    // On "désactive" la page active
    document.querySelector(".active").classList.remove("active")

    // On incrémente pageActive
    pageActive++

    // On "active" le nouveau numéro
    document.querySelector("#num"+pageActive).classList.add("active")
}

/**
 * Fonction qui fait reculer le formulaire d'une page
 */
function pagePrecedente() {
   

    //On masque toutes les pages
    for (let page of pages) {
        page.style.display = "none"
    }

    // on affiche la page precedente
    this.parentElement.previousElementSibling.style.display = "initial";

    // on incremente pageActive
    pageActive--

    // on active le nouveau numero
    document.querySelector("#num"+pageActive).classList.add("active");

}