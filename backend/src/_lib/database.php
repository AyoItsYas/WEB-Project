<?php

function connect(string $SOCKET = "")
{
  $PORT = 3306;
  $HOSTNAME = "database";
  $USERNAME = "user";
  $PASSWORD = "password";
  $DATABASE = "devDB";

  $CONN = mysqli_connect($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT, $SOCKET);

  if (!$CONN) {
    die("Connection failed: " . mysqli_connect_error());
  }

  return $CONN;
}

?>