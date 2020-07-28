import React from 'react';
import Header from '../Header/Header';
import SignInView from './SignInView';

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
        console.log(this.state);
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