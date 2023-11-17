<?php

function handler($request): array
{
  $STST = 200;
  $DATA = [
    "status" => $STST,
    "message" => "Hello World!"
  ];

  return [$STST, $DATA];
}

[$STST, $DATA] = handler($_GET);

http_response_code($STST);
header('Content-Type: application/json; charset=utf-8');
echo json_encode($DATA);

?>