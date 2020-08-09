import React from 'react';
import './Header.css';

function NavbarSignedOut(props) {
    return(
        <div className='header-flex-container'>
            <p onClick = { () => props.onSwitch('/') }>Home</p>
            <p onClick = { () => props.onSwitch('/about') }>About</p>
            <p onClick = { () => props.onSwitch('/search') }>Search</p>
            <p onClick = { () => props.onSwitch('/signin') }>SignIn</p>
            <p onClick = { () => props.onSwitch('/signup') }>SignUp</p>
        </div>
    );
}

function NavbarSignedIn(props) {
    return(
        <div className='header-flex-container'>
            <p onClick = { () => props.onSwitch('/') }>Home</p>
            <p onClick = { () => props.onSwitch('/about') }>About</p>
            <p onClick = { () => props.onSwitch('/search') }>Search</p>
            <p onClick = { () => props.onSwitch('/myposts') }>MyPosts</p>
            <p onClick = { () => props.onSwitch('/addpost') }>AddPost</p>
            <p onClick = { () => props.onSwitch('/changepassword') }>ChangePassword</p>
            <p onClick = { () => props.onSwitch('/changecontactinfo') }>ChangeContactInfo</p>
            <p onClick = { () => props.onSignOut() }>SignOut</p>
        </div>
    );
}

function HeaderView(props) {
    let Navbar = <NavbarSignedOut 
                 onSwitch = {props.onSwitch}
                />
    if(props.signedIn) {
        Navbar = <NavbarSignedIn 
                onSwitch = {props.onSwitch}
                onSignOut = {props.onSignOut}
                />
    }
    return (
        <div className='header'>
            <h1>Sam's Garage</h1>
            {Navbar}
        </div>
    );
}

export default HeaderView;
