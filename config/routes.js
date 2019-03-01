const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig');
const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function getToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(
    payload, 
    process.env.JWT_SECRET || 'add a .env file to root of project with the JWT_SECRET variable', 
    options
    )
}

function register(req, res) {
  try {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    
    db('users')
      .insert(user)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(error => {
        res.status(400).json({
          message: "Please provide a unique username and password",
          error
        })
      })
  } catch (error) {
    res.status(500).json({
      message: "Server could not register the user.",
      error
    })
  }
}

function login(req, res) {
  const {username, password} = req.body;
  
  db('users')
    .where({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)){
        const token = getToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        })
      }else{
        res.status(400).json({
          message:"Invalid credentials"
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        message:"Server could not login user",
        error
      })
    })
  
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
