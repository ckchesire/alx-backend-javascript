/**
 * Program to take in user input from stdin and display the appropriate message
 */

console.log('Welcome to ALX, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing.\n');
});

process.on('SIGINT', () => {
  process.exit();
});
