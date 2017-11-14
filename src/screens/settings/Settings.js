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
const allowImage = require('../../assets/icons/btn_allow.png');

class Settings extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
                <Text style={styles.txt_change_profile}>Change Profile Photo</Text>
              </TouchableOpacity>
          </View>
          {/* Text input field */}
          <View style={styles.textinput_container}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textinput_label}>Name</Text>
              <TextInput
                style={styles.textInput_name}
                color='white'
                placeholder="Your Name"
                placeholderTextColor='#8c8c8c'
                onChangeText={(text) => this.setState({text})}/>
            </View>
            <View style={[styles.view_line, {marginBottom: 12}]}/>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textinput_label}>Favorite{"\n"}Sound</Text>
              <TouchableOpacity 
                style={{flex: 1, marginRight: 16, justifyContent: 'center'}}
                onPress={() => navigate('Favorite')}>
                <Text style={{color: '#8c8c8c', fontSize: 14 }}>Fire</Text>
                <Image style={{position: 'absolute', right: 10}} source={allowImage}/>
              </TouchableOpacity>
            </View>
            <View style={styles.view_line}/>
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