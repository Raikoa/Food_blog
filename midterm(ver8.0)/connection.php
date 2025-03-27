<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "Taste_Trail";

if(!$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname))
{
    die;
}

?>