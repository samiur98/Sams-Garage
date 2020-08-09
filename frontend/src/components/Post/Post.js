import React from 'react';
import Header from '../Header/Header';
import PostView from './PostView';
import axios from 'axios';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            listing: {},
            make: '',
            model: '',
            year: '',
            postUser: {
                username: null,
                password: null,
                email: null,
                phone: null,
                preferedMethod: null
            }
        }
        this.userQuery = this.userQuery.bind(this);
    }
    
    componentDidMount() {
        if(this.props.location.state.listing) {
            const metaDataArray = this.props.location.state.listing.metaData.split(' ');
            const year = metaDataArray[0];
            const make = metaDataArray[1];
            const model = metaDataArray[2];
            
            this.setState((prevState) => {
                return {
                    signedIn: this.props.location.state.signedIn,
                    userData: this.props.location.state.userData,
                    listing: this.props.location.state.listing,
                    make: make,
                    model: model,
                    year: year,
                    postUser: prevState.postUser 
                };
            });
            this.userQuery();
        
        } else {
            this.props.history.replace('/', {
                signedIn: false,
                userData: {}
            })
        }
    }

    userQuery() {
        const username = this.props.location.state.listing.username;
        const history = this.props.history;
        const userData = this.props.location.state.userData;
        const signedIn = this.props.location.state.signedIn;
    
        axios({
           method: 'get',
           url: `http://localhost:8080/users/getUserOverview/?username=${username}`,
           timeout: 5000,
        }).then(res => {
            if(!res.data) {
                alert('Post with provided username does not exist');
                history.replace('/', {
                    signedIn: signedIn,
                    userData: userData
                });          
            };

            this.setState(prevState => {
                return {
                    signedIn: prevState.signedIn,
                    userData: prevState.userData,
                    listing: prevState.listing,
                    make: prevState.make,
                    model: prevState.model,
                    year: prevState.year,
                    postUser: res.data
                };
            });
        }).catch(error => {
            console.error(error);
            alert('Could not load data, please try again later');
            history.replace('/', {
                signedIn: signedIn,
                userData: userData
            })
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
                <PostView
                title = { this.state.listing.title }
                make = { this.state.make }
                model = { this.state.model }
                year = { this.state.year }
                mileage = { this.state.listing.mileage }
                color = { this.state.listing.color }
                seats = { this.state.listing.seats }
                doors = { this.state.listing.doors }
                transmission = { this.state.listing.transmission }
                user = { this.state.postUser }
                price = { this.state.listing.price }
                />
            </div>
        );
    }

}

export default Post;