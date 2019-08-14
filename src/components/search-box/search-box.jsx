import React from 'react'

import './search-box.css'

// A functional component does not have access to the state and the lifecycle methods
export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)