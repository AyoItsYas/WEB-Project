<?php

require_once "BaseModel.php";

class User extends BaseModel
{
  public static $FIELDS = [
    "id" => null,
    "password" => null,
    "email" => null,
  ];

  public static $REQUIRED_FIELDS = [
    "password",
    "email",
  ];

  public static $OPTIONAL_FIELDS = [];

  public static $SYSTEM_FIELDS = [
    "id",
  ];

  public $id = null;
  public $password = null;
  public $email = null;

  public static function getByEmail($email)
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "SELECT * FROM $TABLE_NAME WHERE email = '$email'";

    $RESULT = static::query($SQL);

    if (!$RESULT)
      return null;

    $USER = new User();

    foreach ($RESULT as $KEY => $VALUE) {
      $USER->$KEY = $VALUE;
    }

    return $USER;
  }

}
?>