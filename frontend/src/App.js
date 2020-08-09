import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import MyPosts from './components/MyPosts/MyPosts';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ChangeContactInfo from './components/ChangeContactInfo/ChangeContactInfo';
import AddPost from './components/AddPost/AddPost';
import Post from './components/Post/Post';
import SearchResult from './components/SearchResult/SearchResult';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <div>
        <Switch>
          <Route component = { Home } exact path = '/'/>
          <Route component = { About } exact path = '/about' />
          <Route component = { Search } exact path = '/search' />
          <Route component = { SignUp } exact path = '/signup' />
          <Route component = { SignIn } exact path = '/signin' />
          <Route component = { MyPosts } exact path = '/myposts' />
          <Route component = { ChangePassword } exact path = '/changepassword'/>
          <Route component = { ChangeContactInfo } exact path = '/changecontactinfo' />
          <Route component = { AddPost } exact path = '/addpost' />
          <Route component = { Post } exact path = '/post' />
          <Route component = { SearchResult } exact path = '/searchresult' />
        </Switch>
      </div>
    );
  }
}

export default App;
