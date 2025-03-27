<?php
session_start();

if (isset($_SESSION['user_name'])) {
    $user_name = $_SESSION['user_name'];
   
} else {
    echo '<h1 class="login_notif">You need to Login!<h1>';
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

        foreach ($records as $sav) {
            if ($sav != "") {
             
                $stmt_blog = $conn->prepare("SELECT title FROM blogs WHERE id = ?");
                if ($stmt_blog) {
                    $sav_int = (int)$sav;
                    $stmt_blog->bind_param("i", $sav_int);
                    $stmt_blog->execute();
                    $result_blog = $stmt_blog->get_result();
                    $title = "";

                    if ($result_blog->num_rows > 0) {
                        $row_blog = $result_blog->fetch_assoc();
                        $title = $row_blog['title'];
                    }
                    echo '<li class=Savs><a href="#article_' . htmlspecialchars($sav) . '">' . htmlspecialchars($title) . '</a>
                    <form action="deleteSav.php" method="POST" class="delSav" data-ajax="true">
                    <input type="hidden" name="Sav_id" value="'. htmlspecialchars($sav) . '"/>
                    <button type="submit" class="del_sav_op">Delete</button></form></li>';

                    $stmt_blog->close(); 
                } else {
                    echo "Error getting title for article ID: " . htmlspecialchars($sav);
                }
            }
        }
    } else {
        echo "No Saves found.";
    }
    $stmt->close(); 
} else {
    echo "Failed to prepare statement: " . $conn->error;
}


$conn->close();
?>
