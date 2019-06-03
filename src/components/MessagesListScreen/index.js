import React, { Component } from 'react';
import { Platform, View, FlatList } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListItem } from "react-native-elements";

export default class MessagesListScreen extends Component {
  static navigationOptions = ({
    title: '',
    tabBarIcon: <Ionicons name='ios-mail' size={25} />,
    headerStyle: {
      backgroundColor: 'deepskyblue',
      marginTop: (Platform.OS === 'android' ? 24 : 0)
    },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
    headerTitle: 'Messages',
    headerBackTitle: 'Home'
  });

  renderItem = ({ item }) => (
    <ListItem
      title={item.key}
      leftAvatar={{ source: require('../../assets/kano_192x192.png') }}
      badge={{ value: 3 }}
    />
  )
  render() {
    return (
      <View>
        <FlatList
          data={[{ key: 'kano'}, { key: 'kano2' }]}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
