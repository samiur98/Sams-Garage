import React from 'react';
import './ChangeContact.css';

function ChangeContactForm(props) {
    return(
        <form className = 'change-contact-form' onSubmit = { props.onSubmit }>
            <input
            type = 'text'
            placeholder = 'Email'
            name = 'email'
            onChange = { props.onInputChange }
            />

            <input 
            type = 'text'
            placeholder = 'Phone Number'
            name = 'phoneNumber'
            onChange = { props.onInputChange }
            />

            <div>
                <label>Prefered Method of Contact</label>
                <select onChange = { props.onInputChange } name = 'preferedMethod'>
                    <option value = 'Not Any'>Not Any</option>
                    <option value = 'Email'>Email</option>
                    <option value = 'Call'>Call</option>
                    <option value = 'Text'>Text</option>
                </select>
            </div>

            <button>Submit</button>
        </form>
    );
}

export default ChangeContactForm