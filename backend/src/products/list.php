<?php

require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler() {
  $SQL = "SELECT * FROM products ORDER BY popularity DESC LIMIT 10";

  $DB_CONN = connect("products");
  $RESULT = mysqli_query($DB_CONN, $SQL);

  $STST = 200;
  $DATA = [
    "status" => $STST,
    "data" => $RESULT
  ];

  return [$STST, $DATA];
}

echo json_encode(...handler());

?>