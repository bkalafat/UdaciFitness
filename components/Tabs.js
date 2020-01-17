import React from 'react'
import AddEntry from './AddEntry'
import History from './History'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {Platform} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { purple, white } from '../utils/colors'
import { createAppContainer } from 'react-navigation';

export default function Tabs() {

  const TabNavigator = createMaterialTopTabNavigator(
    {
      History: History,
      AddEntry: AddEntry,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return routeName === 'History' ? (
            <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
          ) : (
              <FontAwesome name="plus-square" size={30} color={tintColor} />
            );
        },
      }),
      tabBarOptions: {
        showIcon: true,
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
          height: 66,
          backgroundColor: Platform.OS === 'ios' ? white : purple,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      },
    }
  );

  const Tabs = createAppContainer(TabNavigator)

  return (Tabs)
}