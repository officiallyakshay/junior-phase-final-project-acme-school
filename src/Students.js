import React from 'react';
import {connect} from 'react-redux';
import StudentForm from './StudentForm';
import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';

class Students extends React.Component {
    constructor() {
        super();
      this.onChange = this.onChange.bind(this);
      this.create = this.create.bind(this);
      this.destroy = this.destroy.bind(this);
    }
    async componentDidMount() {
        await this.props.setStudents();
        // await this.props.setSchools();
    }
    onChange(ev) {
      console.log('hi')
        this.setState({[ev.target.name]: ev.target.value});        
    }
    async create(ev) {
      console.log('hey')
        ev.preventDefault();
        const payload = {firstName: this.state.firstName, lastName: this.state.lastName, gpa: this.state.gpa, email: this.state.email, schoolId: this.state.schoolId}
        await this.props.createStudent(payload);
    }
    async destroy(id) {
        await this.props.destroy(id);
    }
    render() {
        return (
            <div>
            {
              <StudentForm onChange = { this.onChange } create = { this.create } destroy = { this.destroy }/>
            }
            </div>
        )
    }
};

const mapStateToStudentsProps = state => {
    return {
        students: state.students,
    }
}

const mapDispatchToStudentsProps = {
    setStudents: setStudentsThunks,
    createStudent: createStudentThunks,
    destroy: destroyThunks,
}

export default connect(mapStateToStudentsProps, mapDispatchToStudentsProps)(Students);