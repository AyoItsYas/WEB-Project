<?php

function registerHandler(
  callable $HANDLER,
  array $FIELDS = [],
  array $OPTIONAL_FIELDS = []
): void {
  try {
    $FIELD_DATA = extractFields($FIELDS, $OPTIONAL_FIELDS);

    $RES = $HANDLER(...$FIELD_DATA);

    $STATUS = $RES[0];
    $DATA = $RES[1];
    $MESSAGE = $RES[2] ?? null;
  } catch (Exception $ERROR) {
    $STATUS = 400;
    $MESSAGE = $ERROR->getMessage();
    $DATA = null;
  }

  $JSON = [
    "status" => $STATUS,
    "data" => $DATA,
    "message" => $MESSAGE,
  ];

  http_response_code($STATUS);

  header('Content-Type: application/json; charset=utf-8');

  echo json_encode($JSON);
}

function extractFields(array $FIELDS = [], array $OPTIONAL_FIELDS = []): array
{
  $DATA = [];
  $BODY = json_decode(file_get_contents("php://input"), true);

  foreach ($FIELDS as $FIELD) {
    $VALUE = null;

    if (!isset($_REQUEST[$FIELD])) {
      if (isset($BODY[$FIELD])) {
        $VALUE = $BODY[$FIELD];
      } else {
        throw new Exception("Missing required field: $FIELD");
      }
    } else {
      $VALUE = $_REQUEST[$FIELD];
    }

    if (preg_match("/[\'\"]/", $VALUE)) {
      throw new Exception("Invalid field: $FIELD"); // SQL injection attempt
    }

    $DATA[] = $VALUE;
  }

  foreach ($OPTIONAL_FIELDS as $FIELD) {
    if (!isset($_REQUEST[$FIELD])) {
      $DATA[] = null;
      continue;
    }

    if (preg_match("/[\'\"]/", $_REQUEST[$FIELD])) {
      throw new Exception("Invalid field: $FIELD"); // SQL injection attempt
    }

    $DATA[] = $_REQUEST[$FIELD];
  }

  return $DATA;
}

?>