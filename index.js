//Instructions
// Using the usual Users and Todo lists:
//   - Prompt the user for a letter
//   - Find all the users who's name contains the letter. ✅
//   - Say hi to those users in the console - but only 1 greeting every 2 seconds. 🪲⚒️
//   - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.
// Tips
// - Don't forget to clear interval once it's done running
// - It's perfectly okay to prompt a user for details while other stuff (i.e.the interval) is running
// // - Keep your code separated into functions for easier readability later

let enterALetter = String(prompt("Enter a letter")) 
users.filter(function(user) {
  let result = user.name.includes(enterALetter)
  return result
}
).forEach(function(user) {
  setInterval(function() {
    console.log(`Hi ${user.name}`)
  }, 2000)
}
)






