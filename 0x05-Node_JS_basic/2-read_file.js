/*
* Function to count no. of students by field from a CSV file.
*/
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
