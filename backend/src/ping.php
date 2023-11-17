<?php
require_once "lib/utility.php";

function handler($request): array
{
  $STST = 200;
  $DATA = [
    "status" => $STST,
    "message" => "Pong!"
  ];

  return [$STST, $DATA];
}

respond(...handler($_REQUEST));

?>