import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  Switch,
  Modal,
  TouchableHighlight,
  SafeAreaView,
  TextInput
} from 'react-native'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NavigationUtil from '../Navigator/NavigationUtil'
import IndexPage from './IndexPage'
import MyPage from './MyPage'

const TABS = {
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => {
        return (
          <FontAwesome name={'home'} size={26} style={{ color: tintColor }} />
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
          <FontAwesome name={'cog'} size={26} style={{ color: tintColor }} />
        )
      }
    }
  }
}
export default class HomePage extends Component {
  constructor(props) {
    super(props)
    //去掉黄色警告
    console.disableYellowBox = true
  }
  TabNavigator() {
    return createAppContainer(createBottomTabNavigator(TABS))
  }

  render() {
    NavigationUtil.navigation = this.props.navigation
    const Tabs = this.TabNavigator()
    return <Tabs />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 40,
    paddingTop: 40
  },
  text: {
    fontSize: 26
  }
})
