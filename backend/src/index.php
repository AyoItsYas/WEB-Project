<?php
require_once "_lib/utility.php";

$HANDLER = function (string $ECHO = null): array {
  $STATUS = 200;
  $DATA = null;
  $MESSAGE = "Hello World!" . (($ECHO) ? " ~ " . $ECHO : "");

  return [$STATUS, $DATA, $MESSAGE];
};

registerHandler($HANDLER, [], ["echo"]);

?>