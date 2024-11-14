document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let formulaire = true;

    // Réinitialiser les messages d'erreur
    const errors = document.getElementsByClassName('error');
    for (let error of errors) {
        error.innerText = '';  // Réinitialise les erreurs
    }

    const firstname = document.getElementById('firstname').value;
    const password = document.getElementById('password').value;

    if (mail.length < 10 || !mail.includes('@')) {
        document.getElementById("mail-error").innerText = "L'email est invalide.";
        formulaire = false;
    }

    if (firstname.length < 4) {
        document.getElementById("firstname-error").innerText = "Votre prénom doit faire au minimum 4 caractères.";
        formulaire = false;
    }
    
    // Si le formulaire est valide, tu peux soumettre (ou traiter les données)
    if (formulaire) {
        alert("Formulaire envoyé avec succès !");
        // Si tu veux envoyer le formulaire
        document.getElementById('MyForm').submit();
    }
});
