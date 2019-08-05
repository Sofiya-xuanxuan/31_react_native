import { applyMiddleware, createStore } from 'redux'
import reducers from '../Reducer'
import { middleweare } from '../Navigator/AppNavigator'

const middlewares = [middleweare]
/**
 * 创建store
 */
export default createStore(reducers, applyMiddleware(...middlewares))
