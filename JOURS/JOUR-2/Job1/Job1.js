function Citation(){
    let maCitation = document.getElementById("citation"); //document correspond à l'html qu'on veut récup
    let texteCitation = maCitation.textContent; // va stocker mon texte HTML
    console.log(texteCitation);
}

document.getElementById("button").addEventListener("click", Citation);
//va récupérer le txt du bouton