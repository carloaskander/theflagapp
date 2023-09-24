import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ searchTerm, filterRegion }) => {
    // State to store all countries fetched from the API
    const [countries, setCountries] = useState([]);

    // Filtering countries based on search term and selected region
    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) && // Match search term
        (filterRegion === '' || country.region === filterRegion)               // Match region or show all if no region is selected
    );

    // UseEffect hook to fetch country data when the component mounts
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
        .then(response => response.json())
        .then(data => {
            setCountries(data); // Update state with fetched countries
        });
    }, []); // Empty dependency array means this useEffect runs once when the component mounts

    return (
        <div className="countries-grid">
            {/* Map through filtered countries and render a CountryCard for each */}
            {filteredCountries.map(country => (
                <CountryCard key={country.cca3 || country.name.common} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
