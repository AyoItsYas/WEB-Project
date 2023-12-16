<?php

require_once "../_lib/utility.php";
require_once "../_models/User.php";

registerHandler(
  function ($password, $email): array {
    $USER = new User();

    $USER->password = $password;
    $USER->email = $email;

    $USER->save();
    $USER->refresh();

    $STATUS = 200;
    $DATA = $USER;
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, User::$REQUIRED_FIELDS
);

?>