CREATE DATABASE KPopFiestaDatabase;

USE KPopFiestaDatabase;

CREATE TABLE users (
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE productCategories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  category_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES productCategories(id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT,
  review TEXT,
  email VARCHAR(255),
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';C:\xampp\htdocs\myapp\WEB-Project>
GRANT SELECT, INSERT, UPDATE, DELETE ON KPopFiestaDatabase.* TO 'user'@'%';
FLUSH PRIVILEGES;
