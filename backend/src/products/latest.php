<?php

require_once "../_lib/utility.php";
require_once "../_models/Product.php";

registerHandler(function (): array {
  $PRODUCTS = Product::query("SELECT * FROM products ORDER BY created_at DESC LIMIT 10");

  $STATUS = 200;
  $DATA = $PRODUCTS;
  $MESSAGE = "success";

  return [$STATUS, $DATA, $MESSAGE];
});

?>