<?php

require_once "../_lib/utility.php";
require_once "../_models/User.php";

registerHandler(
  function ($password, $email): array {
    $USER = new User();

    $password = hash("sha256", $password);

    $USER->password = $password;
    $USER->email = $email;

    $USER->save();
    $USER->refresh();

    $STATUS = 200;
    $DATA = ["valid" => true];
    $MESSAGE = "success";

    return [$STATUS, $DATA, $MESSAGE];
  }, User::$REQUIRED_FIELDS
);

?>