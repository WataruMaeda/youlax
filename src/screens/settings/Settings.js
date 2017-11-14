import React from 'react';

// Components
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Assets
import { items } from '../../data/items'
const backButton = require('../../assets/icons/btn_back.png');
const bgImage = require('../../assets/images/bg_side_menu.png');
const profilePlaceholderImage = require('../../assets/icons/img_profile_placeholder.png');

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg_image}
          source={bgImage}>
          {/* Header menu*/}
          <View style={styles.header_container}>
            <TouchableOpacity
            style={styles.btn_left_menu_touchable}
            onPress={()=>this._pressBack()}>
            <Image source={backButton} style={styles.btn_header_menu}/>
            </TouchableOpacity>
            <Text style={styles.lb_title}>Settings</Text>
            <TouchableOpacity
            style={styles.btn_right_menu_touchable}
            onPress={()=>this._pressDone()}>
              <Text style={styles.txt_done}>Done</Text>
            </TouchableOpacity>
          </View>
          {/* Profile settings */}
          <View style={styles.profile_image_container}>
            <View style={styles.profile_image_wrapper}>
              <Image
                style={styles.profile_image}
                source={profilePlaceholderImage}/>
            </View>
              <TouchableOpacity onPress={this._pressedChangeProfile()}>
                <Text style={{
                  fontSize: 14, 
                  color: '#23aadb', 
                  margin: 10}}>
                  Change Profile Photo
                 </Text>
              </TouchableOpacity>
          </View>
          {/* Text input field */}
          <View style={styles.textinput_container}>
            <View style={{flexDirection:'row', height: 50}}>
              <Text style={styles.textinput_label}>Name</Text>
              <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  _pressBack() {
    this.props.updateMenuState(true);
  }

  _pressDone() {
    console.log('pressed Done');
  }

  _pressedChangeProfile() {
    console.log('pressed change profile');
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);