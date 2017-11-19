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
const Sound = require('react-native-sound');

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      audioState: 'loading'
    }
  }

  componentDidMount() {
    Sound.setCategory('Playback');
    this._prepareToPlay();
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
      <TouchableOpacity onPress={()=>this._pressedPlaySound(item)}>
        <Image source={playImage} style={styles.btn_play}/>
      </TouchableOpacity>
    </ImageBackground>
  );

  // Sound
  _pressedPlaySound(item) {
    if (this.props.currentSound != item.sound) {
      this.props.updateCurrentSound(item.sound);
      this._release();
      this._prepareToPlay();
      return;
    }
    switch(this.state.audioState) {
      case 'loaded': { this._play(); break; }
      case 'paused': { this._play(); break;  }
      case 'playing': { this._pause(); break; }
      case 'failed': { Alert.alert('Failed to load sound'); break; }
      default: { break; }
    }
  }

  _prepareToPlay() {
    this.setState({audioState: 'loading'});
    this.sound = new Sound(this.props.currentSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
          this.setState({audioState: 'failed'});
          return;
      }
      this.setState({audioState: 'loaded'});
      this.sound.setNumberOfLoops(-1);
      this._play();
    });
  }

  _play() {
    this.setState({audioState: 'playing'});
    this.sound.play();
  }

  _pause() {
    this.setState({audioState: 'paused'});
    this.sound.pause();
  }

  _release() {
    this.sound.stop();
    this.sound.release();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);