import React from 'react';
import {connect} from 'react-redux';
import StudentForm from './StudentForm';
import { setStudentsThunks, createStudentThunks, destroyThunks, updateStudentThunks } from '../reducers/students';
// import { setSchoolsThunks } from '../reducers/schools';

class Students extends React.Component {
    constructor() {
        super();
      this.onChange = this.onChange.bind(this);
      this.create = this.create.bind(this);
      this.destroy = this.destroy.bind(this);
    //   this.update = this.update.bind(this);
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
    }
    // async update(id, ev) {
    //     await this.setState({id: student.id, schoolId: ev.target.value})
    // }
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
    updateStudent: updateStudentThunks
}

export default connect(mapStateToStudentsProps, mapDispatchToStudentsProps)(Students);