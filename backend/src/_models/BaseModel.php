<?php

require_once "../_lib/database.php";


class BaseModel
{
  public $id = null;
  public static $FIELDS = [];
  public static $REQUIRED_FIELDS = [];
  public static $OPTIONAL_FIELDS = [];

  public static $SYSTEM_FIELDS = [
    "id",
    "created_at",
    "updated_at",
  ];

  public function save()
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "INSERT INTO $TABLE_NAME (";

    $FIRST = true;

    foreach ($this as $KEY => $VALUE) {
      if (in_array($KEY, static::$SYSTEM_FIELDS))
        continue;

      if (!$VALUE)
        continue;

      if ($FIRST) {
        $FIRST = false;
      } else {
        $SQL .= ", ";
      }

      $SQL .= $KEY;
    }

    $SQL .= ") VALUES (";

    $FIRST = true;

    foreach ($this as $KEY => $VALUE) {
      if (in_array($KEY, static::$SYSTEM_FIELDS))
        continue;

      if (!$VALUE)
        continue;

      if ($FIRST) {
        $FIRST = false;
      } else {
        $SQL .= ", ";
      }

      $SQL .= "'$VALUE'";
    }

    $SQL .= ")";

    // echo $SQL;

    return getDatabaseClient()->query($SQL);
  }

  public function refresh()
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "SELECT * FROM $TABLE_NAME ORDER BY id DESC LIMIT 1";

    $RESULT = getDatabaseClient()->query($SQL);

    $DATA = mysqli_fetch_assoc($RESULT);

    foreach ($DATA as $KEY => $VALUE) {
      $this->$KEY = $VALUE;
    }
  }

  public function update()
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "UPDATE $TABLE_NAME SET ";

    $FIRST = true;

    foreach ($this as $KEY => $VALUE) {
      if (in_array($KEY, static::$SYSTEM_FIELDS))
        continue;

      if (!$VALUE)
        continue;

      if ($FIRST) {
        $FIRST = false;
      } else {
        $SQL .= ", ";
      }

      $SQL .= "$KEY = '$VALUE'";
    }

    $SQL .= " WHERE id = $this->id";

    return getDatabaseClient()->query($SQL);
  }

  public static function query($SQL)
  {
    $RESULT = getDatabaseClient()->query($SQL);

    $DATA = mysqli_fetch_all($RESULT, MYSQLI_ASSOC);

    for ($i = 0; $i < count($DATA); $i++) {
      $MODEL = new static();

      foreach ($DATA[$i] as $KEY => $VALUE) {
        $MODEL->$KEY = $VALUE;
      }

      $DATA[$i] = $MODEL;
    }

    return $DATA;
  }

  public static function get($ID)
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "SELECT * FROM $TABLE_NAME WHERE id = $ID";

    $RESULT = getDatabaseClient()->query($SQL)->fetch_assoc();

    $MODEL = new static();

    foreach ($RESULT as $KEY => $VALUE) {
      $MODEL->$KEY = $VALUE;
    }

    return $MODEL;
  }

  public static function getAll()
  {
    $TABLE_NAME = static::getTableName();

    $SQL = "SELECT * FROM $TABLE_NAME";

    $RESULT = getDatabaseClient()->query($SQL);

    $DATA = mysqli_fetch_all($RESULT, MYSQLI_ASSOC);

    for ($i = 0; $i < count($DATA); $i++) {
      $MODEL = new static();

      foreach ($DATA[$i] as $KEY => $VALUE) {
        $MODEL->$KEY = $VALUE;
      }

      $DATA[$i] = $MODEL;
    }

    return $DATA;
  }

  public static function getTableName()
  {
    $CLASS_NAME = get_called_class();

    $TABLE_NAME = strtolower($CLASS_NAME) . "s";

    return $TABLE_NAME;
  }
}

?>