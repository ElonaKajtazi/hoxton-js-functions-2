//Instructions
// Using the usual Users and Todo lists:

//   -
//
//
// Tips
// - Don't forget to clear interval once it's done running
// - It's perfectly okay to prompt a user for details while other stuff (i.e.the interval) is running
// // - Keep your code separated into functions for easier readability later

//   - Prompt the user for a letter. ✅
let letter = prompt("Enter a letter");

// Find all the users who's name contains the letter. ✅
let usersWithLetter = users.filter((user) =>
  user.name.toLowerCase().includes(letter.toLocaleLowerCase())
);

// - Say hi to those users in the console - but only 1 greeting every 2 seconds. ✅
let i = 0;
let intervalId = setInterval(() => {
  let user = usersWithLetter[i];
  if (user) {
    console.log(`Hi ${user.name}`);
    i++;
  } else {
    clearInterval(intervalId);
  }
}, 2000);

// - Prompt the user for a user ID. ✅
let userId = Number(prompt("Enter a user ID"));
// Using the value, find all the todos that are Incomplete and console.log them. ✅
let incompleteUserTodos = todos.filter(
  todo=> todo.userId === userId && todo.completed === false
);
console.log(incompleteUserTodos);

