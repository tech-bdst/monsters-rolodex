import React from 'react';
import './Searchbox.style.css';

export const SearchBox = ({placeholder, Handlechange }) => (
    <input 
    className='Searchbox' 
    type='search' 
    placeholder={placeholder} 
    onChange={Handlechange}
    />
)