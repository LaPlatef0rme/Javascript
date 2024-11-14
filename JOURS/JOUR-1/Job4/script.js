function Bissextile(annee){
    if (annee % 4 === 0) { // si divisible par 4
        if (annee % 100 !== 0 || annee % 400 === 0) { // pas divisible par 100, sauf si divisible par 400
            return true; // l'année est bisextile
        }
    }
    return false; // sinon, elle n'est pas bisextile
}


console.log(Bissextile(2024)); // doit afficher true
console.log(Bissextile(1900)); // doit afficher false
console.log(Bissextile(2000)); // doit afficher true