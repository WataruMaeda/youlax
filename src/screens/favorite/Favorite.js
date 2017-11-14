import React from 'react';

// Components
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// Assets
import { items } from '../../data/items'
const backButton = require('../../assets/icons/btn_back.png');
const bgImage = require('../../assets/images/bg_side_menu.png');
const checkImage = require('../../assets/icons/img-checked.png');

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

class Favorite extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg_image}
          source={bgImage}>
          <View style={styles.header_container}>
            <TouchableOpacity
            style={styles.btn_left_menu_touchable}
            onPress={()=>this._pressBack()}>
            <Image source={backButton}/>
            </TouchableOpacity>
            <Text style={styles.lb_title}>Settings</Text>
            <TouchableOpacity
            style={styles.btn_right_menu_touchable}
            onPress={()=>this._pressDone()}>
              <Text style={styles.txt_done}>Done</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.flatList_contents}
            data={items}
            renderItem={this._renderRow}/>
        </ImageBackground>
      </View>
    );
  }

  _pressedHeader() {
    this.props.updateMenuState(false);
    this.props.updateMenuScreen('SETTINGS');
  }

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

  _pressedSection(item) {
    this.props.updateMenuScreen('PLAYER');
    this.props.updateSectionIndex(item["key"]);
    this.props.updateCurrentSound(item["data"][0].sound);
    this.props.updateMenuState(false);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);