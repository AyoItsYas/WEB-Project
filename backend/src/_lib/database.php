<?php

function connect(string $SOCKET = "")
{
  $PORT = 3306;
  $HOSTNAME = "localhost";
  $USERNAME = "Derset";
  $PASSWORD = "password123";
  $DATABASE = "project";

  $CONN = mysqli_connect($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT, $SOCKET);

  if (!$CONN) {
    die("Connection failed: " . mysqli_connect_error());
  }

  return $CONN;
}

?>