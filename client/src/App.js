import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import HomeView from './views/HomeView';
import JokesView from './views/JokesView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

const Header = styled.header`
  height: 50px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid gray;
  h1{
      margin: unset;
      font-size: 35px;
  }
  div{
    a{
      font-size: 20px;
      text-decoration: none;
      color: black;
      padding: 5px 15px;
      margin-left: 10px;
      transition: .2s;
      &:hover{
        background-color: black;
        color: white;
      }
    }
    .active{
      background-color: black;
      color: white;
    }
    button{
      font-size: 20px;
      text-decoration: none;
      background-color: unset;
      border: unset;
      color: black;
      padding: 5px 15px;
      margin-left: 10px;
      transition: .2s;
      &:hover{
        cursor: pointer;
        background-color: black;
        color: white;
      }
    }
  }
`;

const AppContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  font-family: sans-serif;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <h1>Jokes</h1>
          <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/jokes">Jokes</NavLink>
            <NavLink to="/login">Login</NavLink>
            {localStorage.getItem('jwt') && <button onClick={() => {
              localStorage.removeItem('jwt')
              this.props.history.push('/login')
            }}>Logout</button>}
          </div>
        </Header>
        <main>
          <Route exact path="/" component={HomeView}/>
          <Route path="/jokes" component={JokesView}/>
          <Route path="/login" component={LoginView}/>
          <Route path="/register" component={RegisterView}/>
        </main>
      </AppContainer>
    );
  }
}

export default App;
