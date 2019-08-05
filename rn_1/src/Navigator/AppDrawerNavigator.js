import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

import HomePage from '../Pages/HomePage'
import HotPage from '../Pages/HotPage'
import MyPage from '../Pages/MyPage'
import SwipeableFlatListPage from '../Pages/SwipeableFlatListPage'
import SectionListPage from '../Pages/SectionListPage'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AppDrawerNavigator = createDrawerNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        drawerLabel: '首页',
        drawerIcon: ({ tintColor, focused }) => {
          return (
            <Ionicons
              name={'ios-home'}
              size={26}
              style={{ color: tintColor }}
            />
          )
        }
      }
    },
    HotPage: {
      screen: HotPage,
      navigationOptions: {
        drawerLabel: '热门',
        drawerIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome name={'fire'} size={26} style={{ color: tintColor }} />
          )
        }
      }
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        drawerLabel: '我的',
        drawerIcon: ({ tintColor, focused }) => {
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
        drawerLabel: '侧滑',
        drawerIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome
              name={'sliders'}
              size={26}
              style={{ color: tintColor }}
            />
          )
        }
      }
    },
    SectionListPage: {
      screen: SectionListPage,
      navigationOptions: {
        drawerLabel: '分组',
        drawerIcon: ({ tintColor, focused }) => {
          return (
            <FontAwesome
              name={'align-justify'}
              size={26}
              style={{ color: tintColor }}
            />
          )
        }
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

export default createAppContainer(AppDrawerNavigator)
