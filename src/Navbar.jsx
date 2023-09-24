import React, { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext.jsx';
import { useNavigate } from 'react-router-dom';
import moonIcon from '../assets/moon.svg';
import moonBorderedIcon from '../assets/moon-bordered.svg';
import './Navbar.css';

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('dark-mode', JSON.stringify(newMode));
            return newMode;
        });
    };

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
            <h1 onClick={goToHomePage} className="navbar-title">The Flag App</h1>
            <button onClick={toggleDarkMode}>
                <img 
                    src={darkMode ? moonIcon : moonBorderedIcon}
                    alt="Mode icon"
                    className="mode-icon"
                />
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default Navbar;
