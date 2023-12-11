<?php

require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler() {

  // Get order data from request
  [$error, $orderData] = extractFields($_POST, ['product_id', 'user_id']);

  if($error) {
    return respond(400, ['error' => $error]);
  }

  // Validate product and user exist
  $db = connect('ecommerce');

  $productQuery = "
    SELECT id FROM products WHERE id = {$orderData['product_id']}
  ";

  $productResult = mysqli_query($db, $productQuery);

  if(mysqli_num_rows($productResult) == 0) {
    return respond(400, ['error' => 'Invalid product']);
  }

  // Insert order 
  $orderQuery = "
    INSERT INTO orders (product_id, user_id)
    VALUES ({$orderData['product_id']}, {$orderData['user_id']})
  ";

  mysqli_query($db, $orderQuery);

  // Increment product visits & purchases
  $visitQuery = "
    UPDATE products
    SET visits = visits + 1
    WHERE id = {$orderData['product_id']}
  ";

  $purchaseQuery = "  
    UPDATE products
    SET purchases = purchases + 1   
    WHERE id = {$orderData['product_id']}
  ";

  mysqli_query($db, $visitQuery);
  mysqli_query($db, $purchaseQuery);

  $status = 201;
  $data = [];

  return [$status, $data];

}

respond(...handler());

?>
