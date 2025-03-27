<?php
if (isset($_GET['search'])) {
    $searchTerm = trim($_GET['search']); // 去除多餘空白

    // 判斷搜尋字詞是否為空
    if ($searchTerm === '') {
        // 搜尋字詞為空時跳轉到搜尋欄並顯示錯誤
        header("Location: index.php?error=no_results#themes");
        exit();
    }
    $db = new PDO("mysql:dbname=taste_trail", "root", "");
    $stmt = $db->prepare("SELECT * FROM blogs WHERE title LIKE :searchTerm OR subtitle LIKE :searchTerm 
    OR main_text LIKE :searchTerm OR sub_text LIKE :searchTerm");
    $stmt->execute([':searchTerm' => '%' . $searchTerm . '%']);
    $results = $stmt->fetchAll();

    if (!empty($results)) {
        // 假設只跳轉到第一篇符合條件的文章
        $firstPostId = htmlspecialchars($results[0]['id']); // 取得第一篇文章的 ID
        
        // 使用 header 跳轉並將搜尋字詞編碼後加入 URL
        header("Location: index.php?search=" . urlencode($searchTerm) . "#text_$firstPostId");
        exit(); // 停止後續執行
        
    } 
    
    else {
        // 沒有結果時跳轉回主頁，並顯示錯誤提示
        header("Location: index.php?error=no_results#themes");
        exit();
    }
}
?>
