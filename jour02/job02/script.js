function showhide() {
    var article = document.getElementById("article");

    if (article) {
        article.remove();
    } else {
        var newArticle = document.createElement("article");
        newArticle.id = "article"; 
        newArticle.innerText = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}