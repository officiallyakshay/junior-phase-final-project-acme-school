import React from 'react';
// import { connect } from 'react-redux';
// import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';
// import { setSchoolsThunks, createSchoolThunks, destroyThunk } from '../reducers/schools';

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { onChange, create } = this; //this.props ?
        return (
        <div>
            <form className='form'>
            First Name <input name='firstName' onChange = { onChange } />
            Last Name <input name='lastName'  onChange = { onChange } />
            Email <input name='email'  onChange = { onChange } />
            GPA <input name='gpa'  onChange = { onChange } />
            {/* Enroll At <select name='schoolId' onChange = { onChange } >
                <option value="--Not Enrolled--">--Not Enrolled--</option>
                {
                    schools.map(school => <option key={school.id}>{school.name}</option>)
                }
            </select> */}
            <button onClick = { create } >Save</button>
            </form>
            <h1>Home</h1>
            <p>Our most popular school is <a></a> with students.</p>
            <p>Our top performing school is <a></a> with an average GPA of</p>
        </div>
        );
    }
}

export default Home;