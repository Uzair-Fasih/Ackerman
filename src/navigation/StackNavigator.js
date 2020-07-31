import { createStackNavigator, createAppContainer } from 'react-navigation';

import Showcase from '../screens/Showcase';
import TopBarNavigation from './TopBarNavigator';

const StackNavigator = createStackNavigator({
  TopBarNavigation: {screen: TopBarNavigation, navigationOptions:{ header: null }},
  Showcase: {screen: Showcase, navigationOptions: { header: null }},
})

export default createAppContainer(StackNavigator);
