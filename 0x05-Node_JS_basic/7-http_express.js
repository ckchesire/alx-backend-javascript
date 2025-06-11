const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  let response = 'This is a list of our students\n';
  try {
    const lines = [];
    const { log } = console;
    console.log = (msg) => lines.push(msg);

    await countStudents(database);

    console.log = log;
    response += lines.join('\n');
    res.set('Conten-Type', 'text/plain');
    res.send(response);
  } catch (error) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(PORT, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
