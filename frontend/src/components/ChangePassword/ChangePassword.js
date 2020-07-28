import React from 'react';
import Header from '../Header/Header';
import ChangePasswordView from './ChangePasswordView.js';

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            oldPassword: '',
            newPassword: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
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

    onChangePassword() {
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { this.state }
                />
                <ChangePasswordView 
                state =  { this.state }
                onInputChange = { this.onInputChange }
                onChangePassword = { this.onChangePassword }
                />
            </div>
        );
    }
}

export default ChangePassword;