import React, { Component } from 'react'
import axios from 'axios';

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
            <>
            <h1>Register</h1>
            <form onSubmit={this.handleRegister}>
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
                <button type='submit'>Login</button>
            </form>
        </>
        )
    }
}

export default RegisterView;