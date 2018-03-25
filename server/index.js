const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const sessions = {}; // not for use in production
const bcrypt = require('bcrypt');
const db = require('./db.js');
const dotenv = require('dotenv').config({
  path: 'env.env',
});

app.listen(8000, () => console.log('Server running on port 8000'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.sessID && sessions[req.cookies.username] === req.cookies.sessID) {
    res.redirect('/index.html');
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
  } else {
    db.fetchHash(userSubmission.username)
      .then((DBres) => {
        if (!DBres[0]) {
          res.status(401).send('Username not found.');
        } else {
          const hash = DBres[0].hash;
          bcrypt.compare(userSubmission.password, hash)
            .then((BCres) => {
              if (BCres) {
                const alphanumerics = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
                let newID = '';
                for (let i = 0; i < 30; i += 1) {
                  const random = Math.floor(Math.random() * 35.9999999);
                  newID = newID.concat(alphanumerics[random]);
                } sessions[userSubmission.username] = newID;
                res.cookie('sessID', newID);
                res.cookie('username', userSubmission.username).redirect('/');
              } else {
                res.status(401).send('Incorrect password.');
              }
            })
            .catch((err) => {
              console.log('Error in bcrypt compare', err);
            });
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/signup.html'));
});

app.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 12)
    .then((hash) => {
      const userObj = {
        username: req.body.username,
        hash,
      };
      db.addUser(userObj)
        .then((success) => {
          console.log('success', success);
        })
        .catch((err) => {
          console.log('err', err);
        });
      res.redirect('/');
    })
    .catch((err) => {
      console.log('err in post to /signup:', err)
      res.sendStatus(500);
    })
});

app.use((req, res, next) => {
  if (req.cookies.sessID && sessions[req.cookies.username] === req.cookies.sessID) {
    next();
  } else {
    res.clearCookie('username');
    res.clearCookie('sessID');
    res.redirect('/');
  }
});

app.use(express.static(path.join(__dirname, '../client/build')))