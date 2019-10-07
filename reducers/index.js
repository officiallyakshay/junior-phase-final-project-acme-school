import { combineReducers } from 'redux';
import students from './students';
// import schools from './schools';
// import respectiveSchool from './respectiveSchool'

//this is the shared state amongst components
const reducer = combineReducers({
    students,
    // schools,
    // respectiveSchool
});

export default reducer;