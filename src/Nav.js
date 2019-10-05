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