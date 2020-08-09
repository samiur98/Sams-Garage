import React from 'react';
import Header from '../Header/Header';
import AddPostView from './AddPostView';
import axios from 'axios';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            title: '',
            make: '',
            model: '',
            year: '',
            color: '',
            seats: 0,
            doors: 0,
            transmission: '',
            price: '',
            mileage: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState(() => this.props.location.state); 
        }
    }

    onInputChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        });
    }

    onSubmit() {
        const fieldError = this.checkFieldError();
        if(!fieldError) {
            alert('Please fill the mandatory fields!');
            return;
        }

        const numericError = this.checkNumericError();
        if(!numericError) {
            alert('Year, Mileage, and Price fields must contain numeric values only!');
            return;
        }

        this.addQuery();
    }

    checkFieldError() {
        if(this.state.title.length <= 0) {
            return false;
        }
        if(this.state.make.length <= 0) {
            return false;
        }
        if(this.state.model.length <= 0) {
            return false;
        }
        if(this.state.year.length <= 0) {
            return false;
        }
        if(this.state.mileage.length <= 0) {
            return false;
        }
        if(this.state.price.length <= 0) {
            return false;
        }
        return true;
    }

    checkNumericError() {
        if(isNaN(this.state.price)) {
            return false;
        }
        if(isNaN(this.state.mileage)) {
            return false;
        }
        if(isNaN(this.state.year)) {
            return false;
        }
        return true;
    }

    getData() {
        const metaData = this.state.year + ' ' + this.state.make + ' ' + this.state.model;
        const price = parseInt(this.state.price);
        const mileage = parseInt(this.state.mileage);
        let color = this.state.color;
        let transmission = this.state.transmission;
        let seats = this.state.seats;
        let doors = this.state.doors;

        if(color.length <= 0) {
            color = null;
        }
        if(transmission.length <= 0) {
            transmission = null;
        }
        if(seats <= 0) {
            seats = null;
        }
        if(doors <= 0) {
            doors = null;
        }

        return {
            title: this.state.title,
            metaData: metaData,
            price: price,
            mileage: mileage,
            color: color,
            transmission: transmission,
            seats: seats,
            doors: doors,
            username: this.state.userData.username
        };
    }

    addQuery() {
        const data = this.getData();

        axios({
            method: 'post',
            timeout: 5000,
            url: 'http://localhost:8080/listings/postListing',
            data: data,
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(res.data === 201) {
                alert('Post Successfully added!');
            } else {
                alert('Could not add Post, please try again later');
            }
        }).catch(error => {
            alert('Could not add Post, please try again later');
            console.error(error);
        });
    }

    render() {
        const navState = {
            signedIn: this.state.signedIn,
            userData: this.state.userData
        }
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { navState }
                />
                <AddPostView 
                onInputChange = { this.onInputChange }
                onSubmit = { this.onSubmit }
                />
            </div>
        );
    }
}

export default AddPost;