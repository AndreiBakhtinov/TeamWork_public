// Вывести ко-во не заблокированных юзеров

db.users.countDocuments(
    {is_blocked: {$ne: true}}
)

db.users.aggregate([
{$match: {is_blocked: {$ne: true}}},
{ $count: 'number of unblocked users: '}
])
