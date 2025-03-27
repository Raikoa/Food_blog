<?php
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql="CREATE DATABASE IF NOT EXISTS Taste_Trail";
if ($conn->query($sql) === TRUE) {
//   echo "Database created successfully\n";
} else {
//   echo "Error creating database: " . $conn->error . "\n";
}

$conn->select_db("Taste_Trail");

// user的資料庫建立
$sqlFilePath = 'sql/users_data.sql';

// 檢查檔案是否存在
if (!file_exists($sqlFilePath)) {
    die("<br>" . "SQL file not found: " . $sqlFilePath);
}

// 讀取 .sql 檔案內容
$sqlContent = file_get_contents($sqlFilePath);

// 將 SQL 語句分割成多個單獨的語句（以分號 ";" 為分隔符）
$sqlStatements = explode(';', $sqlContent);

// 執行每個 SQL 語句
foreach ($sqlStatements as $statement) {
    $statement = trim($statement); // 去除多餘的空格或換行
    if (!empty($statement)) { // 忽略空語句
        if ($conn->query($statement) === TRUE) {
            // echo "Query executed successfully: " . $statement . "<br>";
        } else {
            // echo "Error executing query: " . $conn->error . "<br>";
        }
    }
}

// user的資料庫建立
$sqlFilePath = 'sql/feedback.sql';

// 檢查檔案是否存在
if (!file_exists($sqlFilePath)) {
    die("<br>" . "SQL file not found: " . $sqlFilePath);
}

// 讀取 .sql 檔案內容
$sqlContent = file_get_contents($sqlFilePath);

// 將 SQL 語句分割成多個單獨的語句（以分號 ";" 為分隔符）
$sqlStatements = explode(';', $sqlContent);

// 執行每個 SQL 語句
foreach ($sqlStatements as $statement) {
    $statement = trim($statement); // 去除多餘的空格或換行
    if (!empty($statement)) { // 忽略空語句
        if ($conn->query($statement) === TRUE) {
            // echo "Query executed successfully: " . $statement . "<br>";
        } else {
            // echo "Error executing query: " . $conn->error . "<br>";
        }
    }
}


// user的資料庫建立
$sqlFilePath = 'sql/likes_data.sql';

// 檢查檔案是否存在
if (!file_exists($sqlFilePath)) {
    die("<br>" . "SQL file not found: " . $sqlFilePath);
}

// 讀取 .sql 檔案內容
$sqlContent = file_get_contents($sqlFilePath);

// 將 SQL 語句分割成多個單獨的語句（以分號 ";" 為分隔符）
$sqlStatements = explode(';', $sqlContent);

// 執行每個 SQL 語句
foreach ($sqlStatements as $statement) {
    $statement = trim($statement); // 去除多餘的空格或換行
    if (!empty($statement)) { // 忽略空語句
        if ($conn->query($statement) === TRUE) {
            // echo "Query executed successfully: " . $statement . "<br>";
        } else {
            // echo "Error executing query: " . $conn->error . "<br>";
        }
    }
}

$tableCheckQuery = "SHOW TABLES LIKE 'blogs'";
$tableExists = $conn->query($tableCheckQuery);
if ($tableExists ->num_rows === 0) {
$query = "CREATE TABLE IF NOT EXISTS `blogs` (
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` varchar(30) NOT NULL,
    `subtitle` varchar(100) DEFAULT NULL,
    `main_text` text NOT NULL,
    `sub_text` text NOT NULL,
    `file_path` varchar(255) NOT NULL,
    `likes` int(11) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;";

    $conn->query($query);
  
    // blog的登入資料庫建立
    $sqlFilePath = 'sql/blogs_data.sql';

    // 檢查檔案是否存在
    if (!file_exists($sqlFilePath)) {
        die("<br>" . "SQL file not found: " . $sqlFilePath);
    }

    // 讀取 .sql 檔案內容
    $sqlContent = file_get_contents($sqlFilePath);

    // 將 SQL 語句分割成多個單獨的語句（以分號 ";" 為分隔符）
    $sqlStatements = explode(';', $sqlContent);

    // 執行每個 SQL 語句
    foreach ($sqlStatements as $statement) {
        $statement = trim($statement); // 去除多餘的空格或換行
        if (!empty($statement)) { // 忽略空語句
            if ($conn->query($statement) === TRUE) {
                // echo "Query executed successfully: " . $statement . "<br>";
            } else {
                // echo "Error executing query: " . $conn->error . "<br>";
            }
        }
    }
}

$conn->close();

?>