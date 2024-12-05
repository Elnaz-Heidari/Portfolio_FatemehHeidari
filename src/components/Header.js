import React from 'react';
import MyPhoto from '../elnaz.jpg'; 

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1> Elnaz Heidari's Portfolio</h1>
                <img src={MyPhoto} alt="Your Name" className="profile-photo" />
            </div>
        </header>
    );
}

export default Header;
