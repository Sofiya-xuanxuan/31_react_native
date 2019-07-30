import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'

import HomePage from '../Pages/HomePage'
import MyPage from '../Pages/MyPage'
import HotPage from '../Pages/HotPage'
import SectionListPage from '../Pages/SectionListPage'
import SwipeableFlatListPage from '../Pages/SwipeableFlatListPage'

const AppTopNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomePage
    },
    My: {
      screen: MyPage
    },
    Hot: {
      screen: HotPage
    },
    SwipeableFlatList: {
      screen: SwipeableFlatListPage
    },
    SectionList: {
      screen: SectionListPage
    }
  },
  {
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true
    },
    initialRouteName: 'Hot'
  }
)

class TopNavigator extends Component {
  render() {
    const AppTNavigator = createAppContainer(AppTopNavigator)
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        <AppTNavigator />
      </View>
    )
  }
}
//AppNavigator不能直接暴露给根组件，所以需要使用createAppContainer包裹一下
export default TopNavigator
