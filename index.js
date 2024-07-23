// Fonction pour ajouter une valeur à l'élément d'entrée
function Solve(val) {
      // Récupération de l'élément HTML avec l'ID 'res' et stockage dans la variable 'v'
    var v = document.getElementById('res');
    v.value += val; //AJouter les valeur saisi
 }

 // Fonction pour évaluer l'expression mathématique saisie
 function Resultat() {
    // Récupération de la valeur actuelle de l'élément HTML avec l'ID 'res' et stockage dans 'num1'
    var num1 = document.getElementById('res').value;
     // Début d'un bloc try pour gérer les erreurs potentielles lors de l'évaluation
    try {
        // Remplacement de 'x' par '*' dans 'num1' et évaluation de l'expression avec eval
       var num2 = eval(num1.replace('x', '*'));
       // Mise à jour de l'élément d'entrée 'res' avec le résultat de l'évaluation
       document.getElementById('res').value = num2;
    } catch {
         // En cas d'erreur, mise à jour de 'res' à 'Error'
       document.getElementById('res').value = 'Error';
    }
 }


// Fonction pour effacer la valeur de l'élément d'entrée
 function Clear() {
     // Récupération de l'élément HTML avec l'ID 'res' et stockage dans 'inp'
    var inp = document.getElementById('res');
    // Réinitialisation de la valeur de 'inp' à une chaîne vide
    inp.value = '';
 }


 // Fonction pour supprimer le dernier caractère de l'élément d'entrée
 function Back() {
    // Fonction pour supprimer le dernier caractère de l'élément d'entrée
    var ev = document.getElementById('res');
    // Suppression du dernier caractère de la valeur actuelle de 'ev'
    ev.value = ev.value.slice(0, -1);
 }

 // Écouteur d'événements pour détecter les frappes au clavier
 document.addEventListener('keydown', function (event) {
        // Récupération de la touche pressée
    const key = event.key;
     // Définition des touches valides pour l'évaluation
    const validKeys = '0123456789+-*/.%';
     // Si la touche pressée est une touche valide, appeler la fonction Solve
    if (validKeys.includes(key)) {
         // Remplacer '*' par 'x' pour l'évaluation et appeler Solve
       Solve(key === '*' ? 'x' : key);
    }
    // Si la touche 'Enter' est pressée, appeler la fonction Resultat
    else if (key === 'Enter') {
        Resultat();
    } 
     // Si la touche 'Backspace' est pressée, appeler la fonction Back
    else if (key === 'Backspace') {
       Back();
    } 
    // Si la touche 'c' est pressée (en minuscule), appeler la fonction Clear
    else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });