<?php

require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler() {

  // Get order data from request
  [$error, $orderData] = extractFields($_POST, ['user_id', 'product_id', 'quantity']);

  if($error) {
    $status = 400;
    $data = ['error' => $error];
    return [$status, $data];
  }

  // Connect to database
  $db = connect('ecommerce');

  // Add order to database
  $result = addOrderToDatabase($db, $orderData);

  if($result) {
    $status = 201;
    $data = ['message' => 'Order added successfully'];
  } else {
    $status = 400;
    $data = ['error' => 'Failed to add order']; 
  }

  return [$status, $data];

}

function addOrderToDatabase($db, $data) {

  $query = "
    INSERT INTO orders 
      (user_id, product_id, quantity) 
    VALUES
      ({$data['user_id']}, {$data['product_id']}, {$data['quantity']})
  ";

  $result = mysqli_query($db, $query);

  return $result;

}

respond(...handler());

?>