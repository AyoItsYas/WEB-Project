<?php
require_once "_lib/utility.php";

function handler($REQUEST): array
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