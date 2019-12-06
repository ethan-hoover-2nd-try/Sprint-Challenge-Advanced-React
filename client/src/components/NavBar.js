import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const NavBar = ({ title }) => {
    const [darkMode, setDarkMode] = useDarkMode("Women's World Cup - Dark Mode", 'body');

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav>
            <div>
                <h1>{title}</h1>
            </div>
            <div className='toggle-container'>
                <h2>Dark Mode: </h2>
                <div className='dark-mode-toggle' onClick={toggleDarkMode}>
                    {darkMode ? <p>ON</p> : <p>OFF</p>}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;