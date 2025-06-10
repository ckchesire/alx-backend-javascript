/*
* Counts no. of students by field from a CSV file read asynchronously.
*/
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
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

        console.log(`Number of students: ${validStudents.length}`);

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
          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        });
        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
