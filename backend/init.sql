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

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT,
  image VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT,
  review TEXT,
  email VARCHAR(255),
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT,
  image VARCHAR(255),
  popularity INT,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT,
  image VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS orders (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';C:\xampp\htdocs\myapp\WEB-Project>
GRANT SELECT, INSERT, UPDATE, DELETE ON @dbName.* TO 'user'@'%';
FLUSH PRIVILEGES;  

CREATE TABLE IF NOT EXISTS `trending` (
  `product_id` int(11) NOT NULL,
  `visits` int(11) NOT NULL,
  `purchase_amount` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
