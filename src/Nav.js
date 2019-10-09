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
  const links = [
    { text: `Schools (${schools.length})`, to: '/schools' },
    { text: `Students (${students.length})`, to: '/students' },
    { text: `Most Popular ()`, to: '/' },
    { text: `Top School ()`, to: '/' },
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