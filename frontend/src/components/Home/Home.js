import React from 'react';
import Header from '../Header/Header';
import {oneElement, fiveElements, tenElements} from '../fakeData';
import SearchResultView from '../SearchResult/SearchResultView';

class Home extends React.Component {
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
        console.log(oneElement);
        console.log(fiveElements);
        console.log(tenElements);
    }

    render() {
        return(
            <div>
                <Header 
                history = { this.props.history }
                state = { this.state }
                />
                <SearchResultView 
                displayArray = {fiveElements}
                deleteMode = { true }
                />
            </div>
        );
    }
}

export default Home;