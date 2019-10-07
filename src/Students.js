import React from 'react';
import {connect} from 'react-redux';
import StudentForm from './StudentForm';
import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';
// import { setSchoolsThunks } from '../reducers/schools';

class Students extends React.Component {
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
    async componentDidMount() {
        await this.props.setStudents();
        // await this.props.setSchools();
    }
    render() {
        return (
            <div>
            {
              <StudentForm />
            }
            </div>
        )
    }
};

const mapStateToStudentsProps = state => {
    return {
        students: state.students,
        // schools: state.schools
    }
}

const mapDispatchToStudentsProps = {
    setStudents: setStudentsThunks,
    createStudent: createStudentThunks,
    destroy: destroyThunks,
    // setSchools: setSchoolsThunks,
    // createSchool: createSchoolThunks,
    // destroy: destroyThunk
}

export default connect(mapStateToStudentsProps, mapDispatchToStudentsProps)(Students);