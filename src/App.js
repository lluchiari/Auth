import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCfYpjgCiH2q8HmG5b6iwz6sRqAbY6UbaU',
      authDomain: 'auth-606da.firebaseapp.com',
      databaseURL: 'https://auth-606da.firebaseio.com',
      projectId: 'auth-606da',
      storageBucket: 'auth-606da.appspot.com',
      messagingSenderId: '546070702290'
    });
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
