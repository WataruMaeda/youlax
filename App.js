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
import Home from './src/screens/home/Home';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Home/>
      </Provider>
    );
  }
}