/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/store';

// Component
import HomeScreen from './src/screens/home/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <HomeScreen/>
      </Provider>
    );
  }
}