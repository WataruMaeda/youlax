import React from 'react';

// Components
import { View, Text, Image, ImageBackground, SectionList, TouchableOpacity } from 'react-native';
import { styles } from './style';

// Assets
import { items } from '../../models/items'
const bgImage = require('../../assets/images/bg_side_menu.png');
const checkImage = require('../../assets/icons/img-checked.png');

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
    <View style={styles.view_header}>
    {/* TODO: Implement Profile Card*/ }
      <TouchableOpacity onPress={this._pressedHeader.bind(this)}>
        <Text>Heeeey</Text>
      </TouchableOpacity>
    </View>
  );

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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);