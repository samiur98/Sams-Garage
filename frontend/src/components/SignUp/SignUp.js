import React from 'react';
import Header from '../Header/Header';
import SignUpForm from './SignUpView';
import './SignUp.css';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            preferedMethod: 'Not Any'
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.postUserRequest = this.postUserRequest.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState((prevState) => {
                return {
                    signedIn: this.props.location.state.signedIn,
                    userData: this.props.location.state.userData,
                    username: prevState.username,
                    password: prevState.password,
                    email: prevState.email,
                    phoneNumber: prevState.phoneNumber,
                    preferedMethod: prevState.preferedMethod
                };
            })
        }
    }

    onInputChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        });
    }

    onFormSubmit() {
        if(this.state.username.length <= 4) {
            return;
        }
        if(this.state.password.length < 8) {
            return;
        }
        if((this.state.email.length <= 0) && (this.state.phoneNumber.length <= 0)) {
            alert('At least one contact info(email or phone number) must be provided');
            return;
        }
        this.postUserRequest();
    }

    postUserRequest() {
        const signUpInfo = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phoneNumber,
            preferedMethod: this.state.preferedMethod
        }
        const failureMessage = 'Could not perform SignUp at this time, plese try again later';
        
        axios({
            method: 'post',
            timeout: 5000,
            url: 'http://localhost:8080/users/postUser',
            data: JSON.stringify(signUpInfo),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(res.data === 201) {
                alert('User successfully registered!');
            }
            if(res.data === 400) {
                alert(`${signUpInfo.username} already exists, please use another username`);
            }
        }).catch(error => {
            console.error(error);
            alert(failureMessage);
        });

    }

    render() {
        return(
            <div className='signup'>
                <Header 
                history = { this.props.history } 
                state = { this.state } 
                />
                <SignUpForm 
                state = { this.state } 
                onInputChange = { this.onInputChange }
                onFormSubmit = { this.onFormSubmit }
                />
            </div>
        );
    }
}

export default SignUp;