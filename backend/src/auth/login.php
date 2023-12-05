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

  $SQL = "SELECT * FROM users WHERE email = '$EMAIL'"; // the query to be executed
  $RESULT = mysqli_query($DB_CONN, $SQL);              // executing the query we get an array of rows as a result

  if (mysqli_num_rows($RESULT) == 0) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "User does not exist"
    ];
  } else if (mysqli_num_rows($RESULT) == 1) {
    // check if the password is correct
    $USER = mysqli_fetch_assoc($RESULT); // getting the row data into an object

    if ($USER["password"] == $PASSWORD) {
      $STST = 200; // everything is ok
      $DATA = [
        "status" => $STST,
        "data" => [
          "sessionID" => null,
          "sessionToken" => null,
        ]
      ];
    } else {
      $STST = 400;
      $DATA = [
        "status" => $STST,
        "error" => "Password is incorrect"
      ];
    }
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "User exists more than once"
    ];
  }

  return [$STST, $DATA];
}

respond(...handler());

?>