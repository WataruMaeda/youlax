import React from 'react';

// Components
import { 
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity, 
  View, 
  Text,
  Picker
} from 'react-native';
import { styles } from './Style';

// Assets
import { items } from '../../models/Item';
const playImage = require('../../assets/icons/btn_play.png');
const menuImage = require('../../assets/icons/btn_menu.png');
const timerImage = require('../../assets/icons/btn_timer.png');
const bgImage = require('../../assets/images/bg_side_menu.png');

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Side Menu
import SideMenu from 'react-native-side-menu';
import SettingScreen from '../setting/SettingScreen';
import MenuScreen from '../menu/MenuScreen';

// Sound
import { AudioPlayer } from '../../utils/AudioPlayer';

class PlayerScreen extends React.Component {
  constructor() {
    super();
    if (this.audio == null) {
      this.audio = new AudioPlayer();
    } 
  }

  componentDidMount() {
    var sound = items[this.props.sectionIndex]["data"][0]["sound"];
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
        {this._renderHeader()}
      </View>
    );
  }

  _renderRow = ({item}) => (
    <ImageBackground
      style={styles.row_background_image}
      source={item.image}>
      <TouchableOpacity onPress={()=>this.audio.control(item.sound)}>
        <Image source={playImage} style={styles.btn_play}/>
      </TouchableOpacity>
    </ImageBackground>
  );

  _renderHeader() {
    return(
      <View style={styles.containerHeader}>
        {this.props.pickerState == true && this._renderTimer()}
        <TouchableOpacity
          style={styles.btn_left_menu_touchable}
          onPress={()=>this._pressMenu()}>
          <Image source={menuImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
        <Text
          style={styles.lb_title}
          numberOfLines={2}>{items[this.props.sectionIndex]["title"]}</Text>
        <TouchableOpacity
          style={styles.btn_right_menu_touchable}
          onPress={()=>this._pressTimer()}>
          <Image source={timerImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
      </View>
    );
  }

  _renderTimer() {
    return (
      <Picker
        selectedValue='java'
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        <Picker.Item label="Java" value="java"/>
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }

  // Menu
  _pressMenu() {
    this.props.updateMenuState(!this.props.menuState);
  }

  // Timer
  _pressTimer() {
    this.props.updatePickerState(!this.props.pickerState);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);