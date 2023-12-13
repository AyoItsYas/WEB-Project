<?php

require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler()
{
  $SQL = "SELECT * FROM products LIMIT 100";

  $DB_CONN = connect("products");
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if ($RESULT) {
    $DATA = [];
    while ($ROW = mysqli_fetch_assoc($RESULT)) {
      $DATA[] = $ROW;
    }

    $STST = 200;
    $DATA = [
      "status" => $STST,
      "data" => $DATA
    ];
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Failed to retrieve latest products"
    ];

    return [$STST, $DATA];
  }



  return [$STST, $DATA];
}

respond(...handler());

?>