import React from 'react';

// Components
import { 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  TouchableOpacity, 
  TextInput, 
  FlatList,
  Alert
} from 'react-native';
import { styles } from './Styles';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Image Picker
import ImagePicker from 'react-native-image-crop-picker';

// User Account
import { UserAccount } from '../../models/UserAccount';

// Assets
import { items } from '../../models/Item';
const backButton = require('../../assets/icons/btn_back.png');
const bgImage = require('../../assets/images/bg_side_menu.png');
const profilePlaceholderImage = require('../../assets/icons/img_profile_placeholder.png');
const allowImage = require('../../assets/icons/btn_allow.png');
const checkImage = require('../../assets/icons/img-checked.png');

class SettingScreen extends React.Component {
  constructor() {
    super();
    this.user = new UserAccount('', '', '');
    this.state = {
      name: this.user.name,
      sound: this.user.sound,
      imageUrl: this.user.imageUrl
    }
  }

  componentDidMount() {
    this.user._getFromStorage((success, value) => {
      if (success == true) {
        console.log(value);
        this.state.name = value.name;
        this.state.sound = value.sound;
        this.state.imageUrl = value.imageUrl;
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg_image}
          source={bgImage}>
          {this._renderHeader()}
          {/* Profile settings */}
          {this._renderProfileImage()}
          {/* Text input field */}
          {this._renderProfileInfo()}
          {/* FlatList */}
          {this.props.favoriteToggleState == true && <FlatList data={items} renderItem={this._renderRow}/>}
        </ImageBackground>
      </View>
    );
  }

  _renderHeader() {
    return(
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
    );
  }

  _renderProfileImage() {
    return(
      <View style={styles.profile_image_container}>
        <View style={styles.profile_image_wrapper}>
          {this.state.imageUrl ?
            <Image style={styles.profile_image} source={{url: this.state.imageUrl}}/> :
            <Image style={styles.profile_image} source={profilePlaceholderImage}/>
          }
        </View>
          <TouchableOpacity onPress={this._pressedChangeProfile.bind(this)}>
            <Text style={styles.txt_change_profile}>Change Profile Photo</Text>
          </TouchableOpacity>
      </View>
    );
  }

  _renderProfileInfo() {
    return(
      <View style={styles.textinput_container}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.textinput_label}>Name</Text>
          <TextInput
            style={styles.textInput_name}
            color='white'
            placeholder="Your Name"
            placeholderTextColor='#8c8c8c'
            title={this.state.name}
            onChangeText={this._changedName}/>
        </View>
        <View style={[styles.view_line, {marginBottom: 12}]}/>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.textinput_label}>Favorite{"\n"}Sound</Text>
          <TouchableOpacity 
            style={{flex: 1, marginRight: 16, justifyContent: 'center'}}
            onPress={() => this._pressedFavoriteSound()}>
            <Text style={{color: '#8c8c8c', fontSize: 14 }}>{this.state.sound}</Text>
            <Image style={{position: 'absolute', right: 10}} source={allowImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view_line}/>
      </View>
    );
  }

  // FlatList
  _renderRow = ({item}) => (
    <TouchableOpacity onPress={()=>this._pressedSection(item)}>
      <ImageBackground
        style={styles.row_background_image}
        source={item["data"][0].image}>
        <Text style={styles.lb_title}>{item["title"]}</Text>
        {this.props.sectionIndex == item["key"] && <Image source={checkImage} style={styles.check_image}/>}
      </ImageBackground>
    </TouchableOpacity>
  );

  // Actions
  _pressedSection(item) {
    let sound = item["data"][0].title;
    this.user.sound = sound;
    this.setState({sound: this.user.sound});
  }

  _pressBack() {
    this.props.updateMenuState(true);
  }

  _changedName = (name) => {
    this.user.name = name;
    this.setState({name: this.user.name});
  }

  _pressDone() {
    this.props.updateFavoriteToggleState(false);

    // Update user data
    this.user._setToStorage((success) => {
      (success == true) ?
        Alert.alert('Saved') : Alert.alert('Failed');
    })
  }

  _pressedChangeProfile() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      this.setState({imageUrl: image.path});
    });
  }
  
  _pressedFavoriteSound() {
    console.log("_pressedFavoriteSound");
    this.props.updateFavoriteToggleState(!this.props.favoriteToggleState);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);