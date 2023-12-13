<?php

// Includes
require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler()
{

  // Get order ID from request
  $orderId = $_GET['id'];

  // Validate order ID
  if (!$orderId) {
    return respond(400, ['error' => 'Order ID is required']);
  }

  // Remove order from database
  $result = removeOrderById(connect(), $orderId);

  // Response
  if ($result) {
    return respond(200, ['message' => 'Order removed']);
  } else {
    return respond(500, ['error' => 'Failed to remove order']);
  }

}

// Database function
function removeOrderById($db, $id)
{

  $query = "DELETE FROM orders WHERE id = ?";

  $stmt = $db->prepare($query);
  $stmt->bind_param("i", $id);

  if ($stmt->execute()) {
    return true;
  }

  return false;

}

respond(...handler());

?>