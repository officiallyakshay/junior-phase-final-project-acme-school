import Students from "../src/Students";
import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS'; //action type
const CREATE_STUDENT =  'CREATE_STUDENT';
const DESTROY = 'DESTROY';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

//action creator
const setStudents = students => ({
    type: SET_STUDENTS,
    students
});

const createStudent = student => ({
    type: CREATE_STUDENT,
    student
});

const destroy = student => ({
    type: DESTROY,
    student //an id in this 
});

const updateStudent = student => ({
    type: UPDATE_STUDENT,
    student //an id in this 
});

//if i pass an argument in from the front end pass it in the () on line 16
export const setStudentsThunks = () => async dispatch => {
    const students = (await axios.get('/api/students')).data;
    dispatch(setStudents(students));
};

export const createStudentThunks = (payload) => async dispatch => {
    console.log(payload)
    const student = (await axios.post('/api/students', payload)).data;
    dispatch(createStudent(student));
};

export const destroyThunks = (id) => async dispatch => {
    await axios.delete(`/api/students/${id}`);
    dispatch(destroy(id));
};

export const updateStudentThunks = (id, schoolId) => async dispatch => {
    await axios.put(`/api/students/${id}`, {schoolId});
    dispatch(updateStudent(id));
};

const students = (state = [], action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students;
        case CREATE_STUDENT:
            return [...state, action.student];
        case DESTROY:
            return state.filter(student => student.id !== action.student);
        case UPDATE_STUDENT:
            return [...state].map(student => student.id === action.student.id ? action.student : student)
        default:
            return state
    }
};

export default students;

