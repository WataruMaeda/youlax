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
import PlayerHeader from './PlayerHeader';

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

// Sound
const Sound = require('react-native-sound');

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      audioState: 'loading'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          data={items[this.props.sectionIndex]["data"]}
          renderItem={this._renderRow}/>
        <PlayerHeader/>
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

  // Sound
  _pressedPlaySound() {
   console.log('pressed play');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);