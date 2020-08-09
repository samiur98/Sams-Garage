import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import SearchResultView from '../SearchResult/SearchResultView';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            randomListings: []
        }
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState(() => this.props.location.state); 
        }
        this.randomQuery();
    }

    randomQuery() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/listings/getRandomFive',
            timeout: 5000,
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(!res.data) {
                alert('Could not retrieve data, please try again later');
                return;
            }
            this.setState(prevState => {
                return {
                    signedIn: prevState.signedIn,
                    userData: prevState.userData,
                    randomListings: res.data
                }
            });
        }).catch(error => {
            console.error(error);
            alert('Could not retrieve data, please try again later.');
        });
    }

    onLinkClick(listing) {
        const state = {
            signedIn: this.state.signedIn,
            userData: this.state.userData,
            listing: listing
        }
        this.props.history.push('/post', state);
    }

    render() {
        const navState = {
            signedIn: this.state.signedIn,
            userData: this.state.userData
        };

        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { navState }
                />
                <SearchResultView 
                displayArray = { this.state.randomListings }
                deleteMode = { false }
                next = { false }
                prev = { false }
                onLinkClick = { this.onLinkClick }
                />
            </div>
        );
    }
}

export default Home;