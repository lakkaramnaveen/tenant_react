import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUser().then((response) => {
            this.setState({
                users: response.data
            })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Address</td>
                            <td>Contact</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user =>
                                <tr key={user.tenantId}>
                                    <td>{user.tenantId}</td>
                                    <td>{user.tenantName}</td>
                                    <td>{user.tenantProper}</td>
                                    <td>{user.tenantNumber}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserComponent;