db.users.aggregate([
    {
        $sort: { balance: 1 }
    },
    {
        $limit: 2
    },
    {
        $sample: {
            size: 2
        }
    }
])

