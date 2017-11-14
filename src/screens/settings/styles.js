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
    height: 60,
  },
  profile_image_container: {
    width: DEVICE_WIDTH,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput_container: {
    width: DEVICE_WIDTH
  },
  textinput_label: {
    width: 120,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  bg_image: {
    width: DEVICE_WIDTH ,
    height: DEVICE_HEIGHT,
    backgroundColor: 'transparent'
  },
  profile_image: {
    width: 60,
    height: 60,
  },
  profile_image_wrapper: {
    width: 60,
    height: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  btn_left_menu_touchable: {
    width: 44,
    height: 44,
    left: 10,
    position:'absolute',
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  btn_right_menu_touchable: {
    width: 54,
    height: 44,
    right: 10,
    position:'absolute',
    ...ifIphoneX({ top: 40 }, { top: 20 })
  },
  btn_change_profile: {
    fontSize: 14
  },
  txt_done: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position:'absolute',
    backgroundColor: 'transparent',
  },
  txt_change_profile: {
    fontSize: 14, 
    color: '#23aadb', 
    margin: 10
  },
  textInput_name: {
    flex: 1, 
    fontSize: 14, 
    marginRight: 16
  },
  view_line: {
    flex : 1,
    borderBottomColor: 'rgba(239, 240, 241, 0.3)',
    borderBottomWidth: 2,
    marginTop: 12
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
});