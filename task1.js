const users = [
  "  alice smith ",
  "JOHN DOE",
  "marcus stone",
  "Sarah sands",
  "lucy   LANE",
  "    sammy simmons  "
];

const formattedUsers = users.map(user =>
  user
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
);

console.log(formattedUsers);