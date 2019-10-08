// import React from 'react';
// import {respectiveSchoolThunk} from '../reducers/respectiveSchool'
// import {connect} from 'react-redux';

// class RespectiveSchool extends React.Component {
//     constructor() {
//         super();
//     }
//     async componentDidMount() {
//         await this.props.respectiveSchool(this.props.match.params.id)
//     }
//     render() {
//         return (
//             <RespectiveSchoolForm />
//         )
//     }
// }

// const mapStateToSchoolsProps = state => {
//     return {
//         respectiveSchool: state.respectiveSchool
//     }
// }

// const mapDispatchToSchoolsProps = {
//     respectiveSchool: respectiveSchoolThunk
// }

// export default connect(mapStateToSchoolsProps, mapDispatchToSchoolsProps)(RespectiveSchool);