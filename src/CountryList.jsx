import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ searchTerm, filterRegion }) => {
    const [countries, setCountries] = useState([]);

    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterRegion === '' || country.region === filterRegion)
    );

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
        .then(response => response.json())
        .then(data => {
            setCountries(data);
        });
    }, []);

    return (
        <div className="countries-grid">
            {filteredCountries.map(country => (
                <CountryCard key={country.cca3 || country.name.common} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
