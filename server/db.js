const dotenv = require('dotenv').config({
  path: 'env.env',
});

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const db = {};

db.addUser = (userObj) => {
  // allowing duplicate usernames right now
  return knex('users').insert({
    username: userObj.username,
    hash: userObj.hash,
    id: Math.floor(Math.random() * 100000000),
  });
};

db.fetchHash = (username) => {
  return knex('users').select('hash').where({ username });
};

db.fetchMessages = () => {
  return knex('ChatLog').select().orderBy('date');
};

db.saveMessage = (messageObj) => {
  return knex('ChatLog').insert({
    message: messageObj.message,
    username: messageObj.username
  });
};

module.exports = db;
