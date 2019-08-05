import { connect } from 'react-redux'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'

import WelcomePage from '../Pages/WelcomePage'
import HomePage from '../Pages/HomePage'
import DetailPage from '../Pages/DetailPage'
import AsDemoPage from '../Pages/AsDemoPage'
//设置根路由
export const rootCom = 'Init'
const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      header: null
    }
  },
  AsDemoPage: {
    screen: AsDemoPage,
    navigationOptions: {
      header: null
    }
  }
})
//使用createReduxContainer方法，将RootNavigator封装成高阶组件
//AppWithNavigationState，这个高阶组件完成了navigation prop的替换，改成了使用redux里的navigation
export const RootNavigator = createAppContainer(
  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
  })
)

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root')
//中间件
//createReduxContainer`把导航状态放到`props`里只是能被各个组件访问到，但
//是`React Navigation`还不能识别，所以还需要最后一步——创建一个中间件，把需要导航的组件
//与导航`reducer`连接起来
export const middleweare = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
)

//将state到Props的映射关系
const mapStateToProps = state => {
  return {
    state: state.nav
  }
}
//使用redux的connect函数再封装一个高阶组件，连接react组件与redux store
export default connect(mapStateToProps)(AppWithNavigationState)
