<?php

function respond($STST, $DATA): void
{
  http_response_code($STST);

  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  header('Access-Control-Max-Age: 86400');

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