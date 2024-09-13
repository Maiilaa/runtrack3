<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrer les Données</title>
</head>
<body>
    <h1>Filtrer les Pokémon </h1>
    
    <form id="filterForm">
        <label for="type">Type :</label>
        <select id="type" name="type"></select>
        <input type="button" value="Filtrer" id="filterButton">
    </form>
    <div id="results"></div>
    <script src="script.js" defer></script>
</body>
</html>