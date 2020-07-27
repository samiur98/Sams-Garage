import React from 'react';
import Header from '../Header/Header';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {}
            
        }
    }

    componentDidMount() {
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
                <h3>Search</h3>
            </div>
        );
    }
}

export default Search;