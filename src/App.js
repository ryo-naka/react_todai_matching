/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './components/HomeScreen'
import MessagesList from './components/MessagesListScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const BottomNavigator = createMaterialBottomTabNavigator({
  Home: { screen: Home },
  MessagesList: { screen: MessagesList },
}, {
  initialRouteName: 'MessagesList',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
})

const Navigator = createAppContainer(
  createStackNavigator({
    BottomNavigator: {
      screen: BottomNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    }
  })
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
