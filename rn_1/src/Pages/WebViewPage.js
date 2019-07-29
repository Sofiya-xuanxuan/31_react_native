import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { WebView } from 'react-native-webview'
export default class WebViewPage extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.baidu.com' }} />
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
