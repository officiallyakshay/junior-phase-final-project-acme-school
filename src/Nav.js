import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Students from './Students';
import Schools from './Schools';
import RespectiveSchool from './RespectiveSchool';

const Nav = ({ schools, students }) => {
  const links = [
    { text: `Schools ()`, to: '/schools' },
    { text: `Students ()`, to: '/students' },
    { text: `Most Popular ()`, to: '/' },
    { text: `Top School ()`, to: '/' },
  ];
  return (
    <nav>
      <a href='/'>Acme School</a>
        {/* <div>
          {
            links.map( link=> <NavLink key={ link.text } to={ link.to }>{ link.text }</NavLink>)
          }
        </div> */}
    </nav>
  );
}

// const Nav = connect()(_Nav);


export default Nav;