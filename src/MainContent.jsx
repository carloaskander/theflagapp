import React, { useState } from 'react';

import Controls from './Controls';
import CountryList from './CountryList';
import ScrollToTopButton from './ScrollToTopButton';

import './MainContent.css';

const MainContent = () => {
    // Maintain states here
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRegion, setFilterRegion] = useState('');

    return (
        <div className="main-content">
            <Controls searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
            <CountryList searchTerm={searchTerm} filterRegion={filterRegion} />
            <ScrollToTopButton />
        </div>
    );
}

export default MainContent;

