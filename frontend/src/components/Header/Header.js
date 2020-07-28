import React from 'react';
import HeaderView from './HeaderView';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onSwitch = this.onSwitch.bind(this);
        this.onSignOut = this.onSignOut.bind(this);
    }

    onSwitch(path) {
        const state = {
            signedIn: this.props.state.signedIn,
            userData: this.props.state.userData
        }
        this.props.history.replace(path, state);
    }

    onSignOut() {
        const state = {
            signedIn: false,
            userData: {}
        }
        this.props.history.replace('/signin', state);
    }

    render() {
        return(
        <HeaderView 
        onSwitch = {this.onSwitch}
        onSignOut = {this.onSignOut}
        signedIn = {this.props.state.signedIn}
        userData = {this.props.state.userData}
        />
        ); 
    }
}

export default Header;