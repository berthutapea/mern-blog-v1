import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import { LogoMsn } from '../../../assets';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <img className="logo-app" onClick={() => navigate('/')} src={LogoMsn} alt="logo" />
            <p className="menu-item" onClick={() => navigate('/')}>Home</p>
            <p className="menu-item" onClick={() => navigate('/admin-blog')}>Action</p>
            <p className="menu-item" onClick={() => navigate('/create-blog')}>Create Blog</p>
            <p className="menu-item" onClick={() => navigate('/login')}>Logout</p>
        </div>
    )
}

export default Header;
