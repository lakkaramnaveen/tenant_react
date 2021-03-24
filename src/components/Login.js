import React, { Component } from "react";
import axios from 'axios';
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            flag: false
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    handleUsername(event) {
        this.setState({ username: event.target.value })
    }
    handlePassword(event) {
        this.setState({ password: event.target.value })
    }
    onFormSubmit = () => {
        axios.post(`http://localhost:9090/owner/login/${this.state.username}/${this.state.password}`).then((resp) => {
            this.setState({ flag: true })
            sessionStorage.setItem('username', this.state.username)
            if (this.state.flag === true) {
                this.props.history.push("/owner")
            } else {
                alert('invalid username/password')
            }
        }).catch(() => {
            alert('Login not successful');
            this.props.history.push("/login")
        });
    }

    render() {
        return (
            <div>
                <div>Username:</div>
                <input type="text" onChange={this.handleUsername}></input>
                <div>Password:</div>
                <input type="password" onChange={this.handlePassword}></input>
                <div>
                    <button className="btn btn-primary" onClick={this.onFormSubmit}>Sign In</button>
                </div>
            </div>
        )
    }
}

export default Login;