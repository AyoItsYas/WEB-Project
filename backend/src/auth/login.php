<?php
// import the database connection from lib

require_once "../_lib/database.php";

$DB_CONN = connect("users");

// echo all the users
$SQL = "SELECT * FROM users";
$RESULT = mysqli_query($DB_CONN, $SQL);
if (!$RESULT) {
  die("Error: " . $SQL . "<br>" . mysqli_error($DB_CONN));
}

while ($ROW = mysqli_fetch_assoc($RESULT)) {
  echo "id: " . $ROW["id"] . " - Name: " . $ROW["name"] . " " . $ROW["surname"] . "<br>";
}

?>