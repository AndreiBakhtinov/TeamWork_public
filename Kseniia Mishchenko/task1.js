db.videos.aggregate([
    {
        $match: {
            duration: { $lt: 120 }
        }
    },
    {
        $count: "total_videos"
    }
]) 