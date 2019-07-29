import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class MyPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('title')
    }
  }
  render() {
    console.log(this.props.navigation.getParam('title'))
    return (
      <View style={styles.container}>
        <Text style={styles.text}> MyPage </Text>
        <Button
          title="回到Home"
          onPress={() => {
            this.props.navigation.goBack()
            console.log(this.props)
          }}
        />
        <Button
          title="更新title参数"
          onPress={() => {
            this.props.navigation.setParams({
              title: '更新了My'
            })
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
  }
})
