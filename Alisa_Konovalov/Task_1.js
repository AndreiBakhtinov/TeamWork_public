
db.videos.aggregate([
    //на вход коллекция видео
    { $match: { duration_secs: { $lt: 120 * 60 } } },
    //на выход отсортированная по продолжительности коллекция
    //на вход отсортированная по продолжительности коллекция
             { $count: 'total videos' }
    // на выход документ с количеством видео
])


db.videos.countDocuments(
    //вход коллекция видео
    { duration_secs: { $lt: 120 * 60 } }
    // выход документ с количеством видео
)