import React, { Component } from 'react'
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'

import HomePage from '../Pages/HomePage'
import MyPage from '../Pages/MyPage'
import HotPage from '../Pages/HotPage'

const AppTopNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomePage
  },
  My: {
    screen: MyPage
  },
  Hot: {
    screen: HotPage
  }
})

class TopNavigator extends Component {
  render() {
    const AppTNavigator = createAppContainer(TopNavigator)
    return (
      <View style={{ flex: 1, marginTop: 40 }}>
        <AppTNavigator />
      </View>
    )
  }
}
//AppNavigator不能直接暴露给根组件，所以需要使用createAppContainer包裹一下
export default createAppContainer(TopNavigator)
