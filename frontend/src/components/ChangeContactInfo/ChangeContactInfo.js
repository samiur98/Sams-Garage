import React from 'react';
import Header from '../Header/Header';

class ChangeContactInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {}
        }
    }

    componentDidMount() {
        console.log(this.props);
        if(this.props.location.state) {
            this.setState(() => this.props.location.state); 
        } 
    }

    render() {
        return(
            <div>
                <Header 
                history = {this.props.history}
                state = {this.state}
                />
                <h3>CCI</h3>
            </div>
        );
    }
}

export default ChangeContactInfo;