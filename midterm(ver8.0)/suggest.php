<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

// Select database
if (!$conn->select_db("Taste_Trail")) {
    echo json_encode(['status' => 'error', 'message' => 'Database selection failed']);
    $conn->close();
    exit;
}

// Validate POST data
if (!isset($_POST["id"]) || !is_numeric($_POST["id"])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid or missing ID']);
    $conn->close();
    exit;
}

// Prepare the query
$stmt = $conn->prepare("SELECT pairings.id, pairings.suggestion, pairings.user_name, pairings.created_at 
                        FROM pairings 
                        JOIN blogs ON pairings.blog_id = blogs.id 
                        WHERE blogs.id = ? 
                        ORDER BY likes DESC");

// Check if the statement was prepared successfully
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Query preparation failed: ' . $conn->error]);
    $conn->close();
    exit;
}

// Bind and execute
$id = (int)$_POST["id"];
$stmt->bind_param("i", $id);

if (!$stmt->execute()) {
    echo json_encode(['status' => 'error', 'message' => 'Query execution failed: ' . $stmt->error]);
    $stmt->close();
    $conn->close();
    exit;
}

// Fetch results
$result = $stmt->get_result();
$pairings = [];

while ($row = $result->fetch_assoc()) {
    $pairings[] = $row;
}

// Close connections
$stmt->close();
$conn->close();

// Return JSON response
echo json_encode($pairings);
?>
