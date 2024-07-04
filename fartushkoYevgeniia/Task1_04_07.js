db.posts.aggregate([
    {$sample: {size: 2}},
    {
        $project: {
            _id: 0,
            title: 1,
        }
    }
])
