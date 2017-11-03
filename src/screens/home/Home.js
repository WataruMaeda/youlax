import React from 'react';

// Components
import { FlatList, ImageBackground, View, Text } from 'react-native';
import { styles } from './style';
import { items } from '../../data/items'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            horizontal
            pagingEnabled
            data={items}
            renderItem={this._renderRow}
          />
      </View>
    );
  }

  /* Flat List funcs */
  _renderRow = ({item}) => (
    <ImageBackground
      style={styles.row_background_image}
      source={item.image}>
    </ImageBackground>
  );

  _tappedRow(item) {
    console.log(item.title);
  }
}