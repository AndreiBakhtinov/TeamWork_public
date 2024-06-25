SELECT 
	ProductName,
    Price
FROM Products

WHERE NOT ProductID IN (SELECT ProductName FROM OrderDetails)