import React from 'react';

// Components
import { View, Text, Image, ImageBackground, SectionList, TouchableOpacity } from 'react-native';
import { styles } from './style';

// Assets
import { items } from '../../models/items'
const bgImage = require('../../assets/images/bg_side_menu.png');
const checkImage = require('../../assets/icons/img-checked.png');
const profilePlaceholderImage = require('../../assets/icons/img_profile_placeholder.png');
const settingImage = require('../../assets/icons/img-setting.png');

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg_image}
          source={bgImage}>
          <SectionList
            sections={[{data: items}]}
            renderSectionHeader={this._renderHeader}
            renderItem={this._renderRow}/>
        </ImageBackground>
      </View>
    );
  }

  _renderHeader = () => (
    <TouchableOpacity 
      onPress={this._pressedHeader.bind(this)}
      style={styles.touchable_area}>
        <View style={styles.view_header}>
            <Image source={settingImage} style={styles.icon_setting} />
            <View style={styles.profile_image_wrapper}>
              {/* {this.state.imageUrl ?
                <Image style={styles.profile_image} source={{url: this.state.imageUrl}}/> :
                <Image style={styles.profile_image} source={profilePlaceholderImage}/>
              } */}
                <Image style={styles.profile_image} source={profilePlaceholderImage}/>
            </View>
            <Text style={styles.user_name}>User name</Text>
            <View style={styles.favorite_sound}>
              <Text style={styles.title_fa_sound}>Favorite Sound</Text>
              {/* <Text style={styles.selected_sound}>{this.state.sound}</Text> */}
              <Text style={styles.selected_sound}>fire</Text>
            </View>
        </View>
    </TouchableOpacity>
  );

  _pressedHeader() {
    this.props.updateMenuState(false);
    this.props.updateMenuScreen('SETTINGS');
  }

  _renderRow = ({item}) => (
    <TouchableOpacity onPress={()=>this._pressedSection(item)}>
      <ImageBackground
        style={styles.row_background_image}
        source={item["image"]}>
        <Text style={styles.lb_title}>{item["title"]}</Text>
        {this.props.sectionIndex == item["key"] && <Image source={checkImage} style={styles.check_image}/>}
      </ImageBackground>
    </TouchableOpacity>
  );

  _pressedSection(item) {
    this.props.updateMenuScreen('PLAYER');
    this.props.updateSectionIndex(item["key"]);
    this.props.updateCurrentSound(item["data"][0].sound);
    this.props.updateMenuState(false);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);