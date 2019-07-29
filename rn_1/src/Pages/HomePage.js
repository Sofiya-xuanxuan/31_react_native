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

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    //去掉黄色警告
    console.disableYellowBox = true
    this.state = {
      one: '',
      two: true,
      three: '',
      modalVisible: false,
      text: ''
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }
  render() {
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={styles.container}>
        <Text style={styles.text}> HomePage </Text>
        <Button
          title="WebView"
          onPress={() => {
            this.props.navigation.navigate('WebView', {
              title: '我的页面'
            })
            console.log(this.props)
          }}
        />
        <Button
          title="跳转到我的页面"
          onPress={() => {
            this.props.navigation.navigate('My', {
              title: '我的页面'
            })
            console.log(this.props)
          }}
        />
        <Button
          title="跳转到热门页面"
          onPress={() => {
            this.props.navigation.navigate('Hot', {
              title: '热门'
            })
          }}
        />
        <Button
          title="FlatList"
          onPress={() => {
            this.props.navigation.navigate('List', {
              title: '列表页'
            })
          }}
        />
        <Button
          title="ActivityIndicator"
          onPress={() => {
            this.props.navigation.navigate('ActivityIndicator', {
              title: '小菊花'
            })
          }}
        />
        <Image
          style={{ width: 50, height: 50 }} //网络和 base64 数据的图片需要手动指定尺寸
          source={{
            uri:
              'https://facebook.github.io/react-native/docs/assets/favicon.png'
          }}
        />
        <ImageBackground
          source={{
            uri:
              'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
          }}
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <Text>inside</Text>
        </ImageBackground>
        <Switch
          value={this.state.one}
          trackColor={{ true: 'red', false: '#000' }}
          disabled={true}
          onValueChange={value => {
            this.setState({
              one: value
            })
          }}
        />
        <Switch
          value={this.state.two}
          trackColor={{ true: 'green', false: '#000' }}
          onValueChange={value => {
            this.setState({
              two: value
            })
          }}
        />
        <Switch
          value={this.state.three}
          trackColor={{ true: 'yellow', false: '#000' }}
          onValueChange={value => {
            this.setState({
              three: value
            })
          }}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed')
          }}
        >
          <View>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false)
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true)
          }}
        >
          <Text>show Modal</Text>
        </TouchableHighlight>

        <Text ellipsizeMode={'tail'} numberOfLines={1} selectable={true}>
          hjlhjkhjhhhjkhkjhjhjkhjkhkjhj和健康和健康和健康和空间会尽快汇款建行卡和健康和空间会尽快好久好久可好看
        </Text>
        <TextInput
          style={{
            width: 100,
            height: 40,
            borderColor: 'red',
            borderWidth: 2
          }}
          maxLength={20}
          defaultValue={'xxxx'}
          autoCapitalize={'none'}
          onChangeText={text => {
            this.setState({
              text: text
            })
          }}
        />
      </View>
      // </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 40
  },
  text: {
    fontSize: 26
  }
})
