//   Вывести страны и имена всех клиентов (решение данной задачи оформить в виде PR)
db.users.find(
    {},
    { "country": 1, "name": 1, "_id": 0 }
  )