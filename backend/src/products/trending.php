<?php

require_once "../_lib/utility.php";  // the utility functions that are used commonly in any given endpoint
require_once "../_lib/database.php"; // database connection

function handler() {

  $db = connect();

  $trendingProducts = getTrendingProducts($db);

  return respond(200, $trendingProducts);

}

function getTrendingProducts($db) {

  $query = "
    SELECT p.*, t.visits, t.purchase_amount, (t.visits + t.purchase_amount) AS score
    FROM products p
    JOIN trends t ON p.id = t.product_id
    ORDER BY score DESC
    LIMIT 5
  ";

  $result = $db->query($query);

  $products = [];

  if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $products[] = $row;
    }
  }

  return $products;

}

function respond($status, $data) {
  header("Content-Type: application/json");
  http_response_code($status);
  echo json_encode($data); 
}

respond(...handler());

?>
