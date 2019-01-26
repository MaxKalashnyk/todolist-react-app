import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header'>
            <h1 className='title'>TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )

};

const linkStyle = {
    color: '#fff'
};

export default Header
