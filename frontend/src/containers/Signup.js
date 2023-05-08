import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "../styles/App.css";

async function loginUser(credentials) {

    return fetch('http://localhost:4000/signup', {
   
      method: 'POST',
   
      headers: {
   
        'Content-Type': 'application/json'
   
      },
   
      body: JSON.stringify(credentials)
   
    })
   
      .then(data => data.json())
   
   }

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 8 && password === confirmPassword;

    }

    function handleSubmit(event) {

        event.preventDefault();

    }

    return (

        <div className="form-wrapper">

            <Form onSubmit={handleSubmit}>

                <Form.Group size="lg" controlId="email">

                    <Form.Label>Email</Form.Label>

                    <Form.Control

                        autoFocus

                        type="email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                    />

                </Form.Group>

                <Form.Group size="lg" controlId="password">

                    <Form.Label>Password</Form.Label>

                    <Form.Control

                        type="password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                    />


                </Form.Group>
                <Form.Group size="lg" controlId="confirm-password">

                    <Form.Label>Confirm Password</Form.Label>

                    <Form.Control

                        type="password"

                        value={confirmPassword}

                        onChange={(e) => setConfirmPassword(e.target.value)}

                    />


                </Form.Group>

                <Button block size="lg" type="submit" className="mt-4" disabled={!validateForm()}>

                    Login

                </Button>

            </Form>

        </div>

    );

}