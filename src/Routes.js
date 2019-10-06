import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class Routes extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component = { Home } />
            <Route exact path='/schools' component = { Schools } />
            {/* <Route path='/students' component = { Students } /> */}
            {/* <Route path='/schools/:id' component = { RespectiveSchool } /> */}
        </Switch>
    );
  }
}

export default Routes;