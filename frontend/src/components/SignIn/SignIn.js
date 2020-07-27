import React from 'react';
import Header from '../Header/Header';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {}
            
        }
        this.onSignIn = this.onSignIn.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState(() => this.props.location.state); 
        } 
    }

    onSignIn() {
        const state = {
            signedIn: true,
            userData: {
                name: 'Shah'
            }
        }
        this.props.history.replace('/', state);
    }

    render() {
        return(
            <div>
                <Header 
                history = {this.props.history}
                state = {this.state}
                />
                <button onClick = {this.onSignIn}>SignIn</button>
            </div>
        );
    }
}

export default SignIn;