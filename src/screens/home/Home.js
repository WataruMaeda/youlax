import React from 'react';

// Components
import { View } from 'react-native';
import { styles } from './style';
import Player from '../player/Player';
import Settings from '../settings/Settings';

// Side Menu
import SideMenu from 'react-native-side-menu';
import Menu from '../menu/Menu';

// Redux
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../action';

class Home extends React.Component {
  render() {
    return (
      <SideMenu
        menu={<Menu/>}
        isOpen={this.props.menuState}
        onChange={isOpen => this._changedMenuState(isOpen)}>
        <View style={styles.container}>
          {this.props.menuScreen == 'PLAYER' ? <Player/> : <Settings/>}
        </View>
    </SideMenu>
    );
  }

  // Side Menu
  _changedMenuState(isOpen) {
    this.props.updateMenuState(isOpen);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);