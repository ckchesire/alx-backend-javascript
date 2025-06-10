/**
 * Program to take in user input from stdin and display the appropriate message
 */
const readline = require('readline');

const { isTTY } = process.stdin;

const r1 = readline.createInterface({
  input: process.stdin,
  output: isTTY ? process.stdout : null,
  terminal: isTTY,
});

function askUserName() {
  if (!isTTY) {
    process.stdout.write('Welcome to ALX, what is your name?\n');
  }
  r1.question('Welcome to ALX, what is your name?\n', (data) => {
    const name = data.trim();
    console.log(`Your name is: ${name}`);
    r1.close();
  });
}

r1.on('close', () => {
  if (!isTTY) {
    console.log('This important software is now closing');
  }
});

module.exports = askUserName;

if (require.main === module) {
  askUserName();
}
