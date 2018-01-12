/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/store';

// Firebase Database
import firebase from "react-native-firebase"

const config = {
  apiKey: "AIzaSyB_wEQaao45XMk405B-CZCdfvySf05iqhk",
  authDomain: "youlax-31411.firebaseapp.com",
  databaseURL: "https://youlax-31411.firebaseio.com/",
  projectId: "youlax-31411",
  storageBucket: "",
};
firebase.initializeApp(config);

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