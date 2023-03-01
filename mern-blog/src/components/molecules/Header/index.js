import React from 'react';
import './header.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <p className="logo-app">MERN-Blog</p>
            <p className="menu-item" onClick={() => history.push('/login')}>Logout</p>
        </div>
    )
}

export default Header;
