/*
* A more complex HTTP server using Node's HTTP module
*/
const http = require('http');
const fs = require('fs');

const path = process.argv[2];

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        const validStudents = students.filter((student) => {
          const fields = student.split(',');
          return fields.length >= 4 && fields[0].trim() !== '';
        });
        const output = [];
        output.push(`Number of students: ${validStudents.length}`);

        const fields = {};

        validStudents.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          const trimmedField = field.trim();
          const trimmedFirstname = firstname.trim();

          if (!fields[trimmedField]) {
            fields[trimmedField] = [];
          }
          fields[trimmedField].push(trimmedFirstname);
        });

        Object.keys(fields).forEach((field) => {
          const studentList = fields[field];
          output.push(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        });

        resolve(output.join('\n'));
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    countStudents(path)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
