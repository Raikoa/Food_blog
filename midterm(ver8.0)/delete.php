<?php
$DelId = NULL;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    foreach ($_POST as $key => $value) {
        if (strpos($key, "delete_") === 0) {
            $DelId = str_replace("delete_", "", $key);
            break;
        }
    }
}

if ($DelId === NULL || !is_numeric($DelId)) {
    echo json_encode(['success' => false, 'message' => 'Invalid or missing ID']);
    exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Failed to connect to database']);
    exit;
}

$conn->select_db("Taste_Trail");

$imagePath = null;
$stmt = $conn->prepare("SELECT file_path FROM blogs WHERE id = ?");
if ($stmt === false) {
    echo json_encode(['success' => false, 'message' => 'Failed to prepare statement']);
    exit;
}

$stmt->bind_param("i", $DelId);

if (!$stmt->execute()) {
    echo json_encode(['success' => false, 'message' => 'Failed to execute query']);
    $stmt->close();
    exit;
}

$stmt->bind_result($imagePath);
if (!$stmt->fetch()) {
    echo json_encode(['success' => false, 'message' => 'No blog found with the given ID']);
    $stmt->close();
    exit;
}
$stmt->close();

// Proceed if $imagePath is valid
if (empty($imagePath)) {
    echo json_encode(['success' => false, 'message' => 'No associated image found']);
    exit;
}

if ($imagePath) {
    if (file_exists($imagePath)) {
        if (!unlink($imagePath)) {
            echo json_encode(['success' => false, 'message' => 'Failed to delete image']);
            exit;
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Image file not found']);
        exit;
    }
}


$stmt = $conn->prepare("DELETE FROM blogs WHERE id = ?");
$stmt->bind_param("i", $DelId);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Article deleted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to delete article']);
}

$stmt->close();
$conn->close();
?>