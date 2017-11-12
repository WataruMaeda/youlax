import { StyleSheet, Dimensions } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  bg_image: {
    width: DEVICE_WIDTH ,
    height: DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  btn_left_menu_touchable: {
    width: 44,
    height: 44,
    left: 10,
    position:'absolute',
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  btn_right_menu_touchable: {
    width: 44,
    height: 44,
    right: 10,
    position:'absolute',
    ...ifIphoneX({ top: 40 }, { top: 20 })
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
});