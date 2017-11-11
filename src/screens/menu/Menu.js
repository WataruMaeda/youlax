import React from 'react';

// Components
import { View, Text, ImageBackground, SectionList, TouchableOpacity } from 'react-native';
import { styles } from './style';

// Assets
import { items } from '../../data/items'
const bgImage = require('../../assets/images/bg_side_menu.png');

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
      <Text>Heeeey</Text>
    </View>
  );

  _renderRow = ({item}) => (
    <TouchableOpacity onPress={()=>this._pressedPlaySound()}>
      <ImageBackground
        style={styles.row_background_image}
        source={{uri: item["data"][0].image}}>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);