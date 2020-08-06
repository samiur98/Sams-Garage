import React from 'react';
import Header from '../Header/Header';

class SearchResult extends React {

    constructor(props){
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            listingArray: [],
            page: 0,
            next: false,
            prev: false
        }
    }

    componentDidMount() {
        if(this.props.location.state) {
            const listingArray = this.props.location.state.listingArray;
            let next = false;
            if(listingArray.length > 5) {
                next = true;
            }
            this.setState(prevState => {
                return {
                    signedIn: this.props.location.state.signedIn,
                    userData: this.props.location.state.userData,
                    listingArray: listingArray,
                    page: 1,
                    next: next,
                    prev: prevState.prev
                };
            });
        }
    }

    render() {
        navState = {
            signedIn: this.state.signedIn,
            userData: this.state.userData
        }
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { navState }
                />
            </div>
        );
    }


}

export default SearchResult;