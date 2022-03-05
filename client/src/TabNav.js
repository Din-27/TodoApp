import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import TodoApp from './TodoApp'

export default function TabNav() {
  const Tab = createBottomTabNavigator();
  const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Today':
        iconName = 'appstore-o';
        break;
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  };
  
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      {/* rest remains same */}
      <Tab.Screen
      name="Home" component={Home}/>
      <Tab.Screen 
      name="Today" 
      component={TodoApp} />
    </Tab.Navigator>
  );
}