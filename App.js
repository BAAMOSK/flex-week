import React, { Component } from 'react';
import { Text, View } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import CONFIG from './config';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(CONFIG);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
