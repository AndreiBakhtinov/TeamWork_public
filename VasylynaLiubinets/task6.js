db.tracks.find({
    duration_sec: {$lte: 3600},
    title:1
})