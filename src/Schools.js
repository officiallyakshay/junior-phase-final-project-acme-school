import React from 'react';
import {connect} from 'react-redux';
import SchoolForm from './SchoolForm';
// import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';
import { setSchoolsThunks } from '../reducers/schools';

class Schools extends React.Component {
    constructor() {
        super();
    }
    async componentDidMount() {
        await this.props.setSchools();
        // await this.props.setStudents();
    }
    // onChange(ev) {
    //     console.log('hi')
    //       this.setState({[ev.target.name]: ev.target.value});        
    //   }
    //   async create(ev) {
    //     console.log('hey')
    //       ev.preventDefault();
    //       const payload = {firstName: this.state.firstName, lastName: this.state.lastName, gpa: this.state.gpa, email: this.state.email, schoolId: this.state.schoolId}
    //       await this.props.createStudent(payload);
    //   }
    //   async destroy(id) {
    //       await this.props.destroy(id);
    //       // this.setState({ students : this.state.students.filter( student => student.id !== id ) })
    //   }
    render() {
        return (
            <div>
            {
              <SchoolForm />
            }
            </div>
        )
    }
};

const mapStateToSchoolsProps = state => {
    return {
        // students: state.students,
        schools: state.schools
    }
}

const mapDispatchToSchoolsProps = {
    // setStudents: setStudentsThunks,
    // createStudent: createStudentThunks,
    // destroy: destroyThunks,
    setSchools: setSchoolsThunks
}

export default connect(mapStateToSchoolsProps, mapDispatchToSchoolsProps)(Schools);