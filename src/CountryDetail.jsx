import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import arrowLeftLight from '../assets/arrow-left.svg';
import arrowLeftDark from '../assets/arrow-left-dark.svg';

import { DarkModeContext } from './contexts/DarkModeContext';
import BorderCountries from './BorderCountries';

import './CountryDetail.css';

function getNativeName(nativeNameObject) {
    const nativeLanguageKey = Object.keys(nativeNameObject)[0];
    return nativeNameObject[nativeLanguageKey]?.common || 'N/A';
}


function CountryDetail() {
    const { countryName } = useParams();  // Fetch the country name from the URL parameter
    const [countryData, setCountryData] = useState(null);

    const navigate = useNavigate();
    
    const { darkMode } = useContext(DarkModeContext);  // Assuming your context provides a boolean 'isDarkMode'
    const backButtonClass = `back-button ${darkMode ? 'dark' : 'light'}`;

    useEffect(() => {
        // Convert the URL-friendly country name back to a regular string (opposite of what we did in CountryCard)
        const formattedCountryName = countryName.split('-').join(' ');

        // Fetch the detailed data for the specific country
        fetch(`https://restcountries.com/v3.1/name/${formattedCountryName}?fullText=true&fields=name,population,region,capital,flags,nativeName,topLevelDomains,currencies,languages,borders`)

        .then(response => response.json())
        .then(data => {
            setCountryData(data[0]); // Set the fetched data to state
        })
        .catch(error => {
            console.error("Error fetching country data:", error);
        });

    }, [countryName]);

    // Basic rendering (you can expand this as needed)
    return (
        <div className="country-detail">
            <button className={backButtonClass} onClick={() => navigate(-1)}>
                <img src={ darkMode ? arrowLeftLight : arrowLeftDark} alt="Back Arrow" className="back-arrow"/>
                Back
            </button>
        
            {countryData ? (
                <div className="country-content">
                    <img src={countryData.flags.png} alt={`Flag of ${countryData.name.common}`} className="country-flag" />
                    <div className="country-info">
                        <h1>{countryData.name.common}</h1>
                        <p><strong>Native Name:</strong> {getNativeName(countryData.name.nativeName)}</p>
                        <p><strong>Population:</strong> {countryData.population}</p>
                        <p><strong>Region:</strong> {countryData.region}</p>
                        <p><strong>Capital:</strong> {countryData.capital}</p>
                        <p><strong>Top Level Domain:</strong> {countryData.topLevelDomains?.join(', ') || 'N/A'}</p>
                        <p><strong>Currencies:</strong> {Object.values(countryData.currencies || {}).map(currency => currency.name).join(', ')}</p>
                        <p><strong>Languages:</strong> {Object.values(countryData.languages || {}).join(', ')}</p>
                        {/* Borders can be links to the respective country details */}
                        {/*... Display other detailed information here ...*/}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {countryData && <BorderCountries borderCountries={countryData.borders} />}
        </div>
    );
}

export default CountryDetail;
