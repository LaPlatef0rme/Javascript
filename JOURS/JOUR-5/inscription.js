document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let formulaire = true;

    // Réinitialiser les messages d'erreur
    const errors = document.getElementsByClassName('error');
    for (let error of errors) {
        error.innerText = '';  // Réinitialise les erreurs
    }

    const mail = document.getElementById('mail').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const password = document.getElementById('password').value;
    const adress = document.getElementById('adress').value;
    const postal = document.getElementById('postal').value;

    // Validation du champ mail
    if (mail.length < 10 || !mail.includes('@')) {
        document.getElementById("mail-error").innerText = "L'email est invalide.";
        formulaire = false;
    }

    if (firstname.length < 4) {
        document.getElementById("firstname-error").innerText = "Votre prénom doit faire au minimum 4 caractères.";
        formulaire = false;
    }

    if (lastname.length < 4) {
        document.getElementById("lastname-error").innerText = "Votre nom doit faire au minimum 4 caractères.";
        formulaire = false;
    }

    if (password.length < 8) {
        document.getElementById("password-error").innerText = "Doit contenir 8 caractères min";
        formulaire = false;
    }

    if (adress.length < 10) {
        document.getElementById("adress-error").innerHTML = "Min 10 caractères requis.";
        formulaire = false;
    }

    if (postal.length !== 5) {
        document.getElementById("postal-error").innerText = "Le code postal doit comporter 5 chiffres.";
        formulaire = false;
    }

    // Si le formulaire est valide, tu peux soumettre (ou traiter les données)
    if (formulaire) {
        alert("Formulaire envoyé avec succès !");
        // Si tu veux envoyer le formulaire
        document.getElementById('MyForm').submit();
    }
});
