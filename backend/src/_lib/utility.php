<?php

function respond($STST, $DATA): void
{
  http_response_code($STST);
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  echo json_encode($DATA);
}

function extractFields($REQUEST, array $FIELDS): array
{
  $DATA = [];
  $ERROR = null;

  foreach ($FIELDS as $FIELD) {
    if (!isset($REQUEST[$FIELD])) {
      $ERROR = "Missing field: $FIELD";
      break;
    }

    $DATA += [$REQUEST[$FIELD]];
  }

  return [$ERROR, $DATA];
}

?>