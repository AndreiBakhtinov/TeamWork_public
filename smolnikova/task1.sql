db.users.aggregate([
    {$match: {is_dlocked:{$ne:true}}}
])
db.users.countDocuments(
    {is_blocked:{$ne:true}}
)