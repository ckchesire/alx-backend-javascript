const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1);
      const validStudents = students.filter((student) => student.trim() !== '');

      if (validStudents.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fields = {};

      validStudents.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${validStudents.length}\n`;

      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');

  const databasePath = process.argv[2];

  if (!databasePath) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  try {
    const studentsData = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
