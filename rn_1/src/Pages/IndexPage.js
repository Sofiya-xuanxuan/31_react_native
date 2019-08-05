import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'
import NavigationUtil from '../Navigator/NavigationUtil'
// 动态顶部导航
export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
    this.tabsName = ['html', 'css', 'js', 'vue', 'react', 'nodejs']
  }
  genTabs() {
    const obj = {}
    this.tabsName.forEach((item, index) => {
      obj[`${item}`] = {
        screen: props => {
          return <IndexTab {...props} tabName={item} />
        }
      }
    })
    return obj
  }
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(this.genTabs(), {
        // lazy: true,
        tabBarOptions: {
          upperCaseLabel: false,
          scrollEnabled: true
        }
      })
    )
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigator />
      </SafeAreaView>
    )
  }
}
class IndexTab extends Component {
  render() {
    const { tabName } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabName}</Text>
        <Button
          title="进入详情页"
          onPress={() => {
            NavigationUtil.navigation.navigate('DetailPage')
          }}
        />
        <Button
          title="进入离线缓存框架测试"
          onPress={() => {
            NavigationUtil.navigation.navigate('AsDemoPage')
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  text: {
    fontSize: 26
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
