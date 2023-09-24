import React, { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext.jsx';
import { useNavigate } from 'react-router-dom'; // Ensure you've imported this.
import './Navbar.css';

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const navigate = useNavigate(); // For programmatic navigation

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('dark-mode', JSON.stringify(newMode));
            return newMode;
        });
    };

    const goToHomePage = () => {
        navigate('/'); // Redirect to homepage
    };

    return (
        <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
            <h1 onClick={goToHomePage} className="navbar-title">The Flag App</h1> {/* Added an onClick handler here */}
            <button onClick={toggleDarkMode}>
                <img 
                    src={darkMode ? "/assets/moon.svg" : "/assets/moon-bordered.svg"}
                    alt="Mode icon"
                    className="mode-icon"
                />
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default Navbar;
