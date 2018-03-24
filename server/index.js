const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const session = require('express-session');

app.listen(8000, () => console.log('Server running on port 8000'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use('/', express.static(path.join(__dirname, '/../client/build')))

// app.use(session({
//   secret: 'quailfeather',
//   saveUninitialized: true,
//   resave: true,
//   cookie: { maxAge: 100 * 60 * 60 * 5 },
//   proxy: undefined,
// }));

app.get('/', (req, res) => {
  // if logged in, send them the app
  // if not, redirect them to login page
  res.end();
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/signup.html'));
});

app.post('/login', (req, res) => {
  const userSubmission = {
    username: req.body.username,
    password: req.body.password,
  };
  if (true /*correct*/) {
    const alphanumerics = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    let newID = '';
    for (let i = 0; i < 30; i += 1) {
      const random = Math.floor(Math.random() * 35.9999999);
      newID = newID.concat(alphanumerics[random]);
    }
    res.send('logged in');
  } else {
    // what if password is incorrect
  }
  res.end();
});

app.get('/home', (req, res) => {
  console.log(req)
  res.send('hello')
})