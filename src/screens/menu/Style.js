import { StyleSheet, Dimensions } from 'react-native';
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  lb_title: {
    width: DEVICE_WIDTH / 3 * 2,
    height: 24,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    position:'absolute',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Baskerville',
    backgroundColor: 'transparent',
    shadowOffset:{width: 2,  height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.6,
    },
  bg_image: {
    width: DEVICE_WIDTH / 3 * 2,
    height: DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  check_image: {
    width: 30,
    height: 30,
    right: 20,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent'
  },
  touchable_area: {
    width: DEVICE_WIDTH / 3 * 2,
  },
  view_header: {
    position: 'relative',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(256, 256, 256, 0.3)',
    borderRadius: 12,
    padding: 10,
    marginTop: 30,
    marginRight: 15,
    marginBottom: 20,
    marginLeft: 15,
    shadowOffset:{width: 5,  height: 5,},
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  icon_setting: {
    position: "absolute",
    top: 14,
    right: 14
  },
  profile_image_wrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 4,
    overflow: 'hidden',
  },  
  profile_image: {
    width: 60,
    height: 60,
  },
  user_name: {
    color: 'white',
    marginBottom: 20
  },
  favorite_sound: {
    width: 180,
    paddingTop: 10,
    borderTopColor: 'rgba(239, 240, 241, 0.3)',
    borderTopWidth: 2,    
  },
  title_fa_sound: {
    fontSize: 14,
    color: '#A7A7A7'
  },
  selected_sound: {
    color: 'white',
  },
  row_background_image: {
    width: DEVICE_WIDTH / 3 * 2,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 2,
    marginBottom: 2,
  }
});
