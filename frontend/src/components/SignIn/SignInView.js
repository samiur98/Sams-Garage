import React from 'react';
import userImage from '../images/userImage.png';
import './SignIn.css';

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

function SignInView(props) {
    const usernameMessage = getUsernameMessage(props.state.username);
    const passwordMessage = getPasswordMessage(props.state.password);

    return(
        <div className='signin'>
            <img 
            src = { userImage } 
            alt = 'UserImage'>
            </img>

            <p>{ usernameMessage }</p>
            <input 
            type = 'text' 
            placeholder = 'Username'
            name = 'username'
            onChange = { props.onInputChange }
            />

            <p>{ passwordMessage }</p>
            <input 
            type = 'password'
            placeholder = 'Password'
            name = 'password'
            onChange = { props.onInputChange }
            />
            <button onClick = { () => props.onSignIn() }>SignIn</button>
        </div>
        
    );
}

export default SignInView;