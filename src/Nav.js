import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './Home';
import Students from './Students';
import Schools from './Schools';
import RespectiveSchool from './RespectiveSchool';
import { setStudentsThunks, createStudentThunks, destroyThunks, updateStudentThunks } from '../reducers/students';
import { setSchoolsThunks } from '../reducers/schools';

const Nav = ({ schools, students }) => {

  // let schoolId = {};
  // students.filter(student => {
  //   if (!schoolId[student.schoolId]) {
  //     schoolId[student.schoolId] = []
  //   } else {
  //     schoolId[student.schoolId].push(student.schoolId);
  //   }
  // });
  // console.log(schoolId)
  // students.forEach(student => {

  // students.forEach( student => {
  //   schools.forEach(school => {
  //     let final = {}
  //     if (student.id === school.id && !final[school.name] ) {
  //       final[school.name] = 0
  //     } else {
  //       final[school.name]++
  //     }
  //     console.log('uhh', final)
  //   })
  // });


  const links = [
    { text: `Schools (${schools.length})`, to: '/schools' },
    { text: `Students (${students.length})`, to: '/students' },
    { text: `Most Popular (Harvard)`, to: `/schools/${schools.id}` },
    { text: `Top School (Stanford)`, to: `/schools/${schools.id}` },
  ];
  return (
    <nav>
      <a href='/'>Acme School</a>
        <div>
          {
            links.map( link=> <NavLink key={ link.text } to={ link.to }>{ link.text }</NavLink>)
          }
        </div>
    </nav>
  );
}

const mapStateToNavProps = state => {
  return {
    students: state.students,
    schools: state.schools
  }
}

const mapDispatchToNavProps = {
    setStudents: setStudentsThunks,
    createStudent: createStudentThunks,
    destroy: destroyThunks,
    updateStudent: updateStudentThunks,
    setSchool: setSchoolsThunks
}

export default connect(mapStateToNavProps, mapDispatchToNavProps)(Nav);