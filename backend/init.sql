DROP DATABASE IF EXISTS KPopFiestaDatabase;

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
  category_id INT NOT NULL DEFAULT 1,
  visits INT DEFAULT 0,
  total_purchases INT DEFAULT 0,
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

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON KPopFiestaDatabase.* TO 'user'@'%';
FLUSH PRIVILEGES;

INSERT INTO productCategories (name) VALUES
  ('Albums'),
  ('Posters'),
  ('Lightsticks'),
  ('Clothing'),
  ('Accessories'),
  ('Miscellaneous');

INSERT INTO products (name, price, description, image, category_id) VALUES
  ('BTS - Map of the Soul: 7', 24.99, 'BTS - Map of the Soul: 7', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Answer', 24.99, 'BTS - Love Yourself: Answer', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Her', 24.99, 'BTS - Love Yourself: Her', 'https://i.imgur.com/6X6XJ8b.jpg', 1),
  ('BTS - Love Yourself: Tear', 24.99, 'BTS - Love Yourself: Tear', 'https://i.imgur.com/6X6XJ8b.jpg', 1);
