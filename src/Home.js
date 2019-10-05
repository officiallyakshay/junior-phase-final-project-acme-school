const Home = ({ schools, students, onSubmit, onChange }) => {
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
        <h1>Home</h1>
        <p>Our most popular school is <a></a> with students.</p>
        <p>Our top performing school is <a></a> with an average GPA of</p>
      </div>
    );
  }