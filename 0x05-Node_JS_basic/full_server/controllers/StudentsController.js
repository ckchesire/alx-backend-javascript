import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const db = process.argv[2];
    try {
      const data = await readDatabase(db);
      res.status(200).send(
        `This is the list of our students\n${
          Object.keys(data)
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .map((field) => `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`)
            .join('\n')}`,
      );
    } catch (_e) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const db = process.argv[2];
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(db);
      const names = data[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (_e) {
      res.status(500).send('Cannot load the database');
    }
  }
}
