// Create a file named baby-steps.js.

//   Write a program that accepts one or more numbers as command-line arguments    
//   and prints the sum of those numbers to the console (stdout).

var result = 0
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result);