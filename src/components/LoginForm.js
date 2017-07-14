import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Submit from './Submit';

class LoginForm extends Component {
  onEmailChange(text) {
    //redux function takes React-text
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onSubmit() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password});
  }

  render() {
    console.log(this.props.password);
    return(
      <View>
        <FormLabel>Email</FormLabel>
        {/* placeholder="you@gmail.com"*/}
        <FormInput onChangeText={this.onEmailChange.bind(this)} />

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={this.onPasswordChange.bind(this)} />
        {/* <Text securityTextEntry > </Text> */}
        <Button title="Submit" onPress={this.onSubmit.bind(this)}>Submit</Button>
        {/*<Submit onPress={this.onSubmit.bind(this)} />*/}
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;
  return {
    email,
    password
  };
};

//Redux then React
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);