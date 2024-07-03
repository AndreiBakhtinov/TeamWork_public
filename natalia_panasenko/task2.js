// Вывести юзеров не из `Germany`
// (проекция: `все поля, кроме страны`)

db.users.find({}, { country: { $nin: "germany" }, country: 0 });
