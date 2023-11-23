import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Update fetch URL for login
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // Redirect to the home page after successful login
        history.push('/');
      } else {
        console.error('Login failed:', data.message);
        // Optionally, you can display an error message to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors, e.g., network issues
    }
  };

  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      // Update fetch URL for registration
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);
        // Optionally, you can redirect to a login page or handle success in some way
      } else {
        console.error('Registration failed:', data.message);
        // Optionally, you can display an error message to the user
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle other errors, e.g., network issues
    }
  };

  return (
    <div className="login-container">
      <div className="image-section"></div>
      <div className="form-section">
        <div className="login-heading">Login</div>
        <input
          type="text"
          placeholder="Username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <button onClick={handleRegistration} className="register-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
