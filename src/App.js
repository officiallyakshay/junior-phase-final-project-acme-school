import React from 'react';
import Nav from './Nav';
import Routes from './Routes';
// import Form from './Form';
import store from '../store';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Form /> */}
                <Nav />
                <Routes />
            </div>
        );
    }
}

  export default App;
