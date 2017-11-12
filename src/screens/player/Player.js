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
import Settings from '../settings/Settings';

// Assets
import { items } from '../../data/items'
const playImage = require('../../assets/icons/btn_play.png');
const menuImage = require('../../assets/icons/btn_menu.png');
const timerImage = require('../../assets/icons/btn_timer.png');

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Side Menu
import SideMenu from 'react-native-side-menu';
import Menu from '../menu/Menu';

class Player extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          data={items[this.props.sectionIndex]["data"]}
          renderItem={this._renderRow}/>
        <TouchableOpacity
          style={styles.btn_left_menu_touchable}
          onPress={()=>this._pressMenu()}>
          <Image source={menuImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
        <Text 
          style={styles.lb_title}
          numberOfLines={2}>Title of the Sound</Text>
        <TouchableOpacity
          style={styles.btn_right_menu_touchable}
          onPress={()=>this._pressTimer()}>
          <Image source={timerImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
      </View>
    );
  }

  // Flat List
  _renderRow = ({item}) => (
    <ImageBackground
      style={styles.row_background_image}
      source={{uri: item.image}}>
      <TouchableOpacity onPress={()=>this._pressedPlaySound()}>
        <Image source={playImage} style={styles.btn_play}/>
      </TouchableOpacity>
    </ImageBackground>
  );

  _pressMenu() {
    console.log('pressed menu');
    this.props.updateMenuState(!this.props.menuState);
  }

  // Timer
  _pressTimer() { 
    console.log('pressed timer');
  }

  // Sound
  _pressedPlaySound() {
   console.log('pressed play');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);