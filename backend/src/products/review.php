<?php

require_once "../_lib/database.php";

function validateFields($request, $fields) {

  $data = [];
  $valid = true;
  $error = "";

  foreach($fields as $field) {

    if(!isset($request[$field])) {
      $valid = false;
      $error = "Missing field: $field";
      break;
    }

    $data[$field] = $request[$field];

  }

  return [$valid, $error, $data];

}

function addReview() {

  $fields = ["rating", "review", "email", "product_id"];

  [$valid, $err, $data] = validateFields($_POST, $fields);

  if(!$valid) {
    return [400, ["error" => $err]];
  }

  $db = connect("reviews");

  $rating = $data['rating'];
  $review = $data['review'];
  $email = $data['email']; 
  $product_id = $data['product_id'];

  $sql = "INSERT INTO reviews VALUES ($rating, '$review', $email, $product_id)";

  if(mysqli_query($db, $sql)) {
    return [200, ["message" => "Review added"]];
  } else {
    return [500, ["error" => "Failed to add review"]];
  }

}

echo json_encode(...addReview());

?>

