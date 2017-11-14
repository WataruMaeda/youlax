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
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/home/Home';
import Settings from './src/screens/settings/Settings';
import Favorite from './src/screens/favorite/Favorite';

const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: {
      header: null
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation/>
      </Provider>
    );
  }
}