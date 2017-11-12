import { StyleSheet, Dimensions } from 'react-native';
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
    top: 20,
    position:'absolute'
  },
  btn_right_menu_touchable: {
    width: 44,
    height: 44,
    right: 10,
    top: 20,
    position:'absolute'
  },
  lb_title: {
    width: DEVICE_WIDTH - 124,
    height: 44,
    left: 62,
    top: 20,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position:'absolute',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Baskerville',
    backgroundColor: 'transparent'
  },
});