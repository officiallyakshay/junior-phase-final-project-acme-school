const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4 } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/junior_phase_final_project_acme_school');

const Schools = conn.define('schools', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: STRING
});

const Students = conn.define('students', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: STRING
});

const sync = async () => {
  await conn.sync({ force: true });

  const schools = [
    {name: 'mit'},
    {name: 'yay'}
  ];
  const [ mit, yay ] = await Promise.all(schools.map( school => Schools.create(school)));

  const students = [
    {name: 'jim'},
    {name: 'dwight'}
  ];
  const [ jim, dwight ] = await Promise.all(students.map( student => Students.create(student)));
}

module.exports = {
  sync,
  models: {
    Schools,
    Students
  }
}