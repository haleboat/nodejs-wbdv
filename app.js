const path = require('path');
const express = require('express');

const app = express();

const helloWorld = function () {
  console.log('Hello World');
}

//fancy stuff
app.use(helloWorld)

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});