const express = require('express');
const dataMessages = require('./data/messages');
const dataUsers = require('./data/users');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/messages', (req, res) => {
  res.send(dataMessages);
});

app.post('/api/message', (req, res) => {
  req.body.date = new Date();
  dataMessages.unshift(req.body);
  res.send({ response: 'Message saved' });
});

app.get('/api/user/current', (req, res) => {
  const currentUserName = 'john-doe';

  res.send(dataUsers.find(user => user.username === currentUserName));
});

app.get('/api/users', (req, res) => {
  res.send(dataUsers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
