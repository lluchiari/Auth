import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };
  _onButtonPress(){
    const { email, password } = this.state;

    this.setState({error: '', loading: true})

    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this._onLoginSuccess.bind(this))
      .catch(() => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this._onLoginSuccess.bind(this))
          .catch(this._onLoginFail.bind(this))
      });
  }

_onLoginSuccess() {
  this.setState({
    email: '',
    password: '',
    error: '',
    loading: false
  });
}

_onLoginFail() {
  this.setState({
    error: "Authentication Failed.",
    loading: false,
    loading: false
  });
}

_renderButton() {
  if(this.state.loading){
    return <Spinner size="small" />;
  }
  return(
    <Button onPress={this._onButtonPress.bind(this)}>
      Login
    </Button>
  );
}

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@mail.com"
            label="Email:"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password:"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            isPassword
            />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this._renderButton()}
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
