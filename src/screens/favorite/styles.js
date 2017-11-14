import { StyleSheet, Dimensions } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header_container: {
    width: DEVICE_WIDTH,
    height: 60
  },
  lb_title: {
    width: DEVICE_WIDTH - 124,
    height: 20,
    left: 62,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position:'absolute',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    ...ifIphoneX({ top: 43.5 }, { top: 23.5 })
  },
  bg_image: {
    width: DEVICE_WIDTH ,
    height: DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  btn_right_menu_touchable: {
    width: 54,
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
  txt_done: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position:'absolute',
    backgroundColor: 'transparent',
  },
  check_image: {
    width: 30,
    height: 30,
    right: 20,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent'
  },
  view_header: {
    width: DEVICE_WIDTH ,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  flatList_contents: {
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  row_background_image: {
    width: DEVICE_WIDTH ,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});