import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
            <h2>Naan-Stop-Wok!</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
