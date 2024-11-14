    const button = document.getElementById("button");
    const compteur = document.getElementById("compteur");

    let count = 0;


function AddDone(){
    count++;
    compteur.textContent = count //va récupérer mon incrémentation de compteur
}

button.addEventListener ('click', AddDone); //récup le click et sera ajt au button