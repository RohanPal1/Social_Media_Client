import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '../../utils/localStorageManager';

function Login() {

  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      const response = await axiosClient.post('/auth/login', {
        email,
        password
      });

      console.log('Response in Login.js', response);
      console.log('response.result.accessToken', response.result.accessToken);
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate('/');

    }catch(error) {
      console.log('error', error);
    }
  }

  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Submit" className="submit" />
        </form>

        <p className="subheading">
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
  
}

export default Login;