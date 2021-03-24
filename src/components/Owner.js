import React from 'react';
import { Link } from 'react-router-dom';
import { addOwner, getOwner, deleteOwner, updateOwner } from '../services/UserService';

class Owner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: []
        }
    }

    componentDidMount() {
        if (sessionStorage.getItem('username') == null) {
            this.props.history.push("/")
        }
        getOwner().then((response) => {
            this.setState({
                owner: response.data
            })
        });
    }

    add = () => {
        let o = { isAdmin: true, ownerLocation: 'Hyderabad', ownerName: 'Nani', ownerPassword: 'nani123' };
        addOwner(o).then(() => {
            alert('added')
            window.location.reload();
        }).catch(err => console.log(err))
    }
    delete = (id) => {
        deleteOwner(id).then(() => {
            alert('deleted')
            window.location.reload();
        }).catch(err => console.log(err))
    }
    update = (owner) => {
        updateOwner(owner).then(() => {
            alert('updated')
            window.location.reload();
        }).catch(err => console.log(err))
    }
    logout = () => {
        sessionStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Owners</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.owner.map(owner =>
                                <tr key={owner.ownerId}>
                                    <td>{owner.ownerId}</td>
                                    <td>{owner.ownerName}</td>
                                    <td>{owner.ownerLocation}</td>
                                    <td><button onClick={() => this.delete(owner.ownerId)} className="btn-danger btn">Delete</button></td>
                                    <td><Link to="/update"><button className="btn-primary btn">Update</button></Link></td>
                                </tr>)
                        }
                    </tbody>
                </table>
                <button onClick={this.add} className="btn-success btn">Add Owner</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.logout} className="btn-warning btn">Logout</button>
            </div>
        );
    }
}

export default Owner;