import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import "./Login.css";

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState();
    function validateForm() {
        return name.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        axios.get(`http://localhost:9090/owner/login/${name}/${password}`).then((resp) => {
            setFlag(resp.data);
            console.log(resp.data)
            getUser();
        });
        event.preventDefault();
    }
    function getUser() {
        console.log("Nani")
        if (flag === true) {
            console.log("Chinni");
        }
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}