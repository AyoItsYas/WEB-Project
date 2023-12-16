<?php
require_once "_lib/utility.php";
require_once "_lib/database.php";

$HANDLER = function (): array {
  $START_TIME = microtime(true);
  $DB_CONN = getDatabaseClient();
  $END_TIME = microtime(true);

  $DB_CONN_TIME = ($END_TIME - $START_TIME) * 1000;

  $START_TIME = microtime(true);
  $DB_CONN->query("SELECT * FROM products LIMIT 1");
  $END_TIME = microtime(true);

  $DB_QUERY_TIME = ($END_TIME - $START_TIME) * 1000;

  $STATUS = 200;
  $DATA = [
    "db_conn_time" => $DB_CONN_TIME,
    "db_query_time" => $DB_QUERY_TIME
  ];
  $MESSAGE = "Pong!";


  return [$STATUS, $DATA, $MESSAGE];
};

registerHandler($HANDLER);

?>