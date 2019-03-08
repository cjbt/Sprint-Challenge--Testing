const express = require('express');
const server = express();
server.use(express.json());

let count = 6;
const games = [
  {
    name: 'Counter Strike',
    id: 1
  },
  {
    name: 'Dota',
    id: 2
  },
  {
    name: 'Luna Online',
    id: 3
  },
  {
    name: 'World of Warcraft',
    id: 4
  },
  {
    name: 'Street Fighter',
    id: 5
  }
];

server.get('/', (req, res) => {
  res.send('<h1>site is working</h1>');
});

server.get('/games', (req, res) => {
  res.json(games);
});

server.get('/games/:id', (req, res) => {
  const id = req.params.id;
  const selectedGame = games.find(game => game.id == id);

  if (selectedGame) {
    res.status(200).json(games);
  } else {
    res.status(404).json({ message: 'no id found' });
  }
});

server.post('/games', (req, res) => {
  const { name } = req.body;
  const newGame = { name, id: count };
  if (!name) {
    res.status(422).json({ message: 'enter name field' });
  }

  games.push(newGame);
  count++;
  res.status(201).json(games);
});

module.exports = server;
