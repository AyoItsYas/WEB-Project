<?php
require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler(): array
{
  // getting the data that is sent from the frontend
  $title = $_POST["title"] ?? null;
  if ($title == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Title not provided"
    ];

    return [$STST, $DATA];
  }

  $price = $_POST["price"] ?? null;
  if ($price == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Price not provided"
    ];

    return [$STST, $DATA];
  }

  $description = $_POST["description"] ?? null;
    if ($description == null) {
        $STST = 400;
        $DATA = [
          "status" => $STST,
          "error" => "Description not provided"
        ];

        return [$STST, $DATA];
    }

  $image = $_POST["image"] ?? null;
    if ($image == null) {
        $STST = 400;
        $DATA = [
          "status" => $STST,
          "error" => "Image not provided"
        ];

        return [$STST, $DATA];
    }


  // processing the data through our endpoint logic
  $DB_CONN = connect("products"); // connecting to the products table in the database

  // Check if product already exists
  $SQL = "SELECT * FROM products WHERE title = '$title'"; // the query to be executed
  $RESULT = mysqli_query($DB_CONN, $SQL); // executing the query we get an array of rows as a result

  if (mysqli_num_rows($RESULT) > 0) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Product already exists"
    ];

    return [$STST, $DATA];
  }

  // If product doesn't exist, create a new product
  $SQL = "INSERT INTO products (title, price, description, image) VALUES ('$title', '$price', '$description', '$image')";
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
