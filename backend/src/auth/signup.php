<?php

require_once "../_lib/utility.php";
require_once "../_models/User.php";

registerHandler(
  function ($email, $password): array {
    $USER = new User();

    if (strlen($password) < 8 || strlen($password) > 32) {
      $STATUS = 401;
      $DATA = ["valid" => false];
      $MESSAGE = "invalid password";

      return [$STATUS, $DATA, $MESSAGE];
    }

    $password = hash("sha256", $password);

    $USER->password = $password;
    $USER->email = $email;
    $USER->admin = false;

    $USER->save();
    $USER->refresh();

    $STATUS = 200;
    $DATA = ["valid" => true];
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, ["email", "password"]
);

?>