import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            name: '',
            password: ''
        }
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        //const { name, password } = this.state;
        axios.get('http://localhost:9090/owner/login/chinni/admin/').then((response) => {
            console.log("login response " + response.data)
        }).catch((error) => {
            console.log("login error" + error)
        });
    }
    // handleChange(event) {
    //     this.setState({ flag: false, name: event.target.value, password: event.target.value });
    //     event.preventDefault();
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>
                        UserName:
                            <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Password:
                            <input type="password" name="password" onChange={this.handleChange} />
                    </label> */}
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }


}

export default Login;