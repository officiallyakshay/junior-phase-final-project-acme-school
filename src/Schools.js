// import React from 'react';
// import {connect} from 'react-redux';
// import { setStudentsThunks, createStudentThunks, destroyThunks } from '../reducers/students';
// import { setSchoolsThunks } from '../reducers/schools';

// class Schools extends React.Component {
//     constructor() {
//         super();
//     }
//     async componentDidMount() {
//         await this.props.setSchools();
//         await this.props.setStudents();
//     }
//     render() {
//         return (
//             <div>
//             {
//                 <SchoolForm />
//             }
//             </div>
//         )
//     }
// };

// const mapStateToSchoolsProps = state => {
//     return {
//         students: state.students,
//         schools: state.schools
//     }
// }

// const mapDispatchToSchoolsProps = {
//     setStudents: setStudentsThunks,
//     createStudent: createStudentThunks,
//     destroy: destroyThunks,
//     setSchools: setSchoolsThunks,
//     createSchool: createSchoolThunks,
//     destroy: destroyThunk
// }

// export default connect(mapStateToSchoolsProps, mapDispatchToSchoolsProps)(Schools);