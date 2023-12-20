<?php

require_once "../_lib/utility.php";
require_once "../_models/User.php";

registerHandler(
  function ($email, $password): array {
    $USER = User::getByEmail($email);

    if (!$USER) {
      $STATUS = 404;
      $DATA = ["valid" => false];
      $MESSAGE = "user not found";

      return [$STATUS, $DATA, $MESSAGE];
    }

    $password = hash("sha256", $password);

    if ($password != $USER->password) {
      $STATUS = 401;
      $DATA = ["valid" => false];
      $MESSAGE = "invalid password";

      return [$STATUS, $DATA, $MESSAGE];
    }

    $HASH = hash("sha256", $USER->id . $USER->email . $USER->password . time());

    $USER->session = $HASH;
    $USER->update();
    $USER->refresh();

    $STATUS = 200;
    $DATA = ["valid" => true, "session" => $USER->session];
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, ["email", "password"]
);