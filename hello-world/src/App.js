import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    function formatName(user) {
        return user.firstName + '' + user.lastName;
    }

    const user = {
        firstName: 'Shashank',
        lastName: 'Keshava'
    }

    const element = (
        <h1>
  Hello {{formatName(user)}}
  </h1>);

    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

export default App;
