<?php
require_once "_lib/utility.php";
require_once "_lib/database.php";

function handler($request): array
{
  $START_TIME = microtime(true);
  $DB_CONN = connect();
  $END_TIME = microtime(true);

  $DB_CONN_TIME = ($END_TIME - $START_TIME) * 1000;

  $START_TIME = microtime(true);
  $SQL = "SELECT * FROM products LIMIT 1";
  $RESULT = mysqli_query($DB_CONN, $SQL);
  $END_TIME = microtime(true);

  $DB_QUERY_TIME = ($END_TIME - $START_TIME) * 1000;
  $STST = 200;
  $DATA = [
    "status" => $STST,
    "data" => [
      "db_conn_time" => $DB_CONN_TIME,
      "db_query_time" => $DB_QUERY_TIME,
    ],
    "message" => "Pong!"
  ];

  return [$STST, $DATA];
}

respond(...handler($_REQUEST));

?>