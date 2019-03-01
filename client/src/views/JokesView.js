import React, { Component } from 'react'
import axios from 'axios';

export class JokesView extends Component {
    state={
        jokes:[]
    }

    componentDidMount(){
        const headers = {
            headers:{
                authorization: localStorage.getItem('jwt')
            }
        }

        axios.get('http://localhost:3300/api/jokes', headers)
            .then(res => {
                this.setState({
                    jokes: res.data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            localStorage.getItem('jwt')?
            <div>
                <h1>Jokes</h1>
                <ul>
                    {this.state.jokes.map(joke => {
                        return <li>{joke.joke}</li>
                    })}
                </ul>
            </div>:
            <h1>Log in to view jokes</h1>
        )
    }
}

export default JokesView