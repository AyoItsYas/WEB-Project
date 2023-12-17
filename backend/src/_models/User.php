<?php

require_once "BaseModel.php";

class User extends BaseModel
{
  public static $FIELDS = [
    "id" => null,
    "password" => null,
    "email" => null,
    "admin" => null,
  ];

  public static $REQUIRED_FIELDS = [
    "password",
    "email",
    "admin",
  ];

  public static $OPTIONAL_FIELDS = [];

  public static $SYSTEM_FIELDS = [
    "id",
  ];

  public $id = null;
  public $password = null;
  public $email = null;
  public $admin = null;

  public static function getByEmail($email)
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "SELECT * FROM $TABLE_NAME WHERE email = '$email'";

    $RESULT = static::query($SQL);

    if (!$RESULT)
      return null;

    $MODEL = new User();

    foreach ($RESULT[0] as $KEY => $VALUE) {
      $MODEL->$KEY = $VALUE;
    }
    return $MODEL;
  }

}
?>