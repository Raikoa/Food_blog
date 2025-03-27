<?php
header('Content-Type: application/json');

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}

// Select database
$conn->select_db("Taste_Trail");

// Validate POST data
if (!isset($_POST["blog_id"], $_POST["SU_text"], $_POST["username"])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
    $conn->close();
    exit;
}

// Prepare the query
$stmt = $conn->prepare("INSERT INTO pairings (blog_id, suggestion, user_name, created_at) VALUES (?, ?, ?, ?)");

// Check if the statement was prepared successfully
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Query preparation failed: ' . $conn->error]);
    $conn->close();
    exit;
}

// Bind parameters
$blog_id = $_POST["blog_id"];
$suggestion = $_POST["SU_text"];
$username = $_POST["username"];
$created_at = date("Y-m-d");

$stmt->bind_param("isss", $blog_id, $suggestion, $username, $created_at);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Created successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Creation failed: ' . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
