<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des utilisateurs</title>
    <link rel="stylesheet" href="users.css?t=<?=time()?>">
</head>
<body>
<h1>Liste des utilisateurs</h1>
    <table id="user-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>
    <button id="update-btn">Update</button>
    <script src="script.js"></script>
</body>
</html>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $users = array();
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users, JSON_PRETTY_PRINT);

} else {
    echo json_encode(array("message" => "Aucun utilisateur trouvé"));
}

$conn->close();
?>

