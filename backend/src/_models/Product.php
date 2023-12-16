<?php

require_once "BaseModel.php";

class Product extends BaseModel
{
  public static $FIELDS = [
    "id" => null,
    "name" => null,
    "price" => null,
    "description" => null,
    "image" => null,
    "created_at" => null,
    "category_id" => null,
    "visits" => null,
    "total_purchases" => null,
  ];

  public static $REQUIRED_FIELDS = [
    "name",
    "price",
    "description",
    "image",
  ];

  public static $OPTIONAL_FIELDS = [
    "category_id",
    "visits",
    "total_purchases",
  ];

  public static $SYSTEM_FIELDS = [
    "id",
    "created_at",
  ];

  public $id = null;
  public $name = null;
  public $price = null;
  public $description = null;
  public $image = null;
  public $created_at = null;
  public $category_id = null;
  public $visits = null;
  public $total_purchases = null;

}
?>