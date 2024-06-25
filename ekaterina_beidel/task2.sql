SELECT ProductName, Price FROM Products
WHERE NOT ProductID IN (SELECT ProductID FROM Products)