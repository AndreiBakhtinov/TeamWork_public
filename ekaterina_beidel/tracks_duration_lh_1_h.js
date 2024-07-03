db.tracks.find({
    duration_sec: {$lte: 3600}
})