import React from 'react';
import noImage from '../images/noImage.png';
import './Post.css';

function PostView(props) {
    return(
        <div className = 'post'>
            <OverView 
            title = { props.title }
            price = { props.price }
            />
            
            <VehicleInformation 
            make = { props.make }
            model = { props.model }
            year = { props.year }
            color = { props.color }
            seats = { props.seats }
            doors = { props.doors }
            transmission = { props.transmission }
            price = { props.price }
            />

            <OwnerInformation 
            username = { props.owner.username }
            email = { props.owner.email }
            phone = { props.owner.phone }
            preferedMethod = { props.owner.preferedMethod }
            />
        </div>
    );
}

function OverView(props) {
    return(
        <div className = 'postoverview'>
            <h1>{ props.title }</h1>
            <img 
            src = { noImage }
            alt = 'Unavailable'
            />
            <h2>{'$' + props.price}</h2>
        </div>
    );
}

function VehicleInformation(props) {
    let make = null;
    let model = null;
    let year = null;
    let color = null;
    let seats = null;
    let doors = null;
    let transmission = null;
    let price = null;

    if(props.make) {
        make = 'Make: ' + props.make;
    }
    if(props.model) {
        model = 'Model: ' + props.model;
    }
    if(props.year) {
        year = 'Year: ' + props.year;
    }
    if(props.color) {
        color = 'Color: ' + props.color;
    }
    if(props.seats > 0) {
        seats = 'Seats: ' + props.seats;
    }
    if(props.doors > 0) {
        doors = 'Doors: ' + props.doors;
    }
    if(props.transmission) {
        transmission = 'Transmission: ' + props.transmission;
    }
    if(props.price) {
        price = 'Price: $' + props.price;
    }

    return(
        <div className = 'postvehicleinfo'>
            <h3>Vehicle Information</h3>
            <h5>{ make }</h5>
            <h5>{ model }</h5>
            <h5>{ year }</h5>
            <h5>{ color }</h5>
            <h5>{ seats }</h5>
            <h5>{ doors }</h5>
            <h5>{ transmission }</h5>
            <h5>{ price }</h5>
        </div>
    );
}

function OwnerInformation(props) {
    let username = null;
    let email = null;
    let phone = null;
    let preferedMethod = null;

    if(props.username) {
        username = 'Username: ' + props.username;
    }
    if(props.email) {
        email = 'Email: ' + props.email;
    }
    if(props.phone) {
        phone = 'Phone Number: ' + props.phone;
    }
    if(props.preferedMethod) {
        preferedMethod = 'Prefered Method of Contact: ' + props.preferedMethod;
    }

    return(
        <div className = 'postownerinfo'>
            <h3>Owner Information</h3>
            <h5>{ username }</h5>
            <h5>{ email }</h5>
            <h5>{ phone }</h5>
            <h5>{ preferedMethod }</h5>
        </div>
    );
}

export default PostView;