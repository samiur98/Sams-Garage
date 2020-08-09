import React from 'react';
import Header from '../Header/Header';
import SearchResultView from './SearchResultView';

class SearchResult extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            listingArray: [],
            page: 1,
            next: false,
            prev: false
        }
        this.onLinkClick = this.onLinkClick.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
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

    getDisplayArray(listingArray, page) {
        const result = [];
        let i = (page * 5) - 5;

        while(i < (page * 5)) {
            if(i >= listingArray.length) {
                break;
            }
            result.push(listingArray[i]);
            i = i + 1;
        }

        return result;
    }

    onNext() {
        let newPage = this.state.page + 1;
        let newPrev = false;
        let newNext = false;

        if((newPage) <= 0) {
            return;
        }
        if(((newPage - 1) * 5) > this.state.listingArray.length) {
            return;
        }

       if(newPage > 1) {
           newPrev = true;
       }
       if((newPage * 5) < this.state.listingArray.length) {
            newNext = true;
       }
       
        this.setState((prevState) => {
            return {
                signedIn: prevState.signedIn,
                userData: prevState.userData,
                listingArray: prevState.listingArray,
                page: newPage,
                next: newNext,
                prev: newPrev
            }
        });
    }

    onPrev() {
        let newPage = this.state.page - 1;
        let newPrev = false;
        let newNext = false;

        if((newPage) <= 0) {
            return;
        }
        if(((newPage - 1) * 5) > this.state.listingArray.length) {
            return;
        }

       if(newPage > 1) {
           newPrev = true;
       }
       if((newPage * 5) <= this.state.listingArray.length) {
            newNext = true;
       }
       
        this.setState((prevState) => {
            return {
                signedIn: prevState.signedIn,
                userData: prevState.userData,
                listingArray: prevState.listingArray,
                page: newPage,
                next: newNext,
                prev: newPrev
            }
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
        }
        const displayArray = this.getDisplayArray(this.state.listingArray, this.state.page);
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { navState }
                />
                <SearchResultView 
                displayArray = { displayArray }
                deleteMode = { false }
                next = { this.state.next }
                prev = { this.state.prev }
                onNext = { this.onNext }
                onPrev = { this.onPrev }
                onLinkClick = { this.onLinkClick }
                />
            </div>
        );
    }


}

export default SearchResult;