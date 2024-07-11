// 4. Вывести страны и имена всех клиентов

db.users.find(
    {},
    { _id: 0, country: 1, name: 1 } 
)