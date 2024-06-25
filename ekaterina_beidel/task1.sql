SELECT LastName FROM Employees
WHERE EmployeeID IN (SELECT EmployeeID FROM Orders)