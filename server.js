const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { models: { Schools, Students } } = require('./db');

const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/api/schools', async ( req, res, next ) => {
  try {
    res.send(await Schools.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/api/schools/:id', async ( req, res, next ) => {
  console.log('hi', req.body)
  try {
    res.send(await Schools.findOne({ where: { id: req.body.schoolId }}));
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/api/students', async ( req, res, next ) => {
  try {
    res.send(await Students.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.post('/api/students', async ( req, res, next ) => {
  try {
    // const school = await Schools.findAll({ where: { name: req.body.schoolId }});
    // req.body.schoolId = school[0].id;
    const student = await Students.create(req.body);
    res.send(student);
  }
  catch(ex) {
    next(ex);
  }
});

app.put('/api/students/:id', async ( req, res, next ) => {
  try {
    const student = await Students.update(req.body, { where: {id: req.params.id} });
    res.json(student);
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/api/students/:id', async ( req, res, next ) => {
  try {
    await Students.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

db.sync()
  .then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
})