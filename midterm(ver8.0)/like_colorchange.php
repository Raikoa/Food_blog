<?php
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);

$conn->select_db("Taste_Trail");

// 檢查是否登入
session_start();
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'User not logged in.']);
    exit;
}

// 獲取用戶 ID
$user_name = $_SESSION['user_name'];

// 查詢用戶已按讚的 blog_id 列表
$stmt = $conn->prepare("SELECT blog_id FROM likes WHERE user_id = ?");
$stmt->bind_param('s', $user_name);
$stmt->execute();
$result = $stmt->get_result();

$liked_blogs = [];
while ($row = $result->fetch_assoc()) {
    $liked_blogs[] = $row['blog_id']; //陣列追加操作
}

echo json_encode(['success' => true, 'liked_blogs' => $liked_blogs]);

$stmt->close();
$conn->close();
?>
