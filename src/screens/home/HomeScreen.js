import React from 'react';

// Components
import { View } from 'react-native';
import { styles } from './Style';
import PlayerScreen from '../player/PlayerScreen';
import SettingScreen from '../setting/SettingScreen';

// Side Menu
import SideMenu from 'react-native-side-menu';
import MenuScreen from '../menu/MenuScreen';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

// Firebase Database
import firebase from 'react-native-firebase';

class HomeScreen extends React.Component {
  render() {
    return (
      <SideMenu
        menu={<MenuScreen/>}
        isOpen={this.props.menuState}
        onChange={isOpen => this._changedMenuState(isOpen)}>
        <View style={styles.container}>
          {this.props.menuScreen == 'PLAYER' ? <PlayerScreen/> : <SettingScreen/>}
        </View>
    </SideMenu>
    );
  }

  componentDidMount() {
    firebase.database().ref('test').child("todo")
      .push({
        fha: 'yeahhhh!!!!',
        pho: 'hooooooooooohhh!'
           })
  }

  // Side Menu
  _changedMenuState(isOpen) {
    this.props.updateMenuState(isOpen);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);