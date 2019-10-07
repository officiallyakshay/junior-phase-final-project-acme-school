// import Schools from '../src/Schools';
// import axios from 'axios';

// const SET_SCHOOLS = 'SET_SCHOOLS'; //action type

// //action creator
// const setSchools = schools => ({
//     type: SET_SCHOOLS,
//     schools
// });

// //if i pass an argument in from the front end pass it in the () on line 16
// const setSchoolsThunks = () => async dispatch => {
//     const schools = (await axios.get('/api/schools')).data;
//     dispatch(setSchools(schools));
// };

// const schools = (state = [], action) => {
//     switch (action.type) {
//         case SET_SCHOOLS:
//             return action.schools;
//         default:
//             return state
//     }
// };

// export default schools;
// export {setSchoolsThunks}

