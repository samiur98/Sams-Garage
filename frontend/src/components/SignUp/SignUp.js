import React from 'react';
import Header from '../Header/Header';
import SignUpForm from './SignUpView';
import './SignUp.css';

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
        alert('onFormSubmit');
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