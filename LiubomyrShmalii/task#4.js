db.users.find(
  { country: { $ne: "Germany"} },
  { country: 0 }
)