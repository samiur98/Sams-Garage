import React from 'react';
import Header from '../Header/Header';
import ChangeContactForm from './ChangeContactForm.js';
import axios from 'axios';

class ChangeContactInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            email: '',
            phoneNumber: '',
            preferedMethod: 'Not Any'
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
        if((this.state.email.length <= 0) && (this.state.phoneNumber.length <= 0)) {
            alert('At least one contact info(email or phone number) must be provided');
            return;
        }
        this.updateContactRequest();
    }

    updateContactRequest() {
        const contactInfo = {
            username: this.state.userData.username,
            email: this.state.email,
            phone: this.state.phoneNumber,
            preferedMethod: this.state.preferedMethod
        }
        const failureMessage = 'Contact Info cannot be updated at this time, please try again later.';
        
        axios({
            method: 'post',
            timeout: 5000,
            url: 'http://localhost:8080/users/updateContact',
            data: JSON.stringify(contactInfo),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(res.data === 200) {
                alert('Contact Info successfully updated.')
            }
            if(res.data === 403) {
                alert(failureMessage);
            }
        }).catch(error => {
            console.error(error);
            alert(failureMessage);
        })
    }

    render() {
        return(
            <div>
                <Header 
                history = {this.props.history}
                state = {this.state}
                />
               <ChangeContactForm 
               state = { this.state }
               onInputChange = { this.onInputChange }
               onSubmit = { this.onSubmit } 
               />
            </div>
        );
    }
}

export default ChangeContactInfo;