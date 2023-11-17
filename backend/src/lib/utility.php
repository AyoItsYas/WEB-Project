<?php

function respond(int $STST, array $DATA): void
{
  http_response_code($STST);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($DATA);
}

?>