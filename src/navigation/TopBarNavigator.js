import React from 'react'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import Latest from '../screens/Latest'
import Today from '../screens/Today'
import Schedule from '../screens/Schedule'
import Settings from '../screens/Settings'

const TopBarNavigatorNavigator = createMaterialTopTabNavigator({
  Discover: {
    screen: Latest,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-disc' size={20} color='#B81351' />
    }
  },
  Upcoming: {
    screen: Today,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-today' size={20} color='#B81351' />
    }
  },
  // Search: {
  //   screen: Latest,
  //   navigationOptions: {
  //     tabBarIcon: <Ionicons name='ios-search' size={22} color='#B81351' />
  //   }
  // },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-calendar' size={20} color='#B81351' />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: <Ionicons name='ios-settings' size={20} color='#B81351' />
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#222327',
      height: 65
    },
    labelStyle: {
      fontSize: 10
    },
    activeTintColor: '#B81351',
    inactiveTintColor: '#707070',
    indicatorStyle: {
      backgroundColor: '#222327'
    }
  }
})

export default createAppContainer(TopBarNavigatorNavigator)