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
import PlayerHeader from './PlayerHeader';
import Settings from '../settings/Settings';

// Assets
import { items } from '../../models/items';
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
import { AudioUtil } from '../../utils/AudioUtil';

class Player extends React.Component {
  constructor() {
    super();
    this.audio = new AudioUtil();
  }

  componentDidMount() {
    var sound = items[this.props.sectionIndex]["data"][0]["sound"];
    console.log('[item]' + items[0]["data"][0]["sound"]);
    this.audio.control(sound);
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
      source={item.image}>
      <TouchableOpacity onPress={()=>this._pressedPlaySound(item)}>
        <Image source={playImage} style={styles.btn_play}/>
      </TouchableOpacity>
    </ImageBackground>
  );

  // Sound
  _pressedPlaySound(item) {
    this.audio.control(item.sound);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);