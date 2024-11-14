// Sélectionne le textarea par son id
const textarea = document.getElementById("keylogger");

// Fonction qui gère l'ajout des lettres dans le textarea
function handleKeylogger(event) {
    // Vérifie si la touche tapée est une lettre de a à z (majuscule ou minuscule)
    if (/[a-zA-Z]/.test(event.key)) {
        // Si le textarea a le focus, on ajoute la lettre deux fois
        if (document.activeElement === textarea) {
            textarea.value += event.key + event.key;
        // } else {
        //     // Sinon, on ajoute la lettre une seule fois
        //     textarea.value += event.key;
        // }
    }
}
}

// Ajoute un écouteur d'événement sur `document` pour capter toutes les frappes de touches
document.addEventListener("keydown", handleKeylogger);
