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
//         const {school} = this.props;
//         return (
// 
//         )
//     }
// }

// export default RespectiveSchool;


// // const RespectiveSchool = ({ schools, students, destroy, onChange, onSubmit, schoolId }) => {
// //     return (
// //       <div>
// //         <form className='form'>
// //           First Name <input name='firstName' onChange = { onChange } />
// //           Last Name <input name='lastName'  onChange = { onChange } />
// //           Email <input name='email'  onChange = { onChange } />
// //           GPA <input name='gpa'  onChange = { onChange } />
// //           Enroll At <select name='schoolId' onChange = { onChange } >
// //             <option value="--Not Enrolled--">--Not Enrolled--</option>
// //               {
// //                 schools.map(school => <option key={school.id}>{school.name}</option>)
// //               }
// //           </select>
// //           <button onClick = { onSubmit } >Save</button>
// //         </form>
// //         <div style={{height: '50px', width:'100px', listStyleType: 'none'}}>
// //           <div>
// //             {
// //               schools.filter(school => school.id === schoolId).map(school => <option key={school.id}>{school.name}</option>)
// //               // students.map(student => <li key={student.id}>Student count: {students.filter(student => student.schoolId === school.id).length}</li>)
// //             }
// //           </div>
// //           <select>
// //             <option value="--Not Enrolled--">--Not Enrolled--</option>
// //               {
// //                 students.map(student => <option key={student.id}>{student.firstName} {student.lastName}</option>)
// //               }
// //           </select>
// //         </div>
// //         <ul>
// //           {
// //             students.filter(student => student.schoolId === schoolId).map(student => <li key={student.id} style={{padding: '2rem', display: 'flex', flexWrap: 'wrap', textAlign: 'center', backgroundColor: 'lightBlue'}}>
// //               {student.firstName}
// //               {student.lastName}
// //               GPA:{student.gpa}
// //               <select>
// //                 <option value="--Not Enrolled--">--Not Enrolled--</option>
// //                   {
// //                     schools.map(school => <option selected={school.id === student.schoolId} key={school.id}>{school.name}</option>)
// //                   }
// //               </select>
// //             <button onClick = { () => destroy(student.id) } >Destroy</button></li>)
// //             // <img src={school.imageURL} alt='baddass-school' />
// //           }
// //         </ul>
// //       </div>
// //     );
// //   }
