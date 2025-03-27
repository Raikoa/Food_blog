<?php
$server = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($server, $username, $password);
if($conn -> connect_error){
    die("Connection failed" . $conn->connect_error);
}
$conn -> select_db("Taste_Trail");
$sql = "SELECT id, title FROM blogs";
$result = $conn->query($sql);
if($result -> num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo '<div class="rectangle" id="'.htmlspecialchars($row['id']).'"><span>'. htmlspecialchars($row['title']) .'
        </span></div>';
    }
}
$conn -> close();
?>