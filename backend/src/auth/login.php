<?php

require_once "../_lib/utility.php";
require_once "../_models/User.php";

registerHandler(
  function ($email, $password): array {
    $USER = User::getByEmail($email);

    if (!$USER) {
      $STATUS = 404;
      $DATA = null;
      $MESSAGE = "user not found";

      return [$STATUS, $DATA, $MESSAGE];
    }

    if ($password != $USER->password) {
      $STATUS = 401;
      $DATA = null;
      $MESSAGE = "invalid password";

      return [$STATUS, $DATA, $MESSAGE];
    }

    $STATUS = 200;
    $DATA = $USER;
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, ["email", "password"]
);