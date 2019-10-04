const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, INTEGER } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/junior_phase_final_project_acme_school', { logging: false });

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
  firstName: STRING,
  lastName: STRING,
  email: STRING,
  gpa: STRING
});

Students.belongsTo(Schools);
Schools.hasMany(Students);

const sync = async () => {
  await conn.sync({ force: false });

  // const schools = [
  //   {name: 'MIT'},
  //   {name: 'Harvard'},
  //   {name: 'UCLA'},
  //   {name: 'Stanford'},
  //   {name: 'Cal_Poly'}
  // ];
  // const [ MIT, Harvard, UCLA, Stanford, Cal_Poly ] = await Promise.all(schools.map( school => Schools.create(school)));

  // const students = [
    // {firstName: 'jim'},
    // {firstName: 'dwight'}
  // ];
  // const [ jim, dwight ] = await Promise.all(students.map( student => Students.create(student)));
}

module.exports = {
  sync,
  models: {
    Schools,
    Students
  }
}