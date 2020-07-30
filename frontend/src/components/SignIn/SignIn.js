import React from 'react';
import Header from '../Header/Header';
import SignInView from './SignInView';
import axios from 'axios';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            username: '',
            password: ''
        }
        this.onSignIn = this.onSignIn.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState((prevState) => {
                return {
                    signedIn: this.props.location.state.signedIn,
                    userData: this.props.location.state.userData,
                    username: prevState.username,
                    password: prevState.password
                };
            });
        }
    }

    onInputChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        });
    }

    onSignIn() {
        if(this.state.username.length <= 4) {
            return;
        }
        if(this.state.password.length < 8) {
            return;
        }
        this.getUserRequest();
    }

    getUserRequest() {
        const signInInfo = {
            username: this.state.username,
            password: this.state.password
        }
        const history = this.props.history;
        const failuerMessage = 'Cannot process request at this time, please try again later.'
        axios({
            method: 'post',
            timeout: 5000,
            url: 'http://localhost:8080/users/getUser',
            data: JSON.stringify(signInInfo),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(res.data) {
                let userInfo = {
                    signedIn: true,
                    userData: res.data
                }
                history.replace('/', userInfo);
            } else {
                alert('Username and/or password incorrect.');
            }
        }).catch(error => {
            console.error(error);
            alert(failuerMessage);
        })
    }

    render() {
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { this.state } 
                />
                <SignInView 
                state = { this.state }
                onInputChange = { this.onInputChange }
                onSignIn = { this.onSignIn }
                />
            </div>
        );
    }
}

export default SignIn;