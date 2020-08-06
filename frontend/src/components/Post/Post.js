import React from 'react';
import Header from '../Header/Header';
import PostView from './PostView';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            listing: {
                id: 'AUIsdhuiashd',
                title: 'Toyota Supra',
                metadata: '1994 Toyota Supra',
                color: 'black',
                seats: 2,
                doors: -1,
                transmission: 'Manual',
                owner: {
                    username: 'Richie45',
                    email: 'richie@gmail.com',
                    phone: '455-890-1920',
                    preferedMethod: 'Call'
                },
                price: '100000'
            },
            make: 'Toyota',
            model: 'Supra',
            year: '1994'
        }
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
                color = { this.state.listing.color }
                seats = { this.state.listing.seats }
                doors = { this.state.listing.doors }
                transmission = { this.state.listing.transmission }
                owner = { this.state.listing.owner }
                price = { this.state.listing.price }
                />
            </div>
        );
    }

}

export default Post;