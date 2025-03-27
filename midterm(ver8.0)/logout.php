<?php
session_start();

if(isset($_SESSION["user_id"])){
    unset($_SESSION["user_id"]);
}

if(isset($_SESSION["username"])){
    unset($_SESSION["username"]);
}
session_destroy();
if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time() - 3600, '/');
}
header("Location: index.php");
exit();
?>