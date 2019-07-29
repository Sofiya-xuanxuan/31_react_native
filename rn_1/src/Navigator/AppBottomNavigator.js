import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import HomePage from '../Pages/HomePage'
import HotPage from '../Pages/HotPage'
import MyPage from '../Pages/MyPage'
import SwipeableFlatListPage from '../Pages/SwipeableFlatListPage'
import SectionListPage from '../Pages/SectionListPage'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AppBottomNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome name={'home'} size={26} style={{ color: tintColor }} />
          )
        }
      }
    },
    HotPage: {
      screen: HotPage,
      navigationOptions: {
        tabBarLabel: '热门',
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome name={'fire'} size={26} style={{ color: tintColor }} />
          )
        }
      }
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => {
          return (
            <Image
              style={{ width: 26, height: 26 }}
              source={
                focused
                  ? require('../pics/logo.png')
                  : require('../pics/timg.jpeg')
              }
            />
          )
        }
      }
    },
    SwipeableFlatListPage: {
      screen: SwipeableFlatListPage,
      navigationOptions: {
        tabBarLabel: '侧滑'
      }
    },
    SectionListPage: {
      screen: SectionListPage,
      navigationOptions: {
        tabBarLabel: '分组'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#000',
      style: { borderBottomWidth: 1, borderTopColor: 'red' }
    }
  }
)

export default createAppContainer(AppBottomNavigator)
