import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import HomeView from './views/HomeView';
// import JokesView from './views/JokesView';
import LoginView from './views/LoginView';
// import RegisterView from './views/RegisterView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jokes">Jokes</NavLink>
          <NavLink to="/login">Login</NavLink>
        </header>
        <main>
          <Route exact path="/" component={HomeView}/>
          {/* <Route path="/jokes" component={JokesView}/> */}
          <Route path="/login" component={LoginView}/>
          {/* <Route path="/register" component={RegisterView}/> */}
        </main>
      </div>
    );
  }
}

export default App;
