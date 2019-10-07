import React from 'react';
// import Students from './Students';
import students from '../reducers/students';
import schools from '../reducers/schools';

const Students = ({ students, schools, onChange, onSubmit, destroy }) => {
    console.log('hi', students)
    return (
      <div>
        <form className='form'>
          First Name <input name='firstName' onChange = { onChange } />
          Last Name <input name='lastName'  onChange = { onChange } />
          Email <input name='email'  onChange = { onChange } />
          GPA <input name='gpa'  onChange = { onChange } />
          Enroll At <select name='schoolId' onChange = { onChange } >
            <option value="--Not Enrolled--">--Not Enrolled--</option>
              {
                schools.map(school => <option key={school.id}>{school.name}</option>)
              }
          </select>
          <button onClick = { onSubmit } >Save</button>
        </form>
        <ul style={{listStyleType: 'none', margin: 'auto', height: '25vh', width: '50vw', display: 'flex', justifyContent: 'space-evenly'}}>
          {
            students.map(student => <li key={student.id} style={{padding: '2rem', display: 'flex', flexWrap: 'wrap', textAlign: 'center', backgroundColor: 'lightBlue'}}>
              {student.firstName}
              {student.lastName}
              GPA:{student.gpa}
              <select>
                <option value="--Not Enrolled--">--Not Enrolled--</option>
                  {
                    schools.map(school => <option selected={school.id === student.schoolId} key={school.id}>{school.name}</option>)
                  }
              </select>
            <button onClick = { () => destroy(student.id) } >Destroy</button></li>)
          }
        </ul>
      </div>
    );
  }

  export default Students;