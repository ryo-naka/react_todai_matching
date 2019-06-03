import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { TextInput } from '../../../node_modules/react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
  static navigationOptions = ({
    title: '',
    tabBarIcon: <Ionicons name='ios-search' size={25} />,
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>test</Text>
      </View>
    );
  }
}
