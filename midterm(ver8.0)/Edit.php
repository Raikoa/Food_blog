<?php
$editID = NULL;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    foreach ($_POST as $key => $value) {
        if (strpos($key, "edit_") === 0) {
            $editID = str_replace("edit_", "", $key);
            break;
        }
    }
}

if ($editID === NULL || !is_numeric($editID)) {
    echo json_encode(['success' => false, 'message' => 'Invalid or missing ID']);
    exit;
}

$img_Dir = "ref/";
if (!is_dir($img_Dir) && !mkdir($img_Dir, 0777, true)) {
    echo json_encode(['success' => false, 'message' => 'Failed to create image directory']);
    exit;
}

$servername = "localhost";
$user = "root";
$password = "";
$conn = new mysqli($servername, $user, $password);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

$conn->select_db("Taste_Trail");


$stmt = $conn->prepare("SELECT file_path FROM blogs WHERE id = ?");
$stmt->bind_param("i", $editID);

if (!$stmt->execute()) {
    echo json_encode(['success' => false, 'message' => 'Failed to fetch current file path: ' . $stmt->error]);
    exit;
}

$result = $stmt->get_result();
$currentFilePath = NULL;
if ($row = $result->fetch_assoc()) {
    $currentFilePath = $row['file_path'];
} else {
    echo json_encode(['success' => false, 'message' => 'Blog entry not found for the provided ID.']);
    exit;
}


$file_path = $currentFilePath;

if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $fileName = basename($_FILES['image']['name']);
    $file_path = $img_Dir . $fileName;

    
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check === false) {
        echo json_encode(['success' => false, 'message' => 'File is not an image.']);
        exit;
    }

    $allowedTypes = ['image/jpeg', 'image/png'];
    if (!in_array($check['mime'], $allowedTypes)) {
        echo json_encode(['success' => false, 'message' => 'Only JPG and PNG images are allowed.']);
        exit;
    }

    if ($_FILES['image']['size'] > 5000000) {
        echo json_encode(['success' => false, 'message' => 'File is too large.']);
        exit;
    }

   
    if (!move_uploaded_file($_FILES["image"]["tmp_name"], $file_path)) {
        echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
        exit;
    }
}


$stmt = $conn->prepare("UPDATE blogs SET title = ?, subtitle = ?, main_text = ?, sub_text = ?, file_path = ? WHERE id = ?");
$stmt->bind_param("sssssi", $_POST["title"], $_POST["subtitle"], $_POST["main_text"], $_POST["sub_text"], $file_path, $editID);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Blog edited successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Database update failed: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>