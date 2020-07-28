import React from 'react';
import './SignUp.css';

function getUsernameMessage(username) {
    if((username.length > 0) && (username.length <= 4)) {
        return 'Username must be atleast 5 charachters long.';
    } else {
        return '';
    }
}

function getPasswordMessage(password) {
    if((password.length > 0) && (password.length < 8)) {
        return 'Password must be atleast 8 charachters long.';
    } else {
        return '';
    }
}

function SignUpForm(props) {
    const usernameMessage = getUsernameMessage(props.state.username);
    const passwordMessage = getPasswordMessage(props.state.password);

    return(
        <form className = 'signup-form' onSubmit = { props.onFormSubmit } >
            <p>{ usernameMessage }</p>
            <p>{ passwordMessage }</p>

            <input 
            type = 'text' 
            placeholder = 'Username'
            name = 'username'
            onChange = { props.onInputChange }
            />
            
            <input 
            type = 'password'
            placeholder = 'Password'
            name = 'password'
            onChange = { props.onInputChange }
            />

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

            <button>SignUp</button>
        </form>
        
    );
}

export default SignUpForm;