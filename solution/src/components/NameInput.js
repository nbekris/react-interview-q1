import React from 'react';
import { useState } from 'react';
import { isNameValid } from '../mock-api/apis.js';

export default function Name() {
    const [name, setName] = useState("");
    const[isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleNameInput = async (e) => {
        const newName = e.target.value;
        setName(newName);

        const isValidName = await isNameValid(newName);
        setIsValid(isValidName);
    };

    return <form className='name-input'>
        <label> Name </label>
        <div className={`input-wrapper ${isValid ? '' : 'invalid'}`}>
            <input type="text" value={name} onChange={handleChange} onInput={handleNameInput}/>
        </div>
        {!isValid && <p className='error-message'>Invalid name</p>}
    </form>
}