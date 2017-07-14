import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FormLabel, FormInput, FormValidationMessage, Header } from 'react-native-elements';
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
    this.props.loginUser({ email, password });
  }

  showSpinner() {
    if (this.props.loading) {
      return <ActivityIndicator size={ "large", 100 } />
    }
    return (
      <Button style={{ margin: 300 }} title="Submit" onPress={this.onSubmit.bind(this)} />
    );
  }

  render() {
    console.log('This is the state password:', this.props.password, this.props.loading );
    return(
      <View>
        {/*<Header
          centerComponent={{ text: 'FLEX-WEEK' }}
          backgroundColor={'#ddd'}
        />*/}

        <View style={{ paddingTop: 100, alignSelf: 'center' }} >
          <FormLabel>Email</FormLabel>
          {/* placeholder="you@gmail.com"*/}
          <FormInput onChangeText={this.onEmailChange.bind(this)} />

          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.onPasswordChange.bind(this)} ref={this.props.password}/>
          {/* <Text securityTextEntry > </Text> */}
          {/*<Submit onPress={this.onSubmit.bind(this)} />*/}
          {this.showSpinner()}
          <Text style={styles.errorStyle}>{this.props.error}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'red'
  },
  loadingStyle: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

//Redux then React
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);