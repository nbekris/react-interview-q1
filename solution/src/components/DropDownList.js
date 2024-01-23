import React from 'react';
import { useState , useEffect } from 'react';
import { getLocations } from '../mock-api/apis.js';

export default function DropDown() {
    const [selectedOption, setSelectedOption] = useState("option1");
    const [locations, setLocations] = useState([]);

    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getLocations();
                setLocations(result);
            } catch(error) {
                console.error('Error encountered fetching locations', error);
            }
        };
        fetchData();
    }, []);

    return (
    <div className="dropdown-list">
        <label>
            Location
        </label>
        <div className="dropdown-wrapper">
            <select value={selectedOption} onChange={handleDropdownChange}>
                {locations.map((location, index) => (
                    <option key={index} value={location}>
                    {location}
                </option>
                ))}
            </select>
        </div>
    </div>
    );
}