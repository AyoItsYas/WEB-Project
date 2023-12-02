-- run as database root user >>> docker exec -it <DATABASE_CONTAINER_ID> mysql -u root -p < setup-db.sql

ALTER USER 'user'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'password';

CREATE DATABASE devDB;

CREATE TABLE devDB.users (
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (email)
);


GRANT SELECT, INSERT, UPDATE, DELETE ON devDB.* TO 'user'@'%';
FLUSH PRIVILEGES;
