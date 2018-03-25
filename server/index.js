const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const sessions = {}; // not for use in production

app.listen(8000, () => console.log('Server running on port 8000'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.sessID && sessions[req.cookies.username] === req.cookies.sessID) {
    res.send('app here');
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  if (req.cookies.sessID && sessions[req.cookies.username] === req.cookies.sessID) {
    res.redirect('/');
  } else {
    res.sendFile(path.join(__dirname, '/static/login.html'));
  }
});

app.post('/login', (req, res) => {
  const userSubmission = {
    username: req.body.username,
    password: req.body.password,
  };
  if (req.cookies.sessID && sessions[req.cookies.username] === req.cookies.sessID) {
    res.redirect('/');
  } else if (true /*correct password*/) {
    const alphanumerics = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    let newID = '';
    for (let i = 0; i < 30; i += 1) {
      const random = Math.floor(Math.random() * 35.9999999);
      newID = newID.concat(alphanumerics[random]);
    } sessions[userSubmission.username] = newID;
    res.cookie('sessID', newID);
    res.cookie('username', userSubmission.username).redirect('/')
  } else {
    res.status(401).send('Incorrect credentials.');
  }
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/signup.html'));
});

app.use((req, res, next) => {
  if (req.cookies.sessID && sessions[req.cookies.username] === req.cookies.sessID) {
    next();
  } else {
    res.clearCookie('username');
    res.clearCookie('sessID');
    res.redirect('/')
  }
});