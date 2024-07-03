db.tracks.find({
    duration_sec: {$lt: 3600}
},
{
    title:1,_id:0
})