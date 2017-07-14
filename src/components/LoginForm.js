import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Submit from './Submit';

class LoginForm extends Component {
  render() {
    return(
      <View>
        <FormLabel>Email</FormLabel>
        {/* placeholder="you@gmail.com"*/}
        <FormInput ref='forminput' textInputRef='email' />

        <FormLabel>Password</FormLabel>
        <FormInput ref='forminput' textInputRef='password' />
        {/* <Text securityTextEntry > </Text> */}
        <Submit />
      </View>
    );
  }
}

export default LoginForm;