import React from 'react';

// Components
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Image Picker
import ImagePicker from 'react-native-image-crop-picker';

// Assets
import { items } from '../../data/items'
const backButton = require('../../assets/icons/btn_back.png');
const bgImage = require('../../assets/images/bg_side_menu.png');
const profilePlaceholderImage = require('../../assets/icons/img_profile_placeholder.png');
const allowImage = require('../../assets/icons/btn_allow.png');
const checkImage = require('../../assets/icons/img-checked.png');

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      profile_image_path: ''
    }
  }

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
              {this.state.profile_image_path ?
                <Image style={styles.profile_image} source={{url: this.state.profile_image_path}}/> :
                <Image style={styles.profile_image} source={profilePlaceholderImage}/>
              }
            </View>
              <TouchableOpacity onPress={this._pressedChangeProfile.bind(this)}>
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
                onPress={() => this._pressedFavoriteSound()}>
                <Text style={{color: '#8c8c8c', fontSize: 14 }}>Fire</Text>
                <Image style={{position: 'absolute', right: 10}} source={allowImage}/>
              </TouchableOpacity>
            </View>
            <View style={styles.view_line}/>
          </View>
          {/* FlatList */}
          {this.props.favoriteToggleState == true && <FlatList data={items} renderItem={this._renderRow}/>}
        </ImageBackground>
      </View>
    );
  }

  // FlatList
  _renderRow = ({item}) => (
    <TouchableOpacity onPress={()=>this._pressedSection(item)}>
      <ImageBackground
        style={styles.row_background_image}
        source={{uri: item["data"][0].image}}>
        <Text style={styles.lb_title}>{item["title"]}</Text>
        {this.props.sectionIndex == item["key"] && <Image source={checkImage} style={styles.check_image}/>}
      </ImageBackground>
    </TouchableOpacity>
  );

  // Actions
  _pressedSection(item) {
    this.props.updateMenuScreen('PLAYER');
    this.props.updateSectionIndex(item["key"]);
    this.props.updateCurrentSound(item["data"][0].sound);
  }

  _pressBack() {
    this.props.updateMenuState(true);
  }

  _pressDone() {
    this.props.updateFavoriteToggleState(false);
    console.log('pressed Done');
  }

  _pressedChangeProfile() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      console.log('New Profile Image Path is..' + image.path);
      this.setState({profile_image_path: image.path});
    });
  }

  _pressedFavoriteSound() {
    this.props.updateFavoriteToggleState(!this.props.favoriteToggleState);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);