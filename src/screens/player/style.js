import { StyleSheet, Dimensions } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  containerHeader: {
    width: DEVICE_WIDTH,
    height: 100,
    position:'absolute'
  },
  lb_title: {
    width: DEVICE_WIDTH - 124,
    height: 44,
    left: 62,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position:'absolute',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Baskerville',
    backgroundColor: 'transparent',
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  btn_play: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_right_menu_touchable: {
    width: 44,
    height: 44,
    right: 10,
    position:'absolute',
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  btn_left_menu_touchable: {
    width: 44,
    height: 44,
    left: 10,
    position:'absolute',
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  btn_header_menu: {
    width: 28,
    height: 28,
    margin: 8
  },
  row_background_image: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});