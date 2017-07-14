import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const Submit = () => {
    return (
      <View style={ styles.buttonStyle }>
        <Button
          title="Login"
          raised
          icon={{ name: 'vpn-key' }}
          backgroundColor="green"
        />
        <Button
          title="Signup"
          raised
          icon={{ name: "recent-actors" }}
          backgroundColor="blue"
        />
      </View>
    );
  }

const styles = {
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  }
}

export default Submit;