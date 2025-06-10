const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Hello ALX!');
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
