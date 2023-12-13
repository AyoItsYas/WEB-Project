<?php
require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler(): array
{
  $DB_CONN = connect();

  $SQL = "SELECT * FROM products ORDER BY created_at DESC LIMIT 100";
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if ($RESULT) {
    $PRODUCTS = [];
    while ($PRODUCT = mysqli_fetch_assoc($RESULT)) {
      $PRODUCTS[] = $PRODUCT;
    }

    $STST = 200;
    $DATA = [
      "status" => $STST,
      "message" => "Products retrieved successfully",
      "data" => $PRODUCTS,
    ];
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Failed to retrieve latest products"
    ];
  }

  return [$STST, $DATA];
}

respond(...handler());
?>