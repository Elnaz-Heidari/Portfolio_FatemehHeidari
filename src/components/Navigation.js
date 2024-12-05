import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/personal">Personal Data</Link></li>
                <li><Link to="/academic">Academic Credentials</Link></li>
                <li><Link to="/experience">Academic Experience</Link></li>
                <li><Link to="/professional">Professional Summary</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;

