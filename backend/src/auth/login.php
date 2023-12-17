<?php

require_once "../_lib/utility.php";
require_once "../_models/User.php";

registerHandler(
  function ($email, $password): array {
    $USER = User::getByEmail($email);

    $password = hash("sha256", $password);

    if (!$USER) {
      $STATUS = 404;
      $DATA = ["valid" => false];
      $MESSAGE = "user not found";

      return [$STATUS, $DATA, $MESSAGE];
    }

    if ($password != $USER->password) {
      $STATUS = 401;
      $DATA = ["valid" => false];
      $MESSAGE = "invalid password";

      return [$STATUS, $DATA, $MESSAGE];
    }

    $STATUS = 200;
    $DATA = ["valid" => true];
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, ["email", "password"]
);