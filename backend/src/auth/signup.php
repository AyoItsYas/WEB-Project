<?php
require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler(): array
{
  // getting the data that is sent from the frontend
  [$ERROR, $DATA] = extractFields($_POST, ["email", "password"]);

  if ($ERROR) {
    return [400, ["status" => 400, "error" => $ERROR]];
  }

  [$EMAIL, $PASSWORD] = $DATA;

  // processing the data through our endpoint logic
  $DB_CONN = connect("users"); // connecting to the users table in the database

  // Check if user already exists
  $SQL = "SELECT * FROM users WHERE email = '$EMAIL'"; // the query to be executed
  $RESULT = mysqli_query($DB_CONN, $SQL); // executing the query we get an array of rows as a result

  if (mysqli_num_rows($RESULT) > 0) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "User already exists"
    ];

    return [$STST, $DATA];
  }

  // If user doesn't exist, create a new user
  $SQL = "INSERT INTO users (email, password) VALUES ('$EMAIL', '$PASSWORD')";
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if ($RESULT) {
    $STST = 200;
    $DATA = [
      "status" => $STST,
      "message" => "User created successfully"
    ];
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Failed to create user"
    ];
  }

  return [$STST, $DATA];
}

respond(...handler());

?>