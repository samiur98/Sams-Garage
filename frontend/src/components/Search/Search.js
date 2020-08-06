import React from 'react';
import Header from '../Header/Header';
import SearchView from './SearchView';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            make: '',
            model: '',
            year: ''
        }
        this.onInputChange  = this.onInputChange.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
           this.setState(prevState => {
               return {
                   signedIn: this.props.location.state.signedIn,
                   userData: this.props.location.state.userData,
                   make: prevState.make,
                   model: prevState.model,
                   year: prevState.year
               }
           })
        } 
    }

    onInputChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        });
    }

    render() {
        const navState = {
            signedIn: this.state.signedIn,
            userData: this.state.userData
        }
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { navState } 
                />
                <SearchView 
                
                />
            </div>
        );
    }
}

export default Search;