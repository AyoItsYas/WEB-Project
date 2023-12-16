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

  foreach ($FIELDS as $FIELD) {
    if (!isset($_REQUEST[$FIELD])) {
      throw new Exception("Missing required field: $FIELD");
    }

    $DATA[] = $_REQUEST[$FIELD];
  }

  return $DATA;
}

?>