<?php

class DatabaseClient
{
  private $CONN = null;

  public function __construct()
  {
    $PORT = 3306;
    $HOSTNAME = "database";
    $USERNAME = "user";
    $PASSWORD = "password";
    $DATABASE = "KPopFiestaDatabase";

    $this->CONN = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);
  }

  public function __destruct()
  {
    $this->CONN->close();
  }

  public function query($SQL)
  {
    $RESULT = $this->CONN->query($SQL);

    return $RESULT;
  }
}

static $CLIENT = new DatabaseClient();

function getDatabaseClient()
{
  global $CLIENT;
  return $CLIENT;
}


?>