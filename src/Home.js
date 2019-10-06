import React from 'react';
import { connect } from 'react-redux';
import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';

class Home extends React.Component {
    constructor() {
        super();
    this.onChange = this.onChange.bind(this);
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
    }
    async componentDidMount() {
        await this.props.setStudents();
    }
    onChange(ev) {
        this.setState({[ev.target.name]: ev.target.value});        
    }
    async create(ev) {
        ev.preventDefault();
        const payload = {firstName: this.state.firstName, lastName: this.state.lastName, gpa: this.state.gpa, email: this.state.email, schoolId: this.state.schoolId}
        await this.props.createStudent(payload);
    }
    async destroy(id) {
        await this.props.destroy(id);
        // this.setState({ students : this.state.students.filter( student => student.id !== id ) })
    }
    render() {
        const { onChange, create, destroy } = this;
        console.log(this.props.students);
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
            <ul>
                {
                    this.props.students.map( student => <li key={student.id}>{student.firstName}<button onClick = { () => destroy(student.id) }> Destroy </button></li>)
                }
            </ul>
            </form>
            <h1>Home</h1>
            <p>Our most popular school is <a></a> with students.</p>
            <p>Our top performing school is <a></a> with an average GPA of</p>
        </div>
        );
    }
}

const mapState = state => {
    return {
        students: state.students
    }
};

const mapDispatch = {
    setStudents: setStudentsThunks,
    createStudent: createStudentThunks,
    destroy: destroyThunks
}

export default connect(mapState, mapDispatch)(Home);