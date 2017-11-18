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
    backgroundColor: 'transparent'
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
  view_header: {
    width: DEVICE_WIDTH / 3 * 2,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
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