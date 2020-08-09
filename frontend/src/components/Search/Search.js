import React from 'react';
import Header from '../Header/Header';
import SearchView from './SearchView';
import axios from 'axios';

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
        this.onSearch = this.onSearch.bind(this);
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

    onSearch() {
        console.log(this.state);
        if(!this.validateFields()) {
            alert('Fields incorrectly formated, please remember to fill all fields, not use spaces in the fields, and to use numeric values in the year filed.');
        } else {
            this.searchQuery();
        } 
    }

    validateFields() {
        if((this.state.make.length <= 0) || (this.state.make.includes(' '))) {
            return false;
        }
        if((this.state.model.length <= 0) || (this.state.model.includes(' '))) {
            return false;
        }
        if((this.state.year.length <= 0) || (this.state.year.includes(' '))) {
            return false;
        }
        if(isNaN(this.state.year)) {
            return false;
        }
        return true;
    }

    searchQuery() {
        const metaData = {
            year: this.state.year,
            make: this.state.make,
            model: this.state.model
        };
        const history = this.props.history;
        const signedIn = this.state.signedIn;
        const userData = this.state.userData;

        axios({
            method: 'post',
            url: `http://localhost:8080/listings/getByMetaData`,
            timeout: 5000,
            data: JSON.stringify(metaData),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            const body = {
                signedIn: signedIn,
                userData: userData,
                listingArray: res.data
            };
            history.push('/searchresult', body);
        }).catch(error => {
            console.error(error);
            alert('Could not perform search, please try again later');
        })
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
                onSearch = { this.onSearch }
                onInputChange = { this.onInputChange }
                />
            </div>
        );
    }
}

export default Search;