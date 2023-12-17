DROP DATABASE IF EXISTS KPopFiestaDatabase;

CREATE DATABASE KPopFiestaDatabase;

USE KPopFiestaDatabase;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  admin BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
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
  category_id INT NOT NULL DEFAULT 0,
  visits INT DEFAULT 0,
  total_purchases INT DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES productCategories(id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT,
  review TEXT,
  user_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON KPopFiestaDatabase.* TO 'user'@'%';
FLUSH PRIVILEGES;

INSERT INTO productCategories (name) VALUES
  ('Miscellaneous'),
  ('Albums'),
  ('Posters'),
  ('Lightsticks'),
  ('Clothing'),
  ('Accessories');

INSERT INTO products (name, price, description, image, category_id) VALUES
  ('BTS - Map of the Soul: 7', 24.99, 'BTS - Map of the Soul: 7', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Answer', 24.99, 'BTS - Love Yourself: Answer', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://placehold.co/300', 1),
  ('BTS - Map of the Soul: 7', 24.99, 'BTS - Map of the Soul: 7', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Answer', 24.99, 'BTS - Love Yourself: Answer', 'https://placehold.co/300', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://placehold.co/300', 1);
