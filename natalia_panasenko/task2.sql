-- Вывести названия и цены товаров, которые не были ни разу проданы

SELECT
ProductName,
Price
FROM Products
WHERE 
NOT ProductID IN (SELECT ProductID FROM OrderDetails)