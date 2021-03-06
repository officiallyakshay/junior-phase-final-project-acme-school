import React from 'react';
import {connect} from 'react-redux';
import schools from '../reducers/schools';
import { setStudentsThunks, createStudentThunks, destroyThunks, updateStudentThunks } from '../reducers/students';
import { setSchoolsThunks } from '../reducers/schools';

const Schools = ({ schools, students, create, onChange, update }) => {
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
                schools.map(school => <option key={school.id}>{school.name}</option>)
              }
          </select>
          <button onClick = { create } >Save</button>
        </form>
        <ul style={{listStyleType: 'none', margin: 'auto', height: '25vh', width: '50vw', display: 'flex', justifyContent: 'space-evenly'}}>
          {
            schools.map(school => <li key={school.id} style={{padding: '2rem', display: 'flex', flexWrap: 'wrap', textAlign: 'center', backgroundColor: 'lightBlue'}}>
              <a href={`#/schools/${school.id}`}>{school.name}</a>
              {/* <img src = {school.imageURL} /> */}
                Student count: { students.filter(student => student.schoolId === school.id).length}
                {/* <select name = 'student' onChange = { (ev) => update({id: student.id, schoolId: ev.target.value}) }> */}
                <select>
                <option value="--Add Student--">--Add Student--</option>
                  {
                    students.map(student => <option key={student.id}>{student.firstName} {student.lastName}</option>)
                  }
              </select>
            </li>)
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
    updateStudent: updateStudentThunks,
    setSchools: setSchoolsThunks
}

export default connect(mapStateToStudentsProps, mapDispatchToStudentsProps)(Schools);