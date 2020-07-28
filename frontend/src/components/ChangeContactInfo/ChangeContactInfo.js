import React from 'react';
import Header from '../Header/Header';
import ChangeContactForm from './ChangeContactForm.js'

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
        const a = this.state.email + ' ' + this.state.phoneNumber + ' ' + this.state.preferedMethod;
        alert(a);
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