import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screen/HomeScreen';
import SettingsScreen from '../../../screen/SettingsScreen';
import FavoritesScreen from '../../../screen/FavoritesScreen';
import AccountScreen from '../../../screen/AccountScreen';

import { View, Image} from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { styles } from './TabNavigation.styles';
import AuthScreen from '../../../screen/Auth/AuthScreen';
import Personajes from '../../../screen/Personajes';
import iconRick from '../../../assets/iconRickP.png';
import portal from '../../../assets/portal.png';
import iconPepenillorick from '../../../assets/iconPepenillorick.png';

const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus)
      })}
      >

        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title: 'Inicio', tabBarLabel: ''}}/>

        <Tab.Screen 
        name="Personajes" 
        component={Personajes} 
        options={{title: 'Personajes' , tabBarLabel: ''}}
        />

        {/* <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{title: 'Ajustes'}} />

      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{title: 'Favoritos'}} /> */}

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{title: 'Cuenta', tabBarLabel: ''}}
      />

    </Tab.Navigator>

    

  )
  
  


  
    
}
const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#6E6E6E';

  if (routeStatus.focused) {
    color = '#BE81F7';
  }

  if (route.name === 'Home') {
    return <Image source={portal} style={{width: 60, height: 60, }} />;
  } else if (route.name === 'Settings') {
    iconName = 'cog';
  } else if (route.name === 'Favorites') {
    iconName = 'heart';
  } else if (route.name === 'Account') {
    return <Image source={iconPepenillorick} style={{width: 60, height: 70, marginBottom:10 }} />;
  } else if (route.name === 'Personajes') {
    // Usar el componente Image con tu imagen personalizada
    return <Image source={iconRick} style={{width: 70, height: 100, marginBottom:30}} />;
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};

export default TabNavigations