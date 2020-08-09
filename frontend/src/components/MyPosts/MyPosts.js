import React from 'react';
import Header from '../Header/Header';
import SearchResultView from '../SearchResult/SearchResultView';
import axios from 'axios';

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            userListings: [],
            page: 1,
            next: false,
            prev: false
        }
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState(() => this.props.location.state); 
        }
        this.getUserListingsQuery(this.props.location.state.userData.username);
    }

    getUserListingsQuery(username) {
        axios({
            method: 'get',
            timeout: 5000,
            url: `http://localhost:8080/listings/getByUsername/?username=${username}`,
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            this.updateInitialState(res.data);
        }).catch(error => {
            alert('Could not retrieve data, please try again later.');
            console.error(error);
        })
    }

    updateInitialState(data) {
        let next = false;
        if(data.length === 0) {
            alert('Search does not match any result');
        }
        if(data.length > 5) {
            next = true;
        }

        this.setState((prevState) => {
            return {
                signedIn: prevState.signedIn,
                userData: prevState.userData,
                userListings: data,
                next: next,
                page: prevState.page,
                prev: prevState.prev
            };
        });
    }

    getDisplayArray(userListings, page) {
        const result = [];
        let i = (page * 5) - 5;

        while(i < (page * 5)) {
            if(i >= userListings.length) {
                break;
            }
            result.push(userListings[i]);
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
        if(((newPage - 1) * 5) > this.state.userListings.length) {
            return;
        }

       if(newPage > 1) {
           newPrev = true;
       }
       if((newPage * 5) < this.state.userListings.length) {
            newNext = true;
       }
       
        this.setState((prevState) => {
            return {
                signedIn: prevState.signedIn,
                userData: prevState.userData,
                userListings: prevState.userListings,
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
        if(((newPage - 1) * 5) > this.state.userListings.length) {
            return;
        }

       if(newPage > 1) {
           newPrev = true;
       }
       if((newPage * 5) <= this.state.userListings.length) {
            newNext = true;
       }
       
        this.setState((prevState) => {
            return {
                signedIn: prevState.signedIn,
                userData: prevState.userData,
                userListings: prevState.userListings,
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

    onDelete(listing) {
        const id = listing.id;
        axios({
            method: 'delete',
            timeout: 5000,
            url: `http://localhost:8080/listings/deleteListing/?id=${id}`,
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).then(res => {
            if(res.data === 201) {
                alert('Post successfully deleted');
                this.removePost(id);
            }
        }).catch(error => {
            console.error(error);
            alert('Post could not be deleted, please try again later');
        })
    }

    removePost(id) {
        const newUserListings = [];
        for(let i = 0; i < this.state.userListings.length; i++) {
            if(this.state.userListings[i].id !== id) {
                newUserListings.push(this.state.userListings[i]);
            }
        }

        this.setState((prevState) => {
            return {
                signedIn: prevState.signedIn,
                userData: prevState.userData,
                userListings: newUserListings,
                page: 1,
                next: prevState.next,
                prev: prevState.prev
            };
        });
    }

    render() {
        const navState = {
            signedIn: this.state.signedIn,
            userData: this.state.userData
        }
        const displayArray = this.getDisplayArray(this.state.userListings, this.state.page)
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { navState }
                />
                
                <SearchResultView 
                displayArray = { displayArray }
                deleteMode = { true }
                next = { this.state.next }
                prev = { this.state.prev }
                onNext = { this.onNext }
                onPrev = { this.onPrev }
                onLinkClick = { this.onLinkClick }
                onDelete = { this.onDelete }
                />
                
            </div>
        );
    }
}

export default MyPosts;