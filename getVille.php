<?php

$cp = $_GET['CP']; 

$dsn = "mysql:host=localhost;dbname=rs2";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Use CP in your SQL query
$sql = "SELECT * FROM france_2019 WHERE CP = :cp";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':cp', $cp);
$stmt->execute();

// Fetch the results
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the results as JSON (or in any other format you prefer)
echo json_encode($results);
?>
