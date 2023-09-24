import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext';
import './FilterDropdown.css';

const FilterDropdown = ({ value, onValueChange }) => {
    const { darkMode } = useContext(DarkModeContext);
    const mode = darkMode ? 'dark' : 'light';

    return (
        <select 
            value={value} 
            onChange={(e) => onValueChange(e.target.value)}
            className={`filter-dropdown ${mode}`}
        >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

export default FilterDropdown;
