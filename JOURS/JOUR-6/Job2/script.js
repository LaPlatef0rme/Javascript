const papillon = document.getElementById("commandePapillon");
papillon.addEventListener("click", function(){
    alert("Achat du papillon confirmé !");
});

var citations = [
    "All those moments will be lost in time, like tears in rain.",
    "I've seen things you people wouldn't believe.",
    "It’s not an easy thing to meet your maker.",
    "The candle that burns twice as bright burns half as long.",
    "What’s it like to live in a constant state of fear and anxiety?",
    "You’re in a desert, walking along in the sand, when all of a sudden you look down and see a tortoise."
];

const jumbotron = document.getElementById("jumbotron");
const rebooter = document.getElementById("rebooter");

rebooter.addEventListener("click", function() {
    const afficherCita = citations[Math.floor(Math.random() * citations.length)];

    jumbotron.innerHTML = "<i><h3>" + afficherCita + "</i></h3>";
});

//Liste :
const list = document.querySelectorAll(".list-group-item");
list.forEach(objet =>{
    //parcourt les elements de ma liste
    objet.addEventListener("click", ()=> {
        // au click, va changer la couleur
        // les éléments ne correspondent à rien (en style) :
        list.forEach(element => {
            element.style.backgroundColor ="";
            element.style.color = "";
        });
        // je les définis à la fin de ma boucle
        // quand on clique dessus, les couleurs données s'appliquent
        objet.style.backgroundColor = "red";
        objet.style.color = "white";
    });
});


//spinner