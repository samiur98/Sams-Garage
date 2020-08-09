import React from 'react';
import './AddPost.css';

function AddPostView(props) {
    return(
        <div className = 'addpost'>
            <input 
            type = 'text'
            placeholder = 'Title'
            name = 'title'
            onChange = { props.onInputChange }
            />

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

            <input 
            type = 'text'
            placeholder = 'Price in Dollars'
            name = 'price'
            onChange = { props.onInputChange }
            />
            
            <input 
            type = 'text'
            placeholder = 'Mileage in miles'
            name = 'mileage'
            onChange = { props.onInputChange }
            />

            <h3>Optional Information</h3>

            <input 
            type = 'text'
            placeholder = 'Color'
            name = 'color'
            onChange = { props.onInputChange }
            />

            <div>
                <label>Seats</label>
                <select onChange = { props.onInputChange } name = 'seats'>
                    <option value = { 0 }>Unspecify</option>
                    <option value = { 1 }>1</option>
                    <option value = { 2 }>2</option>
                    <option value = { 3 }>3</option>
                    <option value = { 4 }>4</option>
                    <option value = { 5 }>5</option>
                    <option value = { 6 }>6</option>
                    <option value = { 7 }>7</option>
                    <option value = { 8 }>8</option>
                    <option value = { 9 }>9</option>
                    <option value = { 10 }>10</option>
                </select>

                <label>Doors</label>
                <select onChange = { props.onInputChange } name = 'doors'>
                    <option value = { 0 }>Unspecify</option>
                    <option value = { 2 }>2</option>
                    <option value = { 4 }>4</option>
                </select>

                <label>Transmission</label>
                <select onChange = { props.onInputChange } name = 'transmission'>
                    <option value = ''>Unspecify</option>
                    <option value = 'Manual'>Manual</option>
                    <option value = 'Automatic'>Automatic</option>
                    <option value = 'Semi-Automatic'>Semi-Automatic</option>
                </select>
            </div>

            <button onClick = { props.onSubmit }>Submit</button>
        </div>
    );
}

export default AddPostView;