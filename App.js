/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/action';
import { store } from './src/store';

// Navigation
import Navigation from './src/components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation/>
      </Provider>
    );
  }
}