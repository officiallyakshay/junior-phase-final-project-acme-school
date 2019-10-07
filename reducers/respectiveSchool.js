// import RespectiveSchool from "../src/RespectiveSchool";
// import axios from 'axios';

// const RESPECTIVE_SCHOOL = 'RESPECTIVE_SCHOOL';

// //action creator
// const respectiveSchool = school => ({
//     type: RESPECTIVE_SCHOOL,
//     school
// })

// //if i pass an argument in from the front end pass it in the () on line 16
// const respectiveSchoolThunk = (id) => async dispatch => {
//     return async dispatch => {
//         const school = (await axios.get(`/api/schools/${id}`)).data;
//         dispatch(respectiveSchool(school));
//     }
// };

// const respectiveSchoolReducer = (state = {}, action) => {
//     switch (action.type) {
//         case RESPECTIVE_SCHOOL:
//             return action.school;
//         default:
//             return state
//     }
// };

// export default respectiveSchoolReducer
// export {respectiveSchoolThunk};

