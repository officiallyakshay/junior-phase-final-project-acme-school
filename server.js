const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { models: { Schools, Students } } = require('./db')

const port = process.env.PORT || 3001;

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/schools', async ( req, res, next ) => {
  try {
    res.send(await Schools.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/students', async ( req, res, next ) => {
  try {
    res.send(await Students.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.post('/students', async ( req, res, next ) => {
  try {
    res.send(await Students.create(req.body));
  }
  catch(ex) {
    next(ex);
  }
});

// '/schools/:id', //most popular? dont think this is right
// '/schools/:id' //top school?



db.sync()
  .then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
})