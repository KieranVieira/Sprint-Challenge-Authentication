import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const RegisterContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 25px;
    margin: 25px auto;
    text-align: center;
    h1{
        font-weight: 100;
        margin: 0 0 7px 0;
    }
    h3{
        font-weight: 100;
        margin: 7px 0 0 0;
        a{
            text-decoration: none;
        }
    }
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    input,button{
        padding: 10px 5px;
        margin: 7px 0;
        border-radius: 5px;
        border: 1px solid gray
    }
    button{
        font-size: 15px;
        &:hover{
            cursor: pointer;
            background-color: black;
            color: white;
        }
    }
`;

export class RegisterView extends Component {
    state = {
        username: '',
        password: ''
    }

    handleFormChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = e => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/register', this.state)
          .then(res => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.history.push('/')
          })
          .catch(error => {
            console.error(error)
          })
      }

    render() {
        return (
            <RegisterContainer>
            <h1>Register</h1>
            <RegisterForm onSubmit={this.handleRegister}>
                <input 
                    placeholder="Username" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleFormChange}
                    type="text"
                />
                <input 
                    placeholder="Password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleFormChange}
                    type="password"
                />
                <button type='submit'>Register</button>
            </RegisterForm>
        </RegisterContainer>
        )
    }
}

export default RegisterView;