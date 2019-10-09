import React from 'react';
import Nav from './Nav';
import Routes from './Routes';
import {connect} from 'react-redux';
import { setSchoolsThunks } from '../reducers/schools';
import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';
import { respectiveSchoolThunk } from '../reducers/respectiveSchool';
import store from '../store';

class App extends React.Component {
    componentDidMount() {
        this.props.setStudents();
        this.props.setSchools();
        this.props.respectiveSchool(this.props.schoolId);
    }
    render() {
        return (
            <div>
                <Nav />
                <Routes />
            </div>
        );
    }
}

const mapDispatchToAppProps = {
    setStudents: setStudentsThunks,
    createStudent: createStudentThunks,
    destroy: destroyThunks,
    setSchools: setSchoolsThunks,
    respectiveSchool: respectiveSchoolThunk
}

export default connect(null, mapDispatchToAppProps)(App);
