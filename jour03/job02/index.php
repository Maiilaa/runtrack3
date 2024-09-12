<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mélanger l'arc en ciel</title>
    <link rel="stylesheet" href="style.css?t=<?=time()?>">
</head>
<body>
    <div id="container">
        <img id="arc1" src="../../Pictures/arc1.png" draggable="true">
        <img id="arc2" src="../../Pictures/arc2.png"  draggable="true">
        <img id="arc3" src="../../Pictures/arc3.png"  draggable="true">
        <img id="arc4" src="../../Pictures/arc4.png"  draggable="true">
        <img id="arc5" src="../../Pictures/arc5.png" draggable="true">
        <img id="arc6" src="../../Pictures/arc6.png"  draggable="true">
    </div>

    <div id="dropzone">
        <div id="drop1" class="drop-area"></div>
        <div id="drop2" class="drop-area"></div>
        <div id="drop3" class="drop-area"></div>
        <div id="drop4" class="drop-area"></div>
        <div id="drop5" class="drop-area"></div>
        <div id="drop6" class="drop-area"></div>
    </div>

    <div id="resultat"></div>
    <p class="gagné">Vous avez gagné </p>
    <p class="perdu">Vous avez perdu</p>
    <button id="melanger">Mélanger les images</button>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>