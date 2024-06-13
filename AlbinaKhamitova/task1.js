db.users.aggregate([
    {$match: {is_blocked:{$ne:true}}},
    {
        $count: 'total_noy_blocked_users'
    }  
])


db.users.countDocuments(
    { is_blocked: { $ne: true }  }
)