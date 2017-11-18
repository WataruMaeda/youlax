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
  Alert,
  AsyncStorage
} from 'react-native';
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

// Key
const USER_DATA_KEY = '@USER_DATA_KEY';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      user_data:{
        use_name: '',
        favorite_sound: 'Fire',
        profile_image_path: ''
      }
    }
  }

  componentDidMount() {
    // Get user data
    this._getItemFromStorage(USER_DATA_KEY, (userData) => {
      if (userData != null) {
        this.setState({user_data: JSON.parse(userData)});
      }
    });
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
                title={this.state.user_name}
                onChangeText={(text) => this.setState({text})}/>
            </View>
            <View style={[styles.view_line, {marginBottom: 12}]}/>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textinput_label}>Favorite{"\n"}Sound</Text>
              <TouchableOpacity 
                style={{flex: 1, marginRight: 16, justifyContent: 'center'}}
                onPress={() => this._pressedFavoriteSound()}>
                <Text style={{color: '#8c8c8c', fontSize: 14 }}>{this.state.user_data['favorite_sound']}</Text>
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
    var fav_sound = item["data"][0].title;
  }

  _pressBack() {
    this.props.updateMenuState(true);
  }

  _pressDone() {
    // Close section menu
    this.props.updateFavoriteToggleState(false);

    // Update user data
    var jsonStr = JSON.stringify(this.state.user_data);
    this._setItemToStorage(USER_DATA_KEY, jsonStr, (success) => {
      (success == true) ? Alert.alert('Profile Updated') : Alert.alert('Failed');
    });
  }

  _pressedChangeProfile() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      this.setState({profile_image_path: image.path});
    });
  }

  _pressedFavoriteSound() {
    this.props.updateFavoriteToggleState(!this.props.favoriteToggleState);
  }

  // AsyncStorage getter setter

  _getItemFromStorage(key, callback = (result) => {}) {
    AsyncStorage.getItem(key).then((value, error) => {
      (error == null && value != null) ? callback(value) : callback(null);
    });
  }

  _setItemToStorage(key, value, callback = (success) => {}) {
    AsyncStorage.setItem(key, value, (error) => {
      (error == null) ? callback(true) : callback(false);
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);