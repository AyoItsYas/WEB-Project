<?php

require_once "../_lib/utility.php";
require_once "../_models/Product.php";

registerHandler(function ($name, $price, $description, $image, $created_at = null, $category_id = null, $visits = null, $total_purchases = null): array {
  $PRODUCT = new Product();

  $PRODUCT->name = $name;
  $PRODUCT->price = $price;
  $PRODUCT->description = $description;
  $PRODUCT->image = $image;
  $PRODUCT->category_id = $category_id;

  $PRODUCT->save();
  $PRODUCT->refresh();

  $STATUS = 200;
  $DATA = $PRODUCT;
  $MESSAGE = "success";

  return [$STATUS, $DATA, $MESSAGE];
}, ["name", "price", "description", "image"], Product::$OPTIONAL_FIELDS);

?>