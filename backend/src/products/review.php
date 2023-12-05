<?php

require_once "../_lib/database.php";

function handler() {

  $fields = ["rating", "review", "email", "product_id"];

  [$valid, $err, [
    $rating, $review, $email, $product_id  
  ]] = validateFields($_POST, $fields);

  if(!$valid) {
    return [400, ["error" => $err]];
  }

  $db = connect();

  $sql = "INSERT INTO reviews VALUES ($rating, '$review', '$email', $product_id)";

  if(mysqli_query($db, $sql)) {
    return [200, ["message" => "Review added"]];
  } else {
    return [500, ["error" => "Failed to add review"]];
  }

}

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

echo json_encode(...handler());

?>