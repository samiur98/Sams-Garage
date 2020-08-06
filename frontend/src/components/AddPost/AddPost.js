import React from 'react';
import Header from '../Header/Header';
import AddPostView from './AddPostView';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            userData: {},
            title: '',
            make: '',
            model: '',
            year: '',
            color: '',
            seats: -1,
            doors: -1,
            transmission: '',
            price: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        });
        console.log(this.state);
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
                <AddPostView 
                onInputChange = { this.onInputChange }
                />
            </div>
        );
    }
}

export default AddPost;