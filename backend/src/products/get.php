<?php

require_once "../_lib/utility.php";
require_once "../_models/Product.php";

registerHandler(
  function ($id): array {
    $PRODUCT = Product::get($id);

    $STATUS = 200;
    $DATA = $PRODUCT;
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, ["id"]
);

?>