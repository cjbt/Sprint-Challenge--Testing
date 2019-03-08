const express = require('express');
const server = express();
server.use(express.json());

const count = 6;
const users = [
  {
    name: 'CJ',
    id: 1
  },
  {
    name: 'Hamza',
    id: 2
  },
  {
    name: 'Nathan',
    id: 3
  },
  {
    name: 'Joe',
    id: 4
  },
  {
    name: 'Kelly',
    id: 5
  }
];

server.get('/', (req, res) => {
  res.send('<h1>site is working</h1>');
});

module.exports = server;
