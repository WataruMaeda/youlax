import React from 'react';

// Components
import { 
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity, 
  View, 
  Text,
  Picker,
  Button
} from 'react-native';
import { styles } from './Style';

// Assets
import { items } from '../../models/Item';
const playImage = require('../../assets/icons/btn_play.png');
const menuImage = require('../../assets/icons/btn_menu.png');
const timerImage = require('../../assets/icons/btn_timer.png');
const bgImage = require('../../assets/images/bg_side_menu.png');
const arrowImage = require('../../assets/icons/btn_arrow_1.png');



// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Side Menu
import SideMenu from 'react-native-side-menu';
import SettingScreen from '../setting/SettingScreen';
import MenuScreen from '../menu/MenuScreen';

// Popup Dialog
import PopupDialog, { 
  DialogTitle, 
  DialogButton,
  SlideAnimation
} from 'react-native-popup-dialog';
const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });

// Sound
import { AudioPlayer } from '../../utils/AudioPlayer';

class PlayerScreen extends React.Component {
  constructor() {
    super();
    (this.audio == null) ?
      this.audio = new AudioPlayer() :
      this.audio.release();
    this.state = {
      timer: "30"
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

  // PLAY BTN AND ARROW ICONS
  _renderRow = ({item}) => (
    <ImageBackground
      style={styles.row_background_image}
      source={item.image}>
      <Image source={arrowImage} style={styles.right_arrow}/>
      <Image source={arrowImage} style={styles.left_arrow}/>
      <TouchableOpacity onPress={()=>this.audio.control(item.sound)}>
        <Image source={playImage} style={styles.btn_play}/>
      </TouchableOpacity>
    </ImageBackground>
  );

  _renderHeader() {
    return(
      <View style={styles.containerHeader}>
        {this._renderTimer()}
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
          onPress={()=>this.slideAnimationDialog.show()}>
          <Image source={timerImage} style={styles.btn_header_menu}/>
        </TouchableOpacity>
      </View>
    );
  }

  _renderTimer() {
    return (
      <PopupDialog 
        dialogTitle={<DialogTitle title="Timer Setting" />}
        dialogAnimation={slideAnimation}
        ref={(popupDialog) => { this.slideAnimationDialog = popupDialog; }}>
        <Picker
          selectedValue={this.state.timer}
          onValueChange={(itemValue, itemIndex) => this.setState({timer: itemValue})}>
          <Picker.Item label="5 min" value="5"/>
          <Picker.Item label="10 min" value="10" />
          <Picker.Item label="15 min" value="15" />
          <Picker.Item label="20 min" value="20" />
          <Picker.Item label="30 min" value="30" />
          <Picker.Item label="40 min" value="40" />
          <Picker.Item label="50 min" value="50" />
          <Picker.Item label="1 hour" value="60" />
          <Picker.Item label="2 hour" value="120" />
          <Picker.Item label="3 hour" value="180" />
          <Picker.Item label="4 hour" value="240" />
          <Picker.Item label="5 hour" value="300" />
          <Picker.Item label="6 hour" value="360" />
          <Picker.Item label="7 hour" value="420" />
          <Picker.Item label="8 hour" value="480" />
          <Picker.Item label="9 hour" value="540" />
          <Picker.Item label="10 hour" value="600" />
        </Picker>
    </PopupDialog>
    );
  }

  // Menu
  _pressMenu() {
    this.props.updateMenuState(!this.props.menuState);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);