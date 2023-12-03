<?php
require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler(): array
{
  // getting the data that is sent from the frontend
  $EMAIL = $_POST["email"] ?? null;
  if ($EMAIL == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Email is not provided"
    ];

    return [$STST, $DATA];
  }

  $PASSWORD = $_POST["password"] ?? null;
  if ($PASSWORD == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Password is not provided"
    ];

    return [$STST, $DATA];
  }

  // processing the data through our endpoint logic
  $DB_CONN = connect("users"); // connecting to the users table in the database

?>