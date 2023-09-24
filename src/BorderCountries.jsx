import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from './contexts/DarkModeContext';
import './BorderCountries.css';

function BorderCountries({ borderCountries }) {
    const navigate = useNavigate();

    // Context to determine the current theme (light/dark).
    const { darkMode } = useContext(DarkModeContext);

    // Handles navigation to the detailed view of a country using its code.
    const navigateToCountryDetails = async (countryCode) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const data = await response.json();
            const countryName = data[0].name.common;
            navigate(`/${countryName}`);
        } catch (error) {
            console.error("Error navigating to country:", error);
        }
    };

    return (
        <div className="border-countries">
            <h3>Border Countries:</h3>
            <div className="border-countries-list">
                {
                    borderCountries && borderCountries.map((countryCode) => (
                        <button 
                            key={countryCode} 
                            className={`border-country-btn ${darkMode ? 'dark' : 'light'}`} 
                            onClick={() => navigateToCountryDetails(countryCode)}
                        >
                            {countryCode}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default BorderCountries;
