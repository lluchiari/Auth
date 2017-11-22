import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {loggedIn: null};

  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyCfYpjgCiH2q8HmG5b6iwz6sRqAbY6UbaU',
      authDomain: 'auth-606da.firebaseapp.com',
      databaseURL: 'https://auth-606da.firebaseio.com',
      projectId: 'auth-606da',
      storageBucket: 'auth-606da.appspot.com',
      messagingSenderId: '546070702290'
    });

    Firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false })
      }
    });

  }

renderContent(){
  switch(this.state.loggedIn){
    case true:
      return(<Button>Log Out</Button>);
    case false:
      return <LoginForm />;
    default:
      return <Spinner />
  }

}

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
