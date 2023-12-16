<?php

require_once "../_lib/utility.php";
require_once "../_models/Product.php";

registerHandler(
  function ($name, $price, $description, $image, $category_id = null, $visits = null, $total_purchases = null): array {
    $PRODUCT = new Product();

    $PRODUCT->name = $name;
    $PRODUCT->price = $price;
    $PRODUCT->description = $description;
    $PRODUCT->image = $image;
    $PRODUCT->category_id = $category_id;
    $PRODUCT->visits = $visits;
    $PRODUCT->total_purchases = $total_purchases;

    $PRODUCT->save();
    $PRODUCT->refresh();

    $STATUS = 200;
    $DATA = $PRODUCT;
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, Product::$REQUIRED_FIELDS, );

?>