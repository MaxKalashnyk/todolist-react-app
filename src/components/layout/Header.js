import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header'>
            <h1 className='title'>TodoList</h1>
            <Link to="/todolist-react-app/" style={linkStyle}>Home</Link> | <Link to="/todolist-react-app/about" style={linkStyle}>About</Link>
        </header>
    )

};

const linkStyle = {
    color: '#fff'
};

export default Header
