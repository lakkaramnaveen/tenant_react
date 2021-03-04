import React from "react";

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar bg="light">
            <Nav className="navbar-right">
                <Link to={"login"} className="nav-link">Login</Link>
            </Nav>
        </Navbar>
    );
}