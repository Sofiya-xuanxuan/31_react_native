import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class WelcomePage extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      const { navigation } = this.props
      navigation.navigate('Main')
    }, 3000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> welcomePage </Text>
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
