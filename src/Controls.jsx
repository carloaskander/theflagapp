import React, { useContext } from 'react';
import { DarkModeContext } from "./contexts/DarkModeContext";
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import './Controls.css';

const Controls = ({ searchTerm, setSearchTerm, filterRegion, setFilterRegion }) => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className="controls">
            <SearchBar value={searchTerm} onValueChange={setSearchTerm} />
            <FilterDropdown value={filterRegion} onValueChange={setFilterRegion} />
        </div>
    );
}

export default Controls;
