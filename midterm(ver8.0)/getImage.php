<?php
$servername = "localhost";
$username = "root";
$password = "";

// Establish database connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Select the database
$conn->select_db("Taste_Trail");

// Prepare the SQL statement
$stmt = $conn->prepare("SELECT file_path FROM blogs WHERE id = ?");
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

// Bind the parameter
$stmt->bind_param("i", $_POST["id"]);

// Execute the query
$stmt->execute();

// Fetch the result
$result = $stmt->get_result();

// Convert the result to an array
$data = $result->fetch_assoc();

// Close the statement and connection
$stmt->close();
$conn->close();

// Set the Content-Type header and return JSON
header('Content-Type: application/json');
echo json_encode($data);

?>