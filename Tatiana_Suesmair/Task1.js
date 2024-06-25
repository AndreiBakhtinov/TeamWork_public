db.videos.aggregate([
   { // вход все ролики
   $match: { duration_secs: { $lt: 120 * 60 } }
   }, //выход ролики продолжительностью до 2 часов
   { 
   $count: 'total videos' 
   } // кол-во роликов до 2 часов 
])

