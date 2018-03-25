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

db.addUser = () => {
  return knex('users').insert({
    username: 'test',
    hash: 'asdfas',
    id: '8',
  });
};

module.exports = db;
