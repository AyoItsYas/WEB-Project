<?php

require_once "../_lib/utility.php";
require_once "../_lib/database.php";
require_once "../_models/Product.php";

registerHandler(function (): array {
  $PRODUCTS = Product::getAll();

  $STATUS = 200;
  $DATA = $PRODUCTS;
  $MESSAGE = "success";

  return [$STATUS, $DATA, $MESSAGE];
});


?>