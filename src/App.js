import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import store, { loadStore } from '../store';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Routes />
            </div>
        );
    }
}

// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         schools: [],
//         students: []
//       }
//       this.onChange = this.onChange.bind(this);
//       this.onSubmit = this.onSubmit.bind(this);
//       this.destroy = this.destroy.bind(this);
//     }
//     async onSubmit(ev) {
//       ev.preventDefault();
//       const payload = {firstName: this.state.firstName, lastName: this.state.lastName, gpa: this.state.gpa, email: this.state.email, schoolId: this.state.schoolId}
//       const student = (await axios.post('/students', payload)).data;
//       const students = [...this.state.students, student];
//       this.setState({ students });
//     }
//     onChange(ev) {
//       this.setState({[ev.target.name]: ev.target.value});
//     }
//     async destroy(id) {
//       await axios.delete(`/students/${id}`);
//       this.setState({ students : this.state.students.filter( student => student.id !== id ) })
//     }
//     async componentDidMount() {
//       loadStore();
//       const urls = [
//         '/schools',
//         '/students'
//       ];
//       const [ schools, students ] = await Promise.all(
//         urls.map( url => axios.get(url).then( response => response.data))
//       );
//       this.setState({ schools, students });
//     }
//     render() {
//       return (
//         <HashRouter>
//           <Route render = { () => <Nav { ...this.state } /> } />
//             <div className='container'>
//               <Route exact path='/' render = { () => <Home { ...this.state }  /> } />
//               <Route exact path='/schools' render={ () => <Schools { ...this.state } onChange = { this.onChange } onSubmit = { this.onSubmit } destroy = { this.destroy } /> } />
//               <Route path='/students' render={ ()=> <Students { ...this.state } onChange = { this.onChange } onSubmit = { this.onSubmit } destroy = { this.destroy } /> } />
//               <Route path='/schools/:id' render={ ({ match })=> <RespectiveSchool schoolId = { match.params.id } { ...this.state } onChange = { this.onChange } onSubmit = { this.onSubmit } destroy = { this.destroy } /> } />
//             </div>
//         </HashRouter>
//       );
//     }
//   }

  export default App;
