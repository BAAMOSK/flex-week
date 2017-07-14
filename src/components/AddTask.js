import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Slider, Divider, Buttons, CheckBox, Avatar, FormLabel, FormInput, Button } from 'react-native-elements';

class AddTask extends Component {
  render() {
    const dogWalker = 'data:image/png;base64,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';
    return (
      <ScrollView style={{ marginTop: 65, flex: 1 }}>

        <FormLabel>Task</FormLabel>
        <FormInput></FormInput>

        <FormLabel>Description</FormLabel>
        <FormInput></FormInput>

        <FormLabel>Price</FormLabel>
        <View >
          <Slider style={{ marginLeft: 19, width: '90%' }} />
        </View>
        <FormInput>$</FormInput>

        <FormLabel>Image</FormLabel>
        <Image style={{ width: 200, height: 200, justifyContent: 'center', marginLeft: 25, marginBottom: 10 }}
          source={{ uri: dogWalker }}
        />

        <Button
          style={{ marginTop: 10 }}
          title='Post'
          raised
          backgroundColor="orange"
        />

      </ScrollView>
    );
  }
}

export default AddTask;