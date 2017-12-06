'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header/Header'
import AlbumList from './src/components/AlbumList/AlbumList'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}