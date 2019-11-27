INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Broom', 'Home, Garden & Tools', 7, 100, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Blue Pillow Case', 'Home, Garden & Tools', 5, 90, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Red Fire Truck', 'Toys, Kids & Baby', 15, 20, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Princess Doll', 'Toys, Kids & Baby', 17, 22, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('HP Laptop', 'Electronics, Computers & Office', 599, 10, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Boyz II Men CD', 'Music, Movies & Games', 5, 5, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Bounty Paper Towels', 'Food & Grocery', 5, 60, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Canned Lima Beans', 'Food & Grocery', 2, 35, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Yummy Yummy Bark Bark Steak Steak Dog Food', 'Pet Supplies', 70, 17, NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt, updatedAt) values ('Neon Pink Frisbee', 'Sports & Outdoors', 8, 45, NOW(), NOW());


SELECT * FROM Products; 

ALTER TABLE Products MODIFY COLUMN createdAt datetime DEFAULT null;
ALTER TABLE Products MODIFY COLUMN updatedAt datetime DEFAULT null;

