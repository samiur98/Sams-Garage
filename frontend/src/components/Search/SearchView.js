import React from 'react';
import './Search.css'

function SearchView(props) {
    return(
        <div className='searchform'>
            <input
            type = 'text'
            placeholder = 'Make'
            name = 'make'
            onChange = { props.onInputChange }
            />

            <input
            type = 'text'
            placeholder = 'Model'
            name = 'model'
            onChange = { props.onInputChange }
            />

            <input
            type = 'text'
            placeholder = 'Year'
            name = 'year'
            onChange = { props.onInputChange }
            />

            <button>Search</button>
        </div>
    );
}

export default SearchView;