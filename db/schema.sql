DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

USE burgers_db;

CREATE TABLE burgers 

(

id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (255) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id)

);

INSERT INTO burgers (burger_name, devoured) VALUES ('Double Bacon Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Triple-Stacked Avocado Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cali-Chicken Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Southern Style Veggie Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Spicy Pepper Jack Mushroom Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Tequila Lime Burger', true);