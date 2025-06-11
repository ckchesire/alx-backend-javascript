import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = {};

    for (let i = 1; i < lines.length; i += 1) {
      const row = lines[i].split(',');
      if (row.length >= 4) {
        const field = row[3].trim();
        const name = row[0].trim();
        if (!students[field]) students[field] = [];
        students[field].push(name);
      }
    }

    resolve(students);
  });
});

export default readDatabase;
