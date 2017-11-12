import React from 'react';

// Components
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Assets
import { items } from '../../data/items'
const bgImage = require('../../assets/images/bg_side_menu.png');
const backButton = require('../../assets/icons/btn_back.png');

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg_image}
          source={bgImage}>
          <TouchableOpacity
          style={styles.btn_left_menu_touchable}
          onPress={()=>this._pressBack()}>
          <Image source={backButton} style={styles.btn_header_menu}/>
          </TouchableOpacity>
          <Text 
            style={styles.lb_title}
            numberOfLines={2}>Title of the Sound</Text>
          <TouchableOpacity
            style={styles.btn_right_menu_touchable}
            onPress={()=>this._pressTimer()}>
            {/* <Image source={timerImage} style={styles.btn_header_menu}/> */}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

  _pressBack() {
    this.props.updateMenuState(true);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);