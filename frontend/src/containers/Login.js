import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    function validateForm() {
        return username.length > 0 && password.length > 8;
    }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.BACKEND_HOST + '/login', {
        username,
        password,
      });
      // handle successful login
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="form-wrapper">
    <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                value={username}
                onChange={(e) => handleUsernameChange(e)}
            />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e)}
            />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button block size="lg" type="submit" className="mt-4" disabled={!validateForm()}>
            Login
        </Button>

    </Form>
    </div>
  );
};

export default Login;
