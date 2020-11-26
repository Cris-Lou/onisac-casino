/**
 * Event Listener for startButton
 */
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
    
    /**
    * déclarations des variables et constantes
     */
    let autorisation_jeux = window.prompt("Bonjour, avez vous l'autorisation de jouer ? (Répondez par oui ou non)");
    let solde = window.prompt("Quel est votre solde ?");
    let age = window.prompt ("Quel est votre âge ?");
    let action;
    
    /**
     * fonctions
     */
    function autoriser_entree () {
            if (autorisation_jeux == "oui" && solde >= -8000) {
                alert("Bienvenu(e) au casino !");
                // return "ok";
            }
            else if (solde < -8000) {
                alert("Votre solde est insuffisant pour entrer.");
            }
            else if (autorisation_jeux == "non") {
                alert("Vous êtes interdit de jeux. Vous ne pouvez pas entrer. Aurevoir.");
            }
            else {
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
    
    
    /**
     * déroulement du code
     */
    // vérification droits d'entrer
    autoriser_entree();
    
    // si entrée autorisée et tant que le solde et le choix d'action est autre que sortir...
    while(solde >= -8000 && action != "sortir" && autorisation_jeux == "oui"){
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
        else if (action != "jouer" || "consommer" || "sortir"){
            alert("Nous n'avons pas compris votre saisie.");
            action;
        }
    }
    
    if (action === "sortir") { 
        alert("Merci de votre visite, à bientôt !");
    }
    else if (solde < -8000) {
        alert("Votre solde est insuffisant pour continuer"); // mettre en place un code pour décrémenter le solde à chaque conso.
    }
});

