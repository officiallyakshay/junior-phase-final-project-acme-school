import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <hr />
    )
  }
}

ReactDOM.render( <Provider store={store}>< App /></Provider>, document.getElementById('root') );