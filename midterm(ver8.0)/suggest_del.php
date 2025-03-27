<?php
header('Content-Type: application/json'); // Ensure the response is JSON

$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}

// Select database
$conn->select_db("Taste_Trail");

// Validate POST data
if (!isset($_POST["id"])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input: ID is required']);
    $conn->close();
    exit;
}

// Prepare the query
$stmt = $conn->prepare("DELETE FROM pairings WHERE id = ?");
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to prepare statement: ' . $conn->error]);
    $conn->close();
    exit;
}

// Bind parameters
$id = $_POST["id"];
$stmt->bind_param("i", $id);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Pairing deleted successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to delete pairing: ' . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
