DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE Products (
	id INTEGER AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price INTEGER,
	stock_quantity INTEGER,
	createdAt DATETIME NOT NULL,
	updatedAt DATETIME NOT NULL,
	PRIMARY KEY (id)
);

SHOW TABLES

