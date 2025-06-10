/**
 * Program to take in user input from stdin and display the appropriate message
 */

console.log('Welcome to ALX, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing.');
});
