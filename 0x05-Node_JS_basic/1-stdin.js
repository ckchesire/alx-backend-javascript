/*
* Program to take in user input from stdin and display the appropriate message
*/
const { isTTY } = process.stdin;

function askUserName() {
  process.stdout.write('Welcome to ALX, what is your name?\n');

  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
    if (isTTY) {
      process.exit();
    }
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });

  process.stdin.on('exit', () => {
    process.exit();
  });
}

module.exports = askUserName;

if (require.main === module) {
  askUserName();
}
