<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs"; 
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

$sql = "SELECT id, nom, prenom, email FROM utilisateur"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $users = array();
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users, JSON_PRETTY_PRINT);
} else {
    echo json_encode(array("message" => "Aucun utilisateur trouvé"));
}

$conn->close();
?>

