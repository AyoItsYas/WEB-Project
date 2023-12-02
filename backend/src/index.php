<?php
require_once "_lib/utility.php";

function handler(): array
{
  $STST = 200;
  $DATA = [
    "status" => $STST,
    "message" => "Hello World!"
  ];

  return [$STST, $DATA];
}

respond(...handler());

?>