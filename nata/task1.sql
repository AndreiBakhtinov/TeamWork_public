db.users.aggregate([
    {$match: {is_blocked:{$ne:true}}}
])
db.users.countDocuments(
    {is_blocked:{$ne:true}}
)