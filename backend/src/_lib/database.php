<?php

function connect(string $SOCKET = "")
{
  $PORT = 3306;
  $HOSTNAME = "localhost";
  $USERNAME = "user";
  $PASSWORD = "password";
  $DATABASE = "KPopFiestaDatabase";

  $CONN = mysqli_connect($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT, $SOCKET);

  if (!$CONN) {
    die("Connection failed: " . mysqli_connect_error());
  }

  return $CONN;
}

?>