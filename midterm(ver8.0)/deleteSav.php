<?php
session_start();

if (isset($_SESSION['user_name'])) {
    $user_name = $_SESSION['user_name'];
} else {
    header('Location: login.php');
    die;
}

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$conn->select_db("Taste_Trail");

$stmt = $conn->prepare("SELECT Saved FROM users WHERE user_name = ?");
if ($stmt) {
    $stmt->bind_param('s', $user_name);
    $stmt->execute();

    $result = $stmt->get_result();
    $save = "";
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $save = $row['Saved'];
        $records = explode(" ", trim($save));
        $id = $_POST['Sav_id'];
       $index = array_search($id, $records);
       unset($records[$index]);
        
    } else {
        echo json_encode(['success' => false, 'message' => 'no records!']);
        exit;
    }
    $new_save = "";
    foreach($records as $sav){
        $new_save = $new_save.$sav." ";
    }

    $stmt->close(); 
} else {
    echo json_encode(['success' => false, 'message' => 'stmt error']);
    exit;
}
$stmt = $conn->prepare("UPDATE users SET Saved = ? WHERE user_name = ?");
if($stmt){
    $stmt->bind_param('ss', $new_save,$user_name);
    $stmt->execute();
    echo json_encode(['success' => true, 'message' => 'delete success']);
    exit;
}else{
    echo json_encode(['success' => false, 'message' => 'stmt error']);
    exit;
}

$conn->close();
?>
