<?php

function respond($HANDLER): void
{
  [$STST, $DATA] = $HANDLER();

  http_response_code($STST);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($DATA);
}

?>