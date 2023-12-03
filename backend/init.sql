SET @dbName = 'KPopFiestaDatabase';

CREATE DATABASE IF NOT EXISTS @dbName;

USE @dbName;

CREATE TABLE IF NOT EXISTS users (
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (email)
);

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON @dbName.* TO 'user'@'%';
FLUSH PRIVILEGES;
