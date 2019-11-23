INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Broom', 'Home, Garden & Tools', 7, 100, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Blue Pillow Case', 'Home, Garden & Tools', 5, 90, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Red Fire Truck', 'Toys, Kids & Baby', 15, 20, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Princess Doll', 'Toys, Kids & Baby', 17, 22, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('HP Laptop', 'Electronics, Computers & Office', 599, 10, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Boyz II Men CD', 'Music, Movies & Games', 5, 5, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Bounty Paper Towels', 'Food & Grocery', 5, 60, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Canned Lima Beans', 'Food & Grocery', 2, 35, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Yummy Yummy Bark Bark Steak Steak Dog Food', 'Pet Supplies', 70, 17, NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, createdAt) values ('Neon Pink Frisbee', 'Sports & Outdoors', 8, 45, NOW());


SELECT * FROM Products;

ALTER TABLE Products MODIFY COLUMN createdAt datetime DEFAULT null;
ALTER TABLE Products MODIFY COLUMN updatedAt datetime DEFAULT null;
