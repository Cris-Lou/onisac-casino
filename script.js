/**
 * Event Listener for startButton
 */
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
    
    /**
    * déclarations des variables et constantes
     */
    let interdit_jeux = window.prompt("Bonjour, êtes-vous interdit de jeux ? (Répondez par oui ou non)");
    let solde = window.prompt("Quel est votre solde ?");
    let age = window.prompt ("Quel est votre âge ?");
    let action;
    
    /**
     * fonctions
     */
    function autoriser_entree () {
            if (interdit_jeux == "non" && solde >= -8000) {
                alert("Bienvenu(e) au casino !");
            }
            else if (solde < -8000) {
                alert("Votre solde est insuffisant pour entrer.");
            }
            else if (interdit_jeux == "oui") {
                alert("Vous êtes interdit de jeux. Vous ne pouvez pas entrer. Aurevoir.");
            }
            else{
                alert ("Nous n'avons pas compris votre saisie. Merci de recommencer.");
            }
    };
    
    
    function verifier_age () {
            if (age < 18) {
                alert("Nous attirons votre attention sur le fait que votre âge vous permet de jouer mais vous ne remporterez pas vos gains.");
            }
            else {
                alert("Nous vous souhaitons un maximum de gains.");
            }
    };
    
    function servir_boisson () {
        // mettre en place un code pour choisir sa boisson et décrémenter le solde à chaque conso.
        if (age > 21 && solde >= 8) {
            alert("sélectionnez et dégustez votre boisson avec modération.");
        }
        else if (solde >= 5) { 
            alert("Vous ne pouvez boire que du soft.");
        }
        else {
            alert("Votre solde est insuffisant pour consommer.");
        }
    };

    // function verifier_solde() {
    //     if (solde < -8000) {
    //         alert("Votre solde est insuffisant pour continuer"); // bout de code à utiliser à la mise en place d'un code pour décrémenter le solde à chaque conso.
    //     }
    //     else {
    //         alert("enjoy");
    //     }
    // }
    
    
    /**
     * déroulement du code
     */
    // vérification droits d'entrer
    autoriser_entree();
    
    // si entrée autorisée et tant que le solde et le choix d'action est autre que sortir...
    while(solde >= -8000 && action != "sortir" && interdit_jeux == "non"){
        action = prompt ("Que voulez vous faire ? (Jouer, consommer ou sortir)");
                    //choix action de jouer
        if (action == "jouer"){
            verifier_age();
        }
                //choix action de consommer
        else if (action == "consommer") {
            servir_boisson();
        }
                //erreur de saisie
        else {
            alert("Nous n'avons pas compris votre saisie.");
            action;
        }
    };
    // choix action sortir ou solde insuffisant
    if (action == "sortir" || solde <-8000) { 
        alert("Merci de votre visite, à bientôt !");
    }
});

