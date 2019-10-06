import { combineReducers } from 'redux';
import students from './students';

//this is the shared state amongst components
const reducer = combineReducers({
    students
});

export default reducer;