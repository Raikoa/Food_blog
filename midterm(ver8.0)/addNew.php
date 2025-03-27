<?php
/*
$server = "localhost";
$user = "root";
$password = "";
$conn = new mysqli($server, $user, $password);
if($conn -> connect_error){
    die("Connection failed" . $conn->connect_error);
}
$conn -> select_db("Taste_Trail");

$img_Dir = "ref/";
if (!is_dir($img_Dir) && !mkdir($img_Dir, 0777, true)) { //0777 means permisson 7 for all, which means read write and execute
    die("fail to find directory");
}

if ($_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $fileName = basename($_FILES['image']['name']);
}else{
    die("File upload error: " . $_FILES['image']['error']);
}

$file_path = $img_Dir . $fileName;

$check = getimagesize($_FILES["image"]["tmp_name"]);
if($check === false){
    die("File is not an image.");
}

$allowedTypes = ['image/jpeg', 'image/png'];
if (!in_array($check['mime'], $allowedTypes)) { //mime returns file type like image/...
    die("Only JPG and PNG images are allowed.");
}

if ($_FILES['image']['size'] > 5000000) { // 5000 KB
    die("File is too large.");
}

if (move_uploaded_file($_FILES["image"]["tmp_name"], $file_path)) {
    $stmt = $conn->prepare("INSERT INTO blogs (title, subtitle, main_text, sub_text, file_path) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssss", $_POST["title"], $_POST["subtitle"], $_POST["text"], $_POST["sub_text"], $file_path);
    $stmt->execute();
    $stmt->close();
} else {
    die("Failed to move uploaded file.");
}*/




//modify with json response for popup window message

header('Content-Type: application/json');

// Suppress errors in production but log them for debugging
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Database connection details
$server = "localhost";
$user = "root";
$password = "";

// Establish connection
$conn = new mysqli($server, $user, $password);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

// Select database
if (!$conn->select_db("Taste_Trail")) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to select database.']);
    exit;
}

// Image directory setup
$img_Dir = "ref/";
if (!is_dir($img_Dir) && !mkdir($img_Dir, 0777, true)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to create image directory.']);
    exit;
}

// Check if image is uploaded
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Image upload error or no file uploaded.']);
    exit;
}

// File upload checks
$fileName = basename($_FILES['image']['name']);
$file_path = $img_Dir . $fileName;

if (file_exists($file_path)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File already exists. Please upload a different file.']);
    exit;
}

$check = getimagesize($_FILES["image"]["tmp_name"]);
if ($check === false) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File is not an image.']);
    exit;
}

$allowedTypes = ['image/jpeg', 'image/png'];
if (!in_array($check['mime'], $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Only JPG and PNG images are allowed.']);
    exit;
}

if ($_FILES['image']['size'] > 5000000) { 
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File is too large.']);
    exit;
}

// Move the uploaded file
if (!move_uploaded_file($_FILES["image"]["tmp_name"], $file_path)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
    exit;
}



// Insert into the database
$stmt = $conn->prepare("INSERT INTO blogs (title, subtitle, main_text, sub_text, file_path) VALUES (?, ?, ?, ?, ?)");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to prepare SQL statement.']);
    exit;
}

$stmt->bind_param("sssss", $_POST["title"], $_POST["subtitle"], $_POST["main_text"], $_POST["sub_text"], $file_path);

if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Blog added successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database insert failed: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>