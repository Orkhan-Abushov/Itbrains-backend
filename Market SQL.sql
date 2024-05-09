Create DATABASE Market
USE Market
CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName NVARCHAR(100),
    Price DECIMAL(10, 2),
	Brand nvarchar(50),
);
INSERT INTO Products 
VALUES
(1, 'Apples', 1.99, 'Green Garden'),
(2, 'Milk', 2.49, 'Dairy Farms'),
(3, 'Chicken Breast', 13, 'Farm Fresh'),
(4, 'Baguette', 2.29, 'Bakery Delights'),
(5, 'Canned Corn', 0.99, 'Golden Harvest'),
(6, 'Potato Chips', 1.49, 'Crunchy Crisps'),
(7, 'Cola', 1.99, 'Refresh'),
(8, 'Frozen Pizza', 18, 'Pizza Time'),
(9, 'Paper Towels', 3.99, 'SoftCare'),
(10, 'Bananas', 0.69, 'Tropical Farms'),
(11, 'Yogurt', 0.89, 'Healthy Life'),
(12, 'Ground Beef', 15, 'Prime Cuts'),
(13, 'French Bread', 1.99, 'Boulangerie'),
(14, 'Canned Beans', 1.29, 'EcoHarvest'),
(15, 'Popcorn', 0.99, 'Poppin Corn')

Select *from Products
Where Price >10

SELECT * FROM Products
WHERE Price < (SELECT AVG(Price) FROM Products);

SELECT * FROM Products WHERE LEN(Brand)>5

SELECT CONCAT(ProductName,'.',Brand) AS 'PRODUCTS' from Products