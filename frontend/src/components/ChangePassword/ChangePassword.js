import React from 'react';
import Header from '../Header/Header';
import ChangePasswordView from './ChangePasswordView.js';
import axios from 'axios';

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
        if(this.state.oldPassword < 8) {
            return;
        }
        if(this.state.newPassword < 8) {
            return;
        }
        this.updatePasswordRequest();
    }

    updatePasswordRequest() {
        const passwordInfo = {
            username: this.state.userData.username,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword
        }
        const failuerMessage = 'Password could not be updated, please try again later';

        axios({
            method: 'post',
            timeout: 5000,
            url: 'http://localhost:8080/users/updatePassword',
            data: JSON.stringify(passwordInfo),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(res.data === 200) {
                alert('Password successfully updated!');
            }
            if(res.data === 404) {
                alert(failuerMessage);
            }
            if(res.data === 400) {
                alert('Old Password incorrect!')
            }
        }).catch(error => {
            console.error(error);
            alert(failuerMessage);
        });
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