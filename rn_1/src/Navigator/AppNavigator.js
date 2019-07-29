import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import HomePage from '../Pages/HomePage'
import MyPage from '../Pages/MyPage'
import HotPage from '../Pages/HotPage'
import ActivityIndicatorPage from '../Pages/ActivityIndicatorPage'
import WebViewPage from '../Pages/WebViewPage'
import ListPage from '../Pages/ListPage'
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      //header: null//不要导航栏
      headerTitle: '首页'
    }
  },
  My: {
    screen: MyPage
  },
  Hot: {
    screen: HotPage
  },
  WebView: {
    screen: WebViewPage
  },
  ActivityIndicator: {
    screen: ActivityIndicatorPage
  },
  List: {
    screen: ListPage
  }
})
//AppNavigator不能直接暴露给根组件，所以需要使用createAppContainer包裹一下
export default createAppContainer(AppNavigator)