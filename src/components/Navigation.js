import { StackNavigator } from 'react-navigation';
import Home from '../screens/home/Home';
import Settings from '../screens/settings/Settings';
import Favorite from '../screens/favorite/Favorite';

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: {
      header: null
    }
  }
});
