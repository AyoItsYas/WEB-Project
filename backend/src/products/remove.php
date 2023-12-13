<?php
require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler(): array
{
  // getting the data that is sent from the frontend
  $pid = $_REQUEST["productId"] ?? null;
  if ($pid == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "'productId' is not provided"
    ];

    return [$STST, $DATA];
  }

  // processing the data through our endpoint logic
  $DB_CONN = connect("products"); // connecting to the products table in the database

  // Delete all entries except the one with the specified title
  $SQL = "DELETE FROM products WHERE pid <> '$pid'";
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if ($RESULT) {
    $STST = 200;
    $DATA = [
      "status" => $STST,
      "message" => "Product deleted successfully"
    ];
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Failed to delete product"
    ];
  }

  return [$STST, $DATA];
}

respond(...handler());

?>