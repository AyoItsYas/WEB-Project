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
    // Update trending list
    updateTrendingList($db, $orderData);
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

function updateTrendingList($db, $data) {

  // Check if product already exists in trending list
  $query = "SELECT * FROM trending WHERE product_id = {$data['product_id']}";
  $result = mysqli_query($db, $query);

  if(mysqli_num_rows($result) > 0) {
    // If product exists, increment the visits and update the purchase amount
    $query = "
      UPDATE trending 
      SET visits = visits + 1, purchase_amount = purchase_amount + {$data['quantity']}
      WHERE product_id = {$data['product_id']}
    ";
  } else {
    // If product does not exist, insert a new record
    $query = "
      INSERT INTO trending 
        (product_id, visits, purchase_amount) 
      VALUES
        ({$data['product_id']}, 1, {$data['quantity']})
    ";
  }

  mysqli_query($db, $query);

}

respond(...handler());

?>