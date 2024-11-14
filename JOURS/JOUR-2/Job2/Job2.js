function ShowHide(){
    let article = document.getElementById("article");
    if (article.style.display === "none") {//vérifie si l'article est visible sur la page
        article.style.display = "block";
    } else {
        article.style.display = "none";// sinon on le cache
    }
}

document.getElementById("button").addEventListener("click", ShowHide);