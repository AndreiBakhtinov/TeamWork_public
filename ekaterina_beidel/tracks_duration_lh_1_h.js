db.tracks.find({
    duration_sec: {$lte: 3600}
},
{
    title:1,_id:0
})