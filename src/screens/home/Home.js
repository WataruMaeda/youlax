import React from 'react';

// Components
import { 
  FlatList,
  Image,
  ImageBackground, 
  TouchableOpacity, 
  View, 
  Text 
} from 'react-native';
import { styles } from './style';
import { items } from '../../data/items'
const playImage = require('../../assets/icons/btn_play.png');

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

  // Flat List
  _renderRow = ({item}) => (
    <ImageBackground
      style={styles.row_background_image}
      source={item.image}>
      <TouchableOpacity onPress={()=>this._pressedPlaySound()}>
        <Image source={playImage} style={styles.btn_play}/>
      </TouchableOpacity>
    </ImageBackground>
  );

  _tappedRow(item) {
    console.log(item.title);
  }

  // Actions
  _pressedPlaySound() {
   console.log('pressed play'); 
  }
}