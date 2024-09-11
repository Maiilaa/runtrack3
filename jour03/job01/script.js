$(document).ready(function() {
    $("#afficher-texte").click(function() {
        $("#citation").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
    });
    $("#cacher-texte").click(function() {
        $("#citation").text("");
    });
});