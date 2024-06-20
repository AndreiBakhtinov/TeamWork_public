db.videos.aggregate([
//вход коллекция видео
   {$match: { duration_secs: {$lt: 120 * 60}}},
//сортировка по продолжительности видео
  { $count:  'total videos'}
// выход документ с количеством видео
])