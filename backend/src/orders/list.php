<?php

require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler() {

  $db = connect();

  $orders = getAllOrders($db);

  if(!$orders) {
    return respond(404, ['error' => 'No orders found']);
  }

  return respond(200, $orders);

}

function getAllOrders($db) {

  $query = "SELECT * FROM orders";

  $result = $db->query($query);

  $orders = [];

  if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $orders[] = $row;
    }
  }

  return $orders;

}

function respond($status, $data) {
  header("Content-Type: application/json");
  http_response_code($status);
  echo json_encode($data);
}

respond(...handler());

?>