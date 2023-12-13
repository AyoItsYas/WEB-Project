<?php
require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler(): array
{
  // getting the data that is sent from the frontend
  $productId = $_POST["id"] ?? null;
  $title = $_POST["title"] ?? null;
  $price = $_POST["price"] ?? null;
  $description = $_POST["description"] ?? null;
  $image = $_POST["image"] ?? null;

  // Check if product ID is provided
  if ($productId == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Product ID not provided"
    ];
    return [$STST, $DATA];
  }

  // Check if at least one parameter is provided for modification
  if ($title == null && $price == null && $description == null && $image == null) {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "At least one parameter (title, price, description, image) should be provided for modification"
    ];
    return [$STST, $DATA];
  }

  // processing the data through our endpoint logic
  $DB_CONN = connect("products"); // connecting to the products table in the database

  // Check if the product exists
  $SQL = "SELECT * FROM products WHERE id = '$productId'";
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if (mysqli_num_rows($RESULT) == 0) {
    $STST = 404; // Not Found
    $DATA = [
      "status" => $STST,
      "error" => "Product not found"
    ];
    return [$STST, $DATA];
  }

  // Build the SQL query for modification
  $updateFields = [];

  if ($title != null) {
    $updateFields[] = "title = '$title'";
  }

  if ($price != null) {
    $updateFields[] = "price = '$price'";
  }

  if ($description != null) {
    $updateFields[] = "description = '$description'";
  }

  if ($image != null) {
    $updateFields[] = "image = '$image'";
  }

  $updateFieldsStr = implode(", ", $updateFields);

  $SQL = "UPDATE products SET $updateFieldsStr WHERE id = '$productId'";
  $RESULT = mysqli_query($DB_CONN, $SQL);

  if ($RESULT) {
    $STST = 200;
    $DATA = [
      "status" => $STST,
      "message" => "Product updated successfully"
    ];
  } else {
    $STST = 400;
    $DATA = [
      "status" => $STST,
      "error" => "Failed to update product"
    ];
  }

  return [$STST, $DATA];
}

respond(...handler());

?>