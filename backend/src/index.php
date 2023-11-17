<?php
require_once "lib/utility.php";

function handler(object $REQUEST): array
{
  $METHOD = $REQUEST["method"];

  $STST = 200;
  $DATA = [
    "status" => $STST,
    "message" => "Hello World!"
  ];

  return [$STST, $DATA];
}

respond(...handler($_REQUEST));

?>