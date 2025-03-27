<?php
session_start();

if (!isset($_SESSION["user_name"])) {
    echo json_encode(["error" => "User is not logged in."]);
    exit;
}

// If the session exists, proceed with your response
echo json_encode(["success" => true, "message" => "Session valid"]);
?>