<?php
session_start();

if (isset($_SESSION['user_name'])) {
    $user_name = $_SESSION['user_name'];
    
} else {
    
    echo json_encode(['success' => false, 'message' => 'You need to login!']);
    die;
}
$servername = "localhost";
$username="root";
$password = "";
$conn = new mysqli($servername, $username, $password);
if($conn -> connect_error){
    die("Connection failed: " . $conn->connect_error);
}
$conn -> select_db("Taste_Trail");
$id = $_POST['id'];

$stmt = $conn->prepare("SELECT Saved FROM users WHERE user_name = ?");
if ($stmt) {
    $stmt->bind_param("s", $user_name); 
    if($stmt->execute()){
        $save = "";
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $save = $row['Saved'];
            $records = explode(" ", $save);
            if(count($records) >= 10){
                echo json_encode(['success' => false, 'message' => 'You reached the limit!']);
                exit;
            }else{
                if(!in_array($_POST['id'], $records)){
                    $save = $save . $_POST['id'] . " ";
                }else{
                    echo json_encode(['success' => false, 'message' => 'Already Saved!']); 
                    exit;
                }
                $stmt = $conn->prepare("UPDATE users SET Saved = ? WHERE user_name = ?");
                if($stmt){
                    $stmt->bind_param("ss", $save, $user_name);
                    if($stmt->execute()){
                        echo json_encode(['success' => true, 'message' => 'Saved successful!']); 
                        exit;
                    }else{
                        echo json_encode(['success' => false, 'message' => 'fail to update limit!']); 
                        exit;
                    }
                }else{
                    echo json_encode(['success' => false, 'message' => 'fail to prepare update statement!']); 
                    exit;
                }
                
                  
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'no records found']); 
            exit;
        }
    }else{
        echo json_encode(['success' => false, 'message' => 'fail to execute select statement!']); 
        exit;
    }
}else{
    echo json_encode(['success' => false, 'message' => 'fail to prepare select statement!']); 
    exit;
}





$stmt->close();
$conn->close();
?>