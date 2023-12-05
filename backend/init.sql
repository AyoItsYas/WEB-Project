SET @dbName = 'KPopFiestaDatabase';

CREATE DATABASE IF NOT EXISTS @dbName;

USE @dbName;

CREATE TABLE IF NOT EXISTS users (
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE IF NOT EXISTS productCategories (
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (name)
);

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  popularity INT NOT NULL,
  FOREIGN KEY (category) REFERENCES productCategories(name),
  PRIMARY KEY (id)
);

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON @dbName.* TO 'user'@'%';
FLUSH PRIVILEGES;
