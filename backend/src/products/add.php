<?php
require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler(): array
{
  // getting the data that is sent from the frontend
  $name = $_REQUEST["name"] ?? null;
  if ($name == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Title not provided"
    ];

    return [$STST, $DATA];
  }

  $price = $_REQUEST["price"] ?? null;
  if ($price == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Price not provided"
    ];

    return [$STST, $DATA];
  }

  $description = $_REQUEST["description"] ?? null;
  if ($description == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Description not provided"
    ];

    return [$STST, $DATA];
  }

  $image = $_REQUEST["image"] ?? null;
  if ($image == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Image not provided"
    ];

    return [$STST, $DATA];
  }

  $DB_CONN = connect();

  $SQL = "INSERT INTO products (name, price, description, image) VALUES ('$name', '$price', '$description', '$image')";
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if ($RESULT) {
    $STST = 200;
    $DATA = [
      "status" => $STST,
      "message" => "Product created successfully"
    ];
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Failed to create new product"
    ];
  }

  return [$STST, $DATA];
}

respond(...handler());

?>