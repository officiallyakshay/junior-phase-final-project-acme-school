import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Students from './Students'
import Schools from './Schools';
// import RespectiveSchool from './RespectiveSchool';

class Routes extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component = { Home } />
            <Route exact path='/students' component = { Students } />
            <Route exact path='/schools' component = { Schools } />
            {/* <Route path='/schools/:id' component = { RespectiveSchool } /> */}
        </Switch>
    );
  }
}

export default Routes;