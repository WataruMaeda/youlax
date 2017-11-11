import React from 'react';

// Components
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './style';

// Assets
const bgImage = require('../../assets/images/bg_side_menu.png');

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg_image}
          source={bgImage}>
          <Text>menu</Text>
        </ImageBackground>
      </View>
    );
  }
}