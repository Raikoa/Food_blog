<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);

$conn->select_db("Taste_Trail");

// 檢查連接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $commend = intval($_POST['commend']);

    //指令1 : 頁面刷新時會執行的js，用於更新所有blog的按讚數量
    if($commend == 1){
        $stmt = $conn->prepare("SELECT id,likes FROM blogs");
        $stmt->execute();

        // 獲取所有結果
        $result = $stmt->get_result();
        $results = [];
        while($row = $result->fetch_assoc()){
            $results[] = $row;
        }

        // 將結果以 JSON 格式輸出
        header('Content-Type: application/json');
        echo json_encode($results);
        $conn->close();
        exit;
    }
}

if(isset($_SESSION['user_id'])){

    // 確保請求是 POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // 獲取 AJAX 傳來的 blog_id
        $blog_id = intval($_POST['blog_id']);
        
        
         // 檢查是否已按讚
        $stmt = $conn->prepare("SELECT 1 FROM likes WHERE blog_id = ? AND user_id = ?");
        $stmt->bind_param('is', $blog_id, $_SESSION['user_name']);
        $stmt->execute();
        $stmt->store_result();

        // 已按讚 - 減少一個讚
        if ($stmt->num_rows > 0) {

            $stmt->close();

            // 從 likes 表中移除按讚記錄
            $stmt = $conn->prepare("DELETE FROM likes WHERE blog_id = ? AND user_id = ?");
            $stmt->bind_param('is', $blog_id, $_SESSION['user_name']);
            $stmt->execute();

            // 減少 blogs 表中的按讚數量
            $stmt = $conn->prepare("UPDATE blogs SET likes = likes - 1 WHERE id = ?");
            $stmt->bind_param('i', $blog_id);
            $stmt->execute();

            // 獲取更新後的按讚數量
            $stmt = $conn->prepare("SELECT likes FROM blogs WHERE id = ?");
            $stmt->bind_param('i', $blog_id);
            $stmt->execute();
            $stmt->bind_result($likes);
            $stmt->fetch(); //??

            // 返回最新的按讚數量
            echo json_encode(['success' => true, 'action' => 'unliked', 'likes' => $likes]);
        }
        

        // 沒按讚 - 減少一個讚
        else{
            $stmt->close();
            $stmt = $conn->prepare("INSERT INTO likes (blog_id, user_id) VALUES (?, ?)");
            $stmt->bind_param('is', $blog_id, $_SESSION['user_name']);
            $stmt->execute();
            // 更新該博客的按讚數量
            $stmt = $conn->prepare("UPDATE blogs SET likes = likes + 1 WHERE id = ?");
            $stmt->bind_param('i', $blog_id);
            $stmt->execute();

            // 獲取更新後的按讚數量
            $stmt = $conn->prepare("SELECT likes FROM blogs WHERE id = ?");
            $stmt->bind_param('i', $blog_id);
            $stmt->execute();
            $stmt->bind_result($likes);
            $stmt->fetch();

            // 返回最新的按讚數量
            echo json_encode(['success' => true,'action' => 'liked' ,'likes' => $likes]);
            $stmt->close();
        }
    } 
    else {
        echo json_encode(['success' => false, 'message' => 'Invalid request']);
    }
}else{
    echo json_encode(['success' => false ,'message' => 'Please login to like']);
}
$conn->close();
?>
