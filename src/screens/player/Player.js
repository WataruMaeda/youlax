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

  componentDidMount() {
    Sound.setCategory('Playback');
    this.sound = new Sound('test.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            this.setState({audioState: 'failed'});
            return;
        }
        this.setState({audioState: 'loaded'});
    });
  }

  componentWillUnmount() {
    this.sound.stop();
    this.sound.release();
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
    switch(this.state.audioState) {
      case 'loaded': { this._play(); break; }
      case 'playing': { this._pause(); break; }
      case 'paused': { this._play(); break;  }
      case 'finished': { this.setState({audioState: 'loaded'}); break; }
      case 'failed': { Alert.alert('Failed to load sound'); break; }
      default: break;
    }
  }

  _play() {
    this.setState({audioState: 'playing'});
    this.sound.play((success) => {       
        if (success) {
            this.setState({audioState: 'finished'});
            this._tappedPlay();
        }
      });
  }

  _pause() {
    this.setState({audioState: 'paused'});
    this.sound.pause();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);