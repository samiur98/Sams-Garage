import React from 'react';
import './Header.css';

function NavbarSignedOut() {
    return(
        <div className='header-flex-container'>
            <p>Home</p>
            <p>About</p>
            <p>Search</p>
            <p>SignIn</p>
            <p>SignUp</p>
        </div>
    );
}

function NavbarSignedIn() {
    return(
        <div className='header-flex-container'>
            <p>Home</p>
            <p>About</p>
            <p>Search</p>
            <p>MyPosts</p>
            <p>ChangePassword</p>
            <p>ChangeContactInfo</p>
            <p>SignOut</p>
        </div>
    );
}

function HeaderView() {
    return (
        <div className='header'>
            <h1>Sam's Garage</h1>
            <NavbarSignedOut />
        </div>
    );
}

export default HeaderView;
