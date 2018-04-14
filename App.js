import React, { Component } from 'react';
import { View } from 'react-native';

import MainNavigation from './src/navigation/MainNavigation';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MainNavigation />
      </View>
    );
  }
}
