import React from 'react';
import {connect} from 'react-redux';
import { setStudentsThunks, createStudentThunks, destroyThunks, updateStudentThunks } from '../reducers/students';

const Students = ({ students, schools, onChange, create, destroy }) => {
    console.log('hi', students)
    console.log('hey', schools)
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
                schools.map(school => <option value = {school.id} key={school.id}>{school.name}</option>)
              }
          </select>
          <button onClick = { create } >Save</button>
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
                    schools.map(school => <option value = {school.id} selected={school.id === student.schoolId} key={school.id}>{school.name}</option>)
                  }
              </select>
            <button onClick = { () => destroy(student.id) } >Destroy</button></li>)
          }
        </ul>
      </div>
    );
  }

  const mapStateToStudentsProps = state => {
    return {
        students: state.students,
        schools: state.schools
    }
}

const mapDispatchToStudentsProps = {
    setStudents: setStudentsThunks,
    createStudent: createStudentThunks,
    destroy: destroyThunks,
    updateStudents: updateStudentThunks
}

export default connect(mapStateToStudentsProps, mapDispatchToStudentsProps)(Students);
