import React, { useContext } from 'react';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './SearchBar.css';


const SearchBar = ({ value, onValueChange }) => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <input 
            type="text" 
            className={`search-bar ${darkMode ? 'dark' : 'light'}`} 
            placeholder="Search for a country..." 
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
        />
    );
}


export default SearchBar;
