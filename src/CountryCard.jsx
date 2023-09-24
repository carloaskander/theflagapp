import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './CountryCard.css';

function CountryCard({ country }) {
    // Access dark mode context to determine theme
    const { darkMode } = useContext(DarkModeContext);

    /**
     * Adjust font size based on the length of the country name.
     * This ensures that longer country names do not overflow or appear too large.
     *
     * @param {string} name - Name of the country
     * @return {string} CSS-valid font size value
     */
    function getDynamicFontSize(name) {
        if (name.length < 10) {
            return "1.5rem";
        } else if (name.length < 20) {
            return "1.25rem";
        } else {
            return "1rem";
        }
    }
    
    return (
        // Link each country card to its respective details page using a URL-friendly name format
        <Link to={`/${country.name.common.toLowerCase().split(" ").join("-")}`} className="country-link">
            <div className={`country-card ${darkMode ? 'dark' : 'light'}`}>
                {/* Display country flag as a background image */}
                <div className="country-flag-container" style={{backgroundImage: `url(${country.flags?.png})`}}></div>
                <div className="country-details">
                    {/* Adjust font size for the country name dynamically */}
                    <h2 style={{ fontSize: getDynamicFontSize(country.name.common) }}>
                        {country.name && country.name.common}
                    </h2>
                    <p><strong>Population:</strong> {country.population}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    {/* Some countries may have multiple capitals; we're displaying the first */}
                    <p><strong>Capital:</strong> {country.capital && country.capital[0]}</p>
                </div>
            </div>
        </Link>
    );
}

export default CountryCard;
