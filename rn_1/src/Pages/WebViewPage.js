import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { WebView } from 'react-native-webview'
export default class WebViewPage extends Component {
  // { uri: 'https://www.baidu.com' }
  //require('./index.html')

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          // ref={el => {
          //   this.webViewRef = el
          // }}
          source={require('./index.html')}
          // injectedJavaScript={'test()'}
          // onLoadEnd={() => {
          //   this.webViewRef.postMessage('来自RN的信息')
          // }}
          // onMessage={e => {
          //   console.log(e.nativeEvent.data)
          // }}
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
