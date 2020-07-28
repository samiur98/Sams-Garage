import React from 'react';
import userImage from '../images/userImage.png';
import './ChangePassword.css';

function getPasswordMessage(oldPassword, newPassword) {
    if((oldPassword.length > 0) && (oldPassword.length < 8)) {
        return 'Password must be atleast 8 charachters long.';
    }
    if((newPassword.length > 0) && (newPassword.length < 8)) {
        return 'Password must be atleast 8 charachters long.';
    }
    return '';
}

function ChangePasswordView(props) {
    const errorMessage = getPasswordMessage(props.state.oldPassword, props.state.newPassword);

    return(
        <div className='changepassword'>
            <img
            src = { userImage }
            alt = 'UserImage'>
            </img>

            <p>{ errorMessage }</p>
            <input 
            type = 'password'
            placeholder = 'Old Password'
            name = 'oldPassword'
            onChange = { props.onInputChange } 
            />

            <input 
            type = 'password'
            placeholder = 'New Password'
            name = 'newPassword'
            onChange = { props.onInputChange }
            />
            <button onClick = { () => props.onChangePassword() }>Submit</button>
        </div>
    );
}

export default ChangePasswordView;